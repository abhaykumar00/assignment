import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function UserForm() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    window.onbeforeunload = handleBeforeUnload;
    return () => {
      window.onbeforeunload = null;
    };
  }, [unsavedChanges]);

  const handleBeforeUnload = (e) => {
    if (unsavedChanges) {
      const confirmationMessage =
        "You have unsaved changes. Are you sure you want to leave?";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name cannot be empty");
      return;
    }
    const id = uuidv4();
    setUserId(`${name}-${id}`);
    localStorage.setItem("userId", `${name}-${id}`);
    setName("");
    setUnsavedChanges(false);
  };

  const handleChange = (e) => {
    setName(e.target.value);
    setUnsavedChanges(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChange}
      />
      <Button
        style={{ margin: "10px" }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Generate User ID
      </Button>
      {userId && <p>User ID: {userId}</p>}
    </form>
  );
}

export default UserForm;
