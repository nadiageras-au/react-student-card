import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "../componenets/StudentCard";

const MainPage = () => {
  function getData() {
    return JSON.parse(localStorage.getItem("student"));
  }

  const studentData = getData();

  return (
    <div  className="container">
      {studentData ? (
        <StudentCard student={studentData} />
      ) : (
        <div>
          <h1>Student Card</h1>
          <p>No data</p>
        </div>
      )}
      <button type="button" className="btn">
        <Link  className="btn btn-primary" to={`/form`}>{studentData ? "Edit" : "Add Student"}</Link>
      </button>
    </div>
  );
};

export default MainPage;
