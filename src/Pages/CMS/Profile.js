import React from "react";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

function Profile() {
  return (
    <React.Fragment>
      <Header />
      <SideBar />
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li class="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        <h2>Your Model Profile page will go here</h2>
        <p>will be similar to a facebook profile page, will have images, name, information</p>
      </main>
    </React.Fragment>
  );
}

export default Profile;
