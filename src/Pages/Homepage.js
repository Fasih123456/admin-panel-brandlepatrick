import React, { useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";

import Chart from "react-apexcharts";

function Homepage() {
  const [state, setState] = React.useState({
    options: {
      chart: {
        id: "mixed-chart",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "Revenue",
        type: "line",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Users",
        type: "line",
        data: [11, 32, 45, 32, 34, 52, 41, 31],
      },
    ],
  });

  const [barChart, setBarChart] = React.useState({
    options: {
      chart: {
        id: "pie-chart",
      },
      labels: ["Marketing", "Software", "Development", "Maintenance", "Fees"],
    },
    series: [50, 10, 10, 10, 20],
  });

  const [websiteTraffic, setWebsiteTraffic] = React.useState({
    options: {
      chart: {
        id: "pie-chart",
      },
      labels: ["Google", "Bing", "GoDuck", "Advertisment", "Direct"],
    },
    series: [50, 20, 20, 5, 5],
  });

  return (
    <React.Fragment>
      <Header />
      <SideBar />

      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section class="section dashboard" style={{ width: "100%" }}>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card sales-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Sales <span>| Today</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-cart"></i>
                      </div>
                      <div class="ps-3">
                        <h6>145</h6>
                        <span class="text-success small pt-1 fw-bold">12%</span>{" "}
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-4 col-md-6">
                <div class="card info-card revenue-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Revenue <span>| This Month</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-currency-dollar"></i>
                      </div>
                      <div class="ps-3">
                        <h6>$3,264</h6>
                        <span class="text-success small pt-1 fw-bold">8%</span>{" "}
                        <span class="text-muted small pt-2 ps-1">increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-4 col-xl-12">
                <div class="card info-card customers-card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Customers <span>| This Year</span>
                    </h5>

                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-people"></i>
                      </div>
                      <div class="ps-3">
                        <h6>1244</h6>
                        <span class="text-danger small pt-1 fw-bold">12%</span>{" "}
                        <span class="text-muted small pt-2 ps-1">decrease</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="card">
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li>
                        <a class="dropdown-item" href="#">
                          Today
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Month
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          This Year
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">
                      Reports <span>/Today</span>
                    </h5>

                    <div id="reportsChart">
                      <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body pb-0">
                <h5 class="card-title">
                  Budget Report <span>| This Month</span>
                </h5>

                <div id="budgetChart" style={{ minHeight: "300px" }}>
                  <Chart
                    options={barChart.options}
                    series={barChart.series}
                    type="pie"
                    height="300px"
                  />
                </div>
              </div>

              <div class="card-body pb-0">
                <h5 class="card-title">
                  Website Traffic <span>| Today</span>
                </h5>

                <div id="budgetChart" style={{ minHeight: "300px" }}>
                  <Chart
                    options={websiteTraffic.options}
                    series={websiteTraffic.series}
                    type="pie"
                    height="300px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
