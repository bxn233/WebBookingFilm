import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { TabContext, TabPanel } from "@mui/lab";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React from "react";
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "transparent",
  },
  borderRight: "1px solid #ccc",
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(0),
    color: "rgba(0, 0, 0,0.7)",
    "&.Mui-selected": {
      backgroundColor: "rgb(253, 242, 248)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
  })
);
export default function DemoTabsMUISon(props) {
  const { rap } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext
      value={value}
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 400,
        }}
      >
        <StyledTabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <div className="flex justify-center mt-4  mb-3 relative ">
            <input
              className="rounded-lg px-2 outline-none"
              style={{ width: "90%", height: 50, border: "1px solid #ccc" }}
              placeholder="Tìm kiếm tên rạp ..."
            />
            <SearchOutlined
              style={{
                fontSize: "22px",
                color: "gray",
                position: "absolute",
                right: 27,
                top: "19%",
                cursor: "pointer",
                padding: 5,
              }}
            />
          </div>
          {rap.lstCumRap?.slice(0, 4).map((cumRap, index) => {
            return (
              <StyledTab
                value={index}
                icon={
                  <div
                    className=" group flex h-16 items-center text-left overflow-hidden "
                    key={index}
                    style={{ width: 350, height: 50 }}
                  >
                    <div
                      className="w-3/12 border-2 border-gray-200 flex items-center justify-center mr-5 rounded-xl"
                      style={{ width: 50, height: 50 }}
                    >
                      <img
                        src={rap.logo}
                        className="rounded-full"
                        width="35"
                        alt={rap.maHeThongRap}
                      />
                    </div>
                    <div className="w-8/12 space-y-2">
                      <span className="text-sm text-gray-500">
                        {cumRap.tenCumRap.length > 28 ? (
                          <span>{cumRap.tenCumRap.slice(0, 28)}...</span>
                        ) : (
                          <span>{cumRap.tenCumRap}</span>
                        )}
                      </span>
                    </div>
                    <div className="w-1/12">
                      <RightOutlined style={{ color: "rgb(209,213, 219)" }} />
                    </div>
                  </div>
                }
              />
            );
          })}
        </StyledTabs>
        {rap.lstCumRap?.slice(0, 4).map((cumRap, index) => {
          return (
            <TabPanel
              value={index}
              key={index}
              style={{ width: "67%", padding: 0 }}
            >
              <div
                className=" border-b-2 border-gray-200 group flex h-20 items-center text-left overflow-hidden mb-5 px-2 "
                key={index}
                style={{
                  width: "100%",
                  backgroundColor: "rgb(250,250,250)",
                }}
              >
                <div
                  className="w-3/12 focus:border-red-400 border-2 border-gray-200 flex items-center justify-center mr-5 rounded-xl"
                  style={{ width: 50, height: 50 }}
                >
                  <img
                    src={rap.logo}
                    className="rounded-full"
                    width="35"
                    alt={rap.maHeThongRap}
                  />
                </div>
                <div className="w-9/12 space-y-2 flex flex-col">
                  <span className="text-base text-gray-500">
                    Lịch chiếu phim {cumRap.tenCumRap}
                  </span>
                  <span className="text-xs text-gray-400">
                    {cumRap.diaChi.length > 100 ? (
                      <span>{cumRap.diaChi.slice(0, 100)}...</span>
                    ) : (
                      <span>{cumRap.diaChi}</span>
                    )}
                  </span>
                  {/* <span
                        className="text-xs"
                        style={{ color: "rgb(192, 182, 135)" }}
                      >
                        {cumRap.diaChi.length > 50 ? (
                          <span>{cumRap.diaChi.slice(0, 50)}...</span>
                        ) : (
                          <span>{cumRap.diaChi}</span>
                        )}
                      </span> */}
                </div>
              </div>
              <div style={{overflow: 'scroll', height: '1000px'}}>

              </div>
            </TabPanel>
          );
        })}
      </Box>
    </TabContext>
  );
}
