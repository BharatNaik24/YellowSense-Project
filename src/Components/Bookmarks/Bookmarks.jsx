import { useBookmark } from "../../Context/BookmarkContext ";
import JobCard from "../JobCard/JobCard";
import "./Bookmarks.css";

const Bookmark = () => {
  const { bookmarks } = useBookmark();

  return (
    <div className="bookmarked-jobs container">
      <h1>Bookmarked Jobs</h1>
      {bookmarks.length === 0 ? (
        <p>No jobs bookmarked yet</p>
      ) : (
        <div className="job-list">
          {bookmarks.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
