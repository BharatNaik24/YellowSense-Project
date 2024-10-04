import { useNavigate } from "react-router-dom";
import { PiSuitcaseSimple } from "react-icons/pi";
import { BiSpreadsheet, BiHide } from "react-icons/bi";
import { FaGripLinesVertical, FaRegEye } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";
import { useBookmark } from "../../Context/BookmarkContext ";
import "./JobCard.css";
import { useSwipeable } from "react-swipeable";

const JobCard = ({ job }) => {
  const [hideContent, setHideContent] = useState(false);
  const navigate = useNavigate();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
  const isJobBookmarked = isBookmarked(job.id);

  const handleBookmark = () => {
    if (isJobBookmarked) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  const handleHideContent = () => {
    setHideContent(!hideContent);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleHideContent(),
    onSwipedRight: () => handleBookmark(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="assds">
      <div
        className="job-card mb-3"
        onClick={() => !hideContent && navigate(`/jobs/${job.id}`)}
      >
        {!hideContent ? (
          <>
            <div>
              <h2 className="jobRole">{job.job_role}</h2>
              <div className="compNameAndExp">
                <p>{job.company_name}</p>
              </div>
            </div>
            <div className="jobLocDetails">
              <div className="eachIcon">
                <PiSuitcaseSimple size={20} className="icon" />
                <span className="experienceText">
                  {job.primary_details?.Experience || "N/A"}
                </span>
              </div>
              <FaGripLinesVertical className="icon" />

              <div className="eachIcon">
                <MdOutlineCurrencyRupee size={20} className="icon" />
                <span>
                  {job.primary_details?.Salary.slice() || "N/A Not Disclosed"}
                </span>
              </div>
              <FaGripLinesVertical className="icon" />
              <div className="eachIcon">
                <IoLocationOutline size={20} className="icon" />
                <span>{job.job_location_slug}</span>
              </div>
            </div>
            <div className="JobDescContainer">
              <div>
                <BiSpreadsheet size={20} className="icon" />
              </div>
              <p className="JobDescription">{job.other_details || "N/A"}</p>
            </div>
            <div className="BtnContainer">
              <div>
                <p className="postedDate">
                  Posted: {job.updated_on?.slice(0, 10)}
                </p>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHideContent();
                  }}
                  className="customBtn"
                  aria-label={
                    hideContent ? "Show job details" : "Hide job details"
                  }
                >
                  {hideContent ? (
                    <div>
                      <FaRegEye /> Undo
                    </div>
                  ) : (
                    <BiHide size={25} />
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmark();
                  }}
                  className="customBtn"
                  aria-label={
                    isJobBookmarked ? "Remove bookmark" : "Add bookmark"
                  }
                >
                  {isJobBookmarked ? (
                    <div>
                      <FaBookmark size={25} /> <span> Unmark</span>
                    </div>
                  ) : (
                    <div>
                      <CiBookmark size={25} /> <span>Bookmark</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={handleHideContent}
            className="customBtn"
            aria-label={hideContent ? "Show job details" : "Hide job details"}
          >
            {hideContent ? (
              <div>
                <FaRegEye /> Undo
              </div>
            ) : (
              <BiHide size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
