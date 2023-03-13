import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import React from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";

function ManageUsers() {
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
              <li class="breadcrumb-item">Users</li>
              <li class="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>
        <Table style={{ backgroundColor: "white" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type Of Person</th>
              <th>Total Balance</th>
              <th>Total Ever Spent</th>
              <th>Total Ever earned</th>
              <th>User tags</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fasih</td>
              <td>Viewer</td>
              <td>$500</td>
              <td>$100</td>
              <td>$0</td>
              <td>
                <Badge bg="secondary" style={{ marginRight: "10px" }}>
                  New
                </Badge>
                <Badge bg="success">Big Spender</Badge>
              </td>
              <td>
                <i class="chat-left-dots-fill"></i>
                <i class="x-circle-fill"></i>
                <i class="ri-admin-fill"></i>
                <i class="ri-hand-coin-line"></i>
                <i class="ri-lock-2-fill"></i>
                <i class="ri-lock-unlock-line"></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </main>
    </React.Fragment>
  );
}

export default ManageUsers;
