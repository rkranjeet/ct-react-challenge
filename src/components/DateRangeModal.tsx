import { useCallback } from "react";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { getHumanReadableDate } from "../utils/Dateutils";

function DateRangeModal(props: any) {
  const {
    open,
    handleOpen,
    handleClose,
    dateRange,
    onDateRangeChange,
    onGenerateReportPress,
  } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          border: "1px solid rgba(242, 244, 247, 1)",
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 10,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img
              src={require("../assets/images/report.png")}
              style={{ width: 48, height: 48 }}
            />
            <div
              style={{
                marginLeft: 10,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <text
                style={{
                  display: "flex",
                  flex: 1,
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "28px",
                }}
              >
                Generate Report
              </text>
              <text
                style={{
                  marginTop: 5,
                  display: "flex",
                  flex: 1,
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "rgba(71, 84, 103, 1)",
                }}
              >
                Generate a report for Payments collected in following date and
                time range
              </text>
            </div>
            <div>
              <IconButton onClick={handleClose}>
                <img
                  src={require("../assets/images/x-close.png")}
                  style={{ width: 24, height: 24 }}
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            alignSelf: "stretch",
            height: 0.25,
            backgroundColor: "rgba(52, 64, 84, 0.2)",
          }}
        ></div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateRangeCalendar
            value={dateRange}
            timezone="Asia/Kolkata"
            onChange={onDateRangeChange}
          />
        </LocalizationProvider>
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            height: 0.25,
            backgroundColor: "rgba(52, 64, 84, 0.2)",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 15,
          }}
        >
          <div
            style={{
              height: 44,
              width: 272,
              borderRadius: 6,
              border: "1px solid rgba(230, 230, 230, 1)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {getHumanReadableDate(dateRange[0])}
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "stretch",
                width: 1,
                backgroundColor: "rgba(230, 230, 230, 1)",
              }}
            ></div>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              8:00 AM
            </div>
          </div>
          <div
            style={{
              height: 1,
              width: 5,
              backgroundColor: "rgba(102, 112, 133, 1)",
            }}
          ></div>
          <div
            style={{
              height: 44,
              width: 272,
              borderRadius: 6,
              border: "1px solid rgba(230, 230, 230, 1)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {getHumanReadableDate(dateRange[1])}
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "stretch",
                width: 1,
                backgroundColor: "rgba(230, 230, 230, 1)",
              }}
            ></div>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
              10:00 PM
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 15,
            display: "flex",
            alignSelf: "stretch",
            height: 0.25,
            backgroundColor: "rgba(52, 64, 84, 0.2)",
          }}
        ></div>
        <div
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              //variant="outlined"
              sx={{
                color: "rgba(52, 64, 84, 1)",
                borderRadius: 2,
                width: 80,
                height: 40,
                fontSize: 14,
                border: "1px solid rgba(208, 213, 221, 1)",
                // autoCapitalize: "words",
                textTransform: "capitalize",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                width: 146,
                height: 40,
                fontSize: 14,
                // autoCapitalize: "words",
                textTransform: "capitalize",
              }}
              onClick={onGenerateReportPress}
            >
              Generate Report
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DateRangeModal;
