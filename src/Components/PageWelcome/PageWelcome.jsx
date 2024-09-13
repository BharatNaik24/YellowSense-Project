import "./PageWelcome.css";
import { Link } from "react-router-dom";

export default function PageWelcome() {
  return (
    <div className="container mainHomeContainer">
      <div className="homeContainer">
        <div className="eachCon">
          {/* <img
            src="https://img.freepik.com/premium-vector/bharat-hindi-creative-calligraphy-lettering-text_684790-29.jpg"
            alt="landingPageLogo"
            className="landingPageLogo"
          /> */}
          <h1>Hello, User</h1>
          <p>
            Welcome to India’s leading job platform for finding your ideal
            career path. Whatever you’re looking for, we’ve got it! Our mission
            is to empower the youth of India, helping them secure fulfilling
            careers that make both them and the country proud. We understand the
            importance of finding the perfect job, and with us, you can explore
            a diverse range of opportunities tailored to your ambitions.
            <br />
            <br />
          </p>
          <Link to="/jobs">
            <button className="btn btn-warning">Click to Start</button>
          </Link>
        </div>
        <div className="eachCon">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764521_1280.jpg"
            alt="landingPageImg"
            className="landingPageImg"
          />
        </div>
      </div>
    </div>
  );
}
