import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const DashBoard = ({ setDataForText }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [userId, setUserId] = useState("");
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUnsavedChanges(true);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setDataForText(formData);
      localStorage.setItem("userData", JSON.stringify(formData));
      setUnsavedChanges(false);
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  const generateUserId = () => {
    const newUserId = Math.random().toString(36).substr(2, 9);
    setUserId(newUserId);
    localStorage.setItem("userId", newUserId);
  };

  const validateForm = () => {
    let errors = {};
    const { name, address, email, phone } = formData;
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!address.trim()) {
      errors.address = "Address is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone number is invalid";
    }
    return errors;
  };

  return (
    <div style={{ margin: "0" }}>
      <h6 style={{ margin: "0" }}> User Data Form</h6>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([fieldName, value]) => (
          <TextField
            key={fieldName}
            label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            type={fieldName === "email" ? "email" : "text"}
            name={fieldName}
            value={value}
            onChange={handleChange}
            fullWidth
            sx={{ margin: "5px 0" }}
            error={Boolean(errors[fieldName])}
            helperText={errors[fieldName] && errors[fieldName]}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={generateUserId}
        >
          Submit
        </Button>
      </form>
      {unsavedChanges && <p>There are unsaved changes in the form.</p>}
    </div>
  );
};

export default DashBoard;
