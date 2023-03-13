import React from "react";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

function Blank() {
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
        <h2>If a new page is created then its template will go here</h2>
      </main>
    </React.Fragment>
  );
}

export default Blank;
