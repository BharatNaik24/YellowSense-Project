import { createContext, useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a Context for the bookmarks
const BookmarkContext = createContext();

// Create a Provider component
export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Load bookmarks from local storage on component mount
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  // Add a job to bookmarks
  const addBookmark = (job) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = [...prevBookmarks, job];
      localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));

      toast.success(`${job.job_role} job added to bookmarks!`);

      return updatedBookmarks;
    });
  };

  // Remove a job from bookmarks
  const removeBookmark = (jobId) => {
    const jobToRemove = bookmarks.find((job) => job.id === jobId);

    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.filter((job) => job.id !== jobId);
      localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));

      toast.info(`${jobToRemove.job_role} job Removed from bookmarks!`);

      return updatedBookmarks;
    });
  };

  // Check if a job is bookmarked
  const isBookmarked = (jobId) => {
    return bookmarks.some((job) => job.id === jobId);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
      <ToastContainer />
    </BookmarkContext.Provider>
  );
};

// Custom hook to use the BookmarkContext
export const useBookmark = () => {
  return useContext(BookmarkContext);
};
