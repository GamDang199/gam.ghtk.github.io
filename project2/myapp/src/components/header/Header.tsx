import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../about/About";
import AddListStudent from "../add-list/AddListStudent";
import Home from "../home/Home";
import SearchStudent from "../search/SearchStudent";
import "./Header.css";
import image from "../../asset/image/logo.png";
const Header = () => {
  return (
    <div>
      <div className="nav">
        <ul className="nav-ul">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/addStudent" className="nav-link">
              Add Student
            </Link>
          </li>
          <li>
            <Link to="/searchStudent" className="nav-link">
              Search Student
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h1>Tra cứu thông tin tuyển sinh</h1>
        <div style={{ padding: "10px" }}>
          <img src={image} alt="" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="addStudent" element={<AddListStudent />} />
        <Route path="searchStudent" element={<SearchStudent />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Header;
