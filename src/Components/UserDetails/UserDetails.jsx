import "./UserDetails.css";

function UserDetails() {
  const userDetail = {
    id: 1,
    name: "Bharat Naik Badavath",
    email: "bharatnaik877@gmail.com, bbnaik05@gmail.com",
    phone: "+91-9182053974",
    role: "Admin, Site Developer",
    lastLogin: new Date(),
    status: "Active",
  };

  return (
    <div className="container mainBgContainer ">
      <h1 className="userheading">User Details</h1>
      <div className="cardContainer">
        <div className="userDetailCard">
          <img
            src="https://img.freepik.com/premium-vector/bharat-hindi-creative-calligraphy-lettering-text_684790-29.jpg"
            alt="accountUser"
            className="logoImg"
          />
          <h2>{userDetail.name}</h2>
          <p>Email: {userDetail.email}</p>
          <p>Phone: {userDetail.phone}</p>
          <p>Role: {userDetail.role}</p>
          <p>Last Login: {new Date(userDetail.lastLogin).toLocaleString()}</p>
          <p>Status: {userDetail.status}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
