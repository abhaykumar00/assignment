import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import UserDataForm from "./components/UserDataForm";
import Dashboard from "./components/Dashboard";

function Block({ children }) {
  return (
    <Grid item xs={6} sx={{ width: "90%" }}>
      <Paper
        sx={{
          height: "250px",
          textAlign: "center",
          lineHeight: "2px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "25px",
          padding: "16px",
          margin: "30px",
        }}
      >
        {children}
      </Paper>
    </Grid>
  );
}

function NewApp() {
  const navigate = useNavigate();
  console.log(localStorage.getItem("login"));
  if (localStorage.getItem("login") == "failed") {
    navigate("/");
  }
  const [dataForText, setDataForText] = useState({});
  return (
    <Grid container spacing={2}>
      <Block>
        <Counter />
      </Block>
      <Block>
        <RichTextEditor
          data={{ name: "abhay", age: 21 }}
          dataForText={dataForText}
        />
      </Block>
      <Block>
        <UserDataForm
          setDataForText={setDataForText}
          dataForText={dataForText}
        />
      </Block>
      <Block>
        <Dashboard setDataForText={setDataForText} dataForText={dataForText} />
      </Block>
    </Grid>
  );
}

export default NewApp;
