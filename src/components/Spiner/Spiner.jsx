import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spiner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress style={{ color: "#EE5922" }} />
    </div>
  );
}
