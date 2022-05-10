import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AimOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import HomeMenuChild from "./HomeMenuChild";
import './HomeMenu.css'
import heThongRapChieuStatic from "../../../assets/data/heThongRapChieu.json";

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
  borderBottom: "1px solid #ccc",
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(0),
    color: "rgba(0, 0, 0,0.7)",
    "&.Mui-selected": {
      color: "rgb(192, 182, 135)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
    paddingTop: theme.typography.pxToRem(10),
  })
);
export default function HomeMenu(props) {
  const { heThongRapChieu } = props
  const [value, setValue] = React.useState('0');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="pb-20 bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(https://farm8.staticflickr.com/7895/44769886330_e8106192e0_o.jpg)'}} >
      <div className="container">
        <h1
          className="w-full text-center text-2xl lg:text-3xl font-bold mb-10 pt-10 "
          style={{ color: "rgb(192, 182, 135)" }}
        >
          Lịch chiếu phim
        </h1>
        <div className="border-2 border-gray-300 rounded-lg bg-white boxShawdownContainer">
          <div className="flex text-base p-2 items-center">
            <span className="mr-5">Vị trí</span>
            <div className="flex items-center h-12 px-3 border-2 border-gray-300 rounded-lg mr-5">
              <i
                className="fa fa-map-marker mr-2"
                style={{ fontSize: "30px", color: "gray" }}
              ></i>
              <span>Bà Rịa - Vũng Tàu</span>
              <DownOutlined style={{ fontSize: "12px" }} />
            </div>
            <div className="flex items-center h-12 px-3 border-2 border-gray-300 rounded-lg">
              <AimOutlined
                style={{ fontSize: "20px", color: "gray", marginRight: "8px" }}
              />
              <span>Gần bạn</span>
            </div>
          </div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ width: "100%" }}>
                <StyledTabs value={value} onChange={handleChange}>
                  {heThongRapChieuStatic.content.map((rap, index) => {
                    return (
                      <StyledTab
                        key={index}
                        value={index.toString()}
                        icon={
                          <div
                            className="focus:border-red-400 border-2 border-gray-200 flex items-center justify-center mb-2 rounded-xl"
                            style={{
                              width: 50,
                              height: 50,
                              borderColor: `${
                                index.toString() === value ? "rgb(192, 182, 135)" : ""
                              }`,
                            }}
                          >
                            <img
                              src={rap.logo}
                              className="rounded-full"
                              width="35"
                              alt={rap.maHeThongRap}
                            />
                          </div>
                        }
                        label={
                          rap.tenHeThongRap === "cgv"
                            ? "CGV"
                            : rap.tenHeThongRap.length > 8
                            ? `${rap.tenHeThongRap.slice(0, 8)}...`
                            : rap.tenHeThongRap
                        }
                      />
                    );
                  })}
                </StyledTabs>
              </Box>
              {heThongRapChieuStatic.content.map((rap, index) => {
                return ( 
                  <TabPanel value={index.toString()} key={index} style={{padding:'0 0 10px 0' }} >
                    <HomeMenuChild rap={rap} />
                  </TabPanel>
                );
              })}
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
}