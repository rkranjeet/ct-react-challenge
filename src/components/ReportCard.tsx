import { Button } from "@mui/material";
import React from "react";

function ReportCard(props: any) {
  const { title, description, buttonText, onButtonClick } = props;

  return (
    <div
      style={{
        width: 542,
        border: "1px solid rgba(208, 213, 221, 1)",
        borderRadius: 8,
        padding: "24px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/images/coins.png")}
          style={{ height: 20, width: 20 }}
        />
        <div
          style={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "grey",
            marginLeft: 12,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          marginTop: 10,
          marginLeft: 32,
          textAlign: "left",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          color: "rgba(71, 84, 103, 1)",
          letterSpacing: "0em",
        }}
      >
        {description}
      </div>
      <div style={{ marginTop: 10, marginLeft: 32 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "8px",
            textTransform: "capitalize",
            fontWeight: 600,
            paddingVertical: 20,
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default ReportCard;
