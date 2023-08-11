import React, { useCallback, useState } from "react";
import "./App.css";

import { DateRange } from "@mui/x-date-pickers-pro";

import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import DateRangeModal from "./components/DateRangeModal";
import ReportCard from "./components/ReportCard";
import STRINGS from "./constants/strings";
import { getHumanReadableDateFullMonth } from "./utils/Dateutils";

import { randomString } from "./utils/RandomUtil";
import GeneratedReportTable from "./components/GeneratedReportTable";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Kolkata");

function getGeneratedReportObj(dateRange: any) {
  return {
    reportName: "Report_loren_Ipsum",
    readableDateRange: `${getHumanReadableDateFullMonth(
      dateRange[0]
    )} to ${getHumanReadableDateFullMonth(dateRange[1])}`,
    dateTime: "April 24, 1:00pm",
    brand: "Cadbury",
    download: "icon",
    key: randomString(),
  };
}
function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [generatedReports, setGeneratedReports] = useState<any>([]);

  const [dateRange, setDateRange] = React.useState<DateRange<Dayjs>>([
    dayjs.tz("2022-04-17", "Asia/Kolkata"),
    dayjs.tz("2022-04-21", "Asia/Kolkata"),
  ]);

  const onGenerateReportPress = useCallback(() => {
    console.log("curret Date Range", JSON.stringify(dateRange));
    if (dateRange[0] && dateRange[1]) {
      const temp = [...generatedReports, getGeneratedReportObj(dateRange)];
      setGeneratedReports(temp);
      setDateRange([
        dayjs.tz("2022-04-17", "Asia/Kolkata"),
        dayjs.tz("2022-04-21", "Asia/Kolkata"),
      ]);
      handleClose();
    } else {
      alert("Complete Date Range");
    }
  }, [dateRange, generatedReports]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="Side-nav"></div>
          <div className="Main-content">
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    //fontFamily: "Work Sans",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "rgba(100, 100, 100, 1)",
                  }}
                >
                  Reports
                </div>
              </div>
              <div
                style={{
                  marginTop: 24,
                  marginLeft: -24,
                  marginRight: -24,
                  display: "flex",
                  alignSelf: "stretch",
                  height: 0.25,
                  backgroundColor: "rgba(52, 64, 84, 0.2)",
                }}
              ></div>
              {/* //Report Card */}
              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    // fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "38px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "rgba(16, 24, 40, 1)",
                  }}
                >
                  Collection Reports
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    //ustifyContent: "space-between",
                  }}
                >
                  <ReportCard
                    title="Payment Collected"
                    description={STRINGS.REPORT_CARD_DESCR}
                    buttonText="Generate Report"
                    onButtonClick={handleOpen}
                  />
                  <ReportCard
                    title="Pending payments of Creditail- financed invoices"
                    description={STRINGS.REPORT_CARD_DESCR}
                    buttonText="Generate Report"
                    onButtonClick={handleOpen}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    // fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "38px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "rgba(16, 24, 40, 1)",
                  }}
                >
                  Credit Financing Reports
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    //ustifyContent: "space-between",
                  }}
                >
                  <ReportCard
                    title="Financing by Creditail"
                    description={STRINGS.REPORT_CARD_DESCR}
                    buttonText="Generate Report"
                    onButtonClick={handleOpen}
                  />
                </div>
              </div>
              {generatedReports.length > 0 ? (
                <div
                  style={{
                    marginTop: 48,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      marginBottom: 24,
                      // fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "20px",
                      letterSpacing: "-0.4000000059604645px",
                      textAlign: "left",
                      color: "rgba(48, 49, 61, 1)",
                    }}
                  >
                    LATEST REPORTS
                  </div>
                  <GeneratedReportTable generatedReports={generatedReports} />
                </div>
              ) : null}
            </div>
          </div>
        </header>
      </div>
      <DateRangeModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        dateRange={dateRange}
        onDateRangeChange={(newDateRange: any) => setDateRange(newDateRange)}
        onGenerateReportPress={onGenerateReportPress}
      />
    </>
  );
}

export default App;
