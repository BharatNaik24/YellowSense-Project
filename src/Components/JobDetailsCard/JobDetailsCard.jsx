import { useState } from "react";
import { useBookmark } from "../../Context/BookmarkContext ";
import { FaGripLinesVertical } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./JobDetailsCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const JobDetailsCard = ({ jobDes }) => {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
  const isJobBookmarked = isBookmarked(jobDes.id);
  const [showModal, setShowModal] = useState(false);
  const handleBookmark = () => {
    if (isJobBookmarked) {
      removeBookmark(jobDes.id);
    } else {
      addBookmark(jobDes);
    }
  };

  const handleApplyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-5">
      <div className="container">
        <h1 className="mb-3">Job Details</h1>
        <div className="d-flex">
          <div className="jobDetailsLabelContainer">
            <div className="thumbNailImgContainer">
              <div>
                <h5 className="mb-0">
                  <strong>{jobDes.job_role}</strong>
                </h5>
                <p className="mb-1">
                  <strong>{jobDes.company_name}</strong>
                </p>
                <p className="mb-0">{jobDes.title} </p>
              </div>
              <div>
                <img src={jobDes.creatives[0].thumb_url} alt="Thumbnail" />
              </div>
            </div>
            <div className="mt-3">
              <div className="expienceAndSalary">
                <div>
                  <PiSuitcaseSimple />
                  <span>{jobDes.primary_details.Experience}</span>
                </div>
                <FaGripLinesVertical />
                <div>
                  <MdOutlineCurrencyRupee />
                  <span>{jobDes.primary_details.Salary.slice()}</span>
                </div>
              </div>
              <div className="expienceAndSalary">
                <IoLocationOutline />
                <span>{jobDes.primary_details.Place}</span>
              </div>
              <hr className="hrLine" />

              <div className="postedAndOpeningsContainer">
                <div className="postedAndOpenings">
                  <p className="paras">
                    Posted : {jobDes.updated_on.replace("T", " ").slice(0, 10)}
                  </p>
                  <p className="paras">
                    Openings :{jobDes.job_tags[0].value.slice(0, 3)}
                  </p>
                  <p className="paras">
                    Applicants : {jobDes.num_applications}
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleBookmark}
                    className={`btn ${
                      isJobBookmarked ? "btn-danger" : "btn-warning"
                    } mx-2`}
                  >
                    {isJobBookmarked ? "Unbookmark" : "Bookmark"}
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={handleApplyClick}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 p-0">
              <div className="jobDescriptionContainer">
                <div className="JobDetails">
                  <h5></h5>
                  <h6>Job Description :</h6>
                  <p>{jobDes.other_details}</p>
                </div>
                <div>
                  <p>Qualification: {jobDes.primary_details.Qualification}</p>
                </div>
                <div>
                  <p>
                    Role:
                    <span>{jobDes.job_role}</span>
                  </p>
                  <p>
                    Industry Type:<span>{jobDes.job_category}</span>
                  </p>
                  <p>
                    Employment Type:<span>{jobDes.job_hours}</span>
                  </p>
                  <p>Contact: {jobDes.whatsapp_no}</p>
                  <p>{jobDes.custom_link}</p>
                </div>
                <hr className="hrLine" />
                <div className="contactsContainer">
                  <div className="iconsContainer">
                    <a
                      href={jobDes.contact_preference.whatsapp_link}
                      target="__blank"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        style={{ color: "#63E6BE", fontSize: "30px" }}
                      />
                    </a>
                    <a href="https://x.com/WasakiYT24" target="__blank">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "#1DA1F2", fontSize: "30px" }}
                      />
                    </a>
                  </div>
                  <div className="">
                    <button className="btn btn-primary">Report This Job</button>
                  </div>
                </div>
              </div>
              <h1 className="text-danger mt-3">Note: Beware of imposters!</h1>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {jobDes.job_role}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Fill in your details to apply for this position at
            {jobDes.company_name}.
          </p>
          {/*forms that can be added for future referance project  */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Submit Application
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JobDetailsCard;
