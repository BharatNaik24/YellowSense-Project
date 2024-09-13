import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./Components/Jobs/Jobs";
import "./App.css";
import JobDetails from "./Components/JobDetails/JobDetails";
import Header from "./Components/Header/Header";
import BookmarkList from "./Components/Bookmarks/Bookmarks";
import PageWelcome from "./Components/PageWelcome/PageWelcome";
import UserDetails from "./Components/UserDetails/UserDetails";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="mt-5">
        <Routes>
          <Route exact path="/" element={<PageWelcome />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/jobs/:id" element={<JobDetails />} />
          <Route exact path="/bookmarks" element={<BookmarkList />} />
          <Route exact path="/UserDetails" element={<UserDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
