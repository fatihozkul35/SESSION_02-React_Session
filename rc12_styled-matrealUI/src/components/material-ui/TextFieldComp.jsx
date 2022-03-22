import { TextField } from "@mui/material";
import React from "react";

const TextFieldComp = () => {
  let error = true;
  return (
    <div style={{ margin: "1rem" }}>
      <TextField
        label="Email"
        variant="standard"
        id="email"
        placeholder="Enter Your Email"
        error={error}
        helperText={error && "Incorrect Entry"}
      />
    </div>
  );
};

export default TextFieldComp;
