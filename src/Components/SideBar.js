import React from "react";

function SideBar() {
  return (
    <React.Fragment>
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link " href="/">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>

            <li class="nav-item">
              <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <a href="icons-bootstrap.html">
                    <i class="bi bi-circle"></i>
                    <span>Bootstrap Icons</span>
                  </a>
                </li>
                <li>
                  <a href="icons-remix.html">
                    <i class="bi bi-circle"></i>
                    <span>Remix Icons</span>
                  </a>
                </li>
                <li>
                  <a href="icons-boxicons.html">
                    <i class="bi bi-circle"></i>
                    <span>Boxicons</span>
                  </a>
                </li>
              </ul>
            </li>
          </li>

          <li class="nav-heading">Client Managment</li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="/usermanage">
              <i class="bi bi-person"></i>
              <span>Manage Clients</span>
            </a>
          </li>

          <li class="nav-heading">Content Managment System</li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/profile">
              <i class="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/FAQ">
              <i class="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/contact">
              <i class="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="/register">
              <i class="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/login">
              <i class="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/error">
              <i class="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="/blank">
              <i class="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li>
        </ul>
      </aside>
    </React.Fragment>
  );
}

export default SideBar;
