import React from "react";

const StudentCard = ({ student }) => {
  const { firstName, secondName, yearBirth, portfolio } = student;

  const getAge = () => {
    const currentYear = new Date().getFullYear();
    return Number(currentYear) - Number(yearBirth);
  };
  return (
    <div>
      <h1>Student Card</h1>
      <div>First Name: {firstName}</div>
      <div>Second Name: {secondName}</div>
      <div>
        Year of Birth, Age: {yearBirth}({getAge()}){" "}
      </div>
      <div>
        Portfolio:{" "}
        <a href={portfolio} target="_blank">
          {portfolio}
        </a>
      </div>
    </div>
  );
};

export default StudentCard;
