import React from "react";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

function Register() {
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
        <h2>Your Registration page for each user will go here</h2>
      </main>
    </React.Fragment>
  );
}

export default Register;
