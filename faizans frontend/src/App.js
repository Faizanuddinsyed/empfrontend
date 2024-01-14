import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-employee.component";
import Tutorial from "./components/employee.component";
import EmployeesList from "./components/employees-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            Syed Faizanuddin
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<EmployeesList />} />
            <Route path="/tutorials" element={<EmployeesList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
