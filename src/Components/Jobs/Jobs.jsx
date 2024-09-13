import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import JobCard from "../JobCard/JobCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Jobs.css";
import { Hourglass } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchJobs = async (pageNumber) => {
    const url = `https://testapi.getlokalapp.com/common/jobs?page=${pageNumber}`;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data.results.length === 0 && pageNumber > 1) {
        setHasMore(false);
        setError("No more jobs available, Try again later.");
        return;
      }

      if (pageNumber === 1) {
        setJobs(data.results);
      } else {
        setJobs((prevJobs) => [...prevJobs, ...data.results]);
      }

      setPage(pageNumber);
      setHasMore(data.results.length > 0);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && jobs.length === 0) {
    return (
      <div className="loaderSpin">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message container">
        <p>{error}</p>
        <button onClick={() => fetchJobs(1)} className="btn9">
          Return to Home
        </button>
        <img
          src="https://www.reshot.com/preview-assets/illustrations/92HR3KW4PL/404-error-for-travel-page-92HR3KW4PL-w1600.jpg"
          alt="error Logo"
          className="errorLogo"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="jobs-list container">
        <h1 className="latestJobsHeading">Latest Jobs</h1>
        <div className="dfsd">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={uuid4()} job={job} />) // i am using uuid() because it shows  Warning: Each child in a list should have a unique "key" prop
          ) : (
            <div className="noJobsContainer">
              <h1>No jobs Found </h1>
              <p>Please try the next page</p>
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/04/11/06/26/360_F_411062649_T7NaDgDX4bGSb2RaaQyTKhXitJ2sCpVW.jpg"
                  alt="noJobs"
                  className="noJobs"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {jobs.length > 0 && (
        <div className="pagination-controls pagination_checks">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1 || loading}
            className="pageBtn"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              fade
              size="2xl"
              style={{ color: "#74C0FC" }}
            />
          </button>
          <span className="count">{page}</span>
          <button
            onClick={handleNextPage}
            disabled={!hasMore || loading}
            className="pageBtn"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              fade
              size="2xl"
              style={{ color: "#74C0FC" }}
            />
          </button>
        </div>
      )}

      {loading && jobs.length > 0 && (
        <div className="loaderSpin">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      )}
    </div>
  );
};

export default Jobs;
