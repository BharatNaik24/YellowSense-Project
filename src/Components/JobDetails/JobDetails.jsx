import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";
import { Hourglass } from "react-loader-spinner";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDes, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pages = [1, 2, 3];

    const fetchJobDetails = async () => {
      try {
        let jobFound = false;
        for (let page of pages) {
          const response = await fetch(
            `https://testapi.getlokalapp.com/common/jobs/${id}?page=${page}`
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          // Finds the job with the matching ID
          const job = data.results.find((job) => job.id === parseInt(id));
          if (job) {
            setJob(job);
            jobFound = true;
            break; // Exit the loop once the job is found
          }
        }

        if (!jobFound) {
          setError("Job not found");
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading)
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
  if (error)
    return (
      <div className="error-message">
        <h1> Error: {error}</h1>
        <img
          src="https://www.reshot.com/preview-assets/illustrations/92HR3KW4PL/404-error-for-travel-page-92HR3KW4PL-w1600.jpg"
          alt="error Logo"
          className="errorLogo"
        />
      </div>
    );
  if (!jobDes)
    return (
      <div>
        <div className="error-message container">
          <h1>NO JOBS FOUND</h1>
          <img
            src="https://www.reshot.com/preview-assets/illustrations/92HR3KW4PL/404-error-for-travel-page-92HR3KW4PL-w1600.jpg"
            alt="error Logo"
            className="errorLogo"
          />
        </div>
      </div>
    );

  return (
    <div>
      <div>
        <JobDetailsCard jobDes={jobDes} />
      </div>
    </div>
  );
};

export default JobDetails;
