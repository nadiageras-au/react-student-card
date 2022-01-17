import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormField from "../componenets/FormField";
import { validator } from "../utils/validator";

const StudentCardForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  function getData() {
    return JSON.parse(localStorage.getItem("student"));
  }
  const studentData = getData();
  const initialState = {
    firstName: "",
    secondName: "",
    yearBirth: "",
    portfolio: "",
  };
  const [data, setData] = useState(studentData || initialState);

  const handleGoBack = () => {
    history.replace("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("student", JSON.stringify(data));
    handleGoBack();
    alert("All done!");
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    firstName: {
      isRequired: { message: "First Name is required" },
    },
    secondName: {
      isRequired: { message: "Second Name is required" },
    },
    yearBirth: {
      isRequired: { message: "Password is required" },
      isYear: {
        message: "Year must include 4 digits and cannot be bigger current year",
      },
    },
    portfolio: {
      isRequired: { message: "Portfolio url is required" },
      isUrl: { message: "Portfolio url must be a link" },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    console.log("errors", Object.keys(errors).length);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  return (
    <div className="container">
      <h1>{studentData ? "Edit Student Card" : "Create Student Card"}</h1>
      <form>
        <FormField
          label="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <FormField
          label="Second Name"
          name="secondName"
          value={data.secondName}
          onChange={handleChange}
          error={errors.secondName}
        />
        <FormField
          label="Date of Birth"
          name="yearBirth"
          value={data.yearBirth}
          onChange={handleChange}
          error={errors.yearBirth}
        />
        <FormField
          label="Portfolio"
          name="portfolio"
          value={data.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
        />
        {studentData ? (
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleGoBack}
            >
              Go Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Update
            </button>
          </>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create
          </button>
        )}
      </form>
    </div>
  );
};

export default StudentCardForm;
