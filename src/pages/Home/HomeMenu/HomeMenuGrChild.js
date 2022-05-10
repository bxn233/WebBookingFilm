import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AimOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import HomeMenuChild from "./HomeMenuChild";
import "./HomeMenu.css";
import LichPhim from "./LichPhim/LichPhim";
const ngayThuChieu = [
  {
    ngay: 29,
    thu: "Hôm nay",
  },
  {
    ngay: 30,
    thu: "Thứ 7",
  },
  {
    ngay: 1,
    thu: "Chủ nhật",
  },
  {
    ngay: 2,
    thu: "Thứ 2",
  },
  {
    ngay: 3,
    thu: "Thứ 3",
  },
  {
    ngay: 4,
    thu: "Thứ 4",
  },
  {
    ngay: 5,
    thu: "Thứ 5",
  },
];
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
    fontWeight: theme.typography.fontWeightRegular,
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
export default function HomeMenuGrChild(props) {
  
  const {danhSachPhim} = props
  console.log('danhSachPhim', danhSachPhim)
  const [value, setValue] = React.useState("0");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <StyledTabs value={value} onChange={handleChange}>
            {ngayThuChieu.map((ngay, index) => {
              return (
                <StyledTab
                  key={index}
                  value={index.toString()}
                  icon={
                    <div
                      style={{
                        width: 65,
                        height: 70,
                        borderColor: `${
                          index.toString() === value ? "rgb(192, 182, 135)" : ""
                        }`,
                      }}
                      className="border-2 border-gray-200 rounded-md overflow-hidden"
                    >
                      <div
                        style={{
                          color: `${index.toString() === value ? "white" : ""}`,
                          backgroundColor: `${
                            index.toString() === value ? "rgb(192, 182, 135)" : ""
                          }`,
                        }}
                        className=" h-3/5 bg-gray-200 flex items-center justify-center p-"
                      >
                        <span>{ngay.ngay}</span>
                      </div>
                      <div
                        style={{ fontSize: "13px" }}
                        className="h-2/5 flex items-center justify-center"
                      >
                        {ngay.thu}
                      </div>
                    </div>
                  }
                />
              );
            })}
          </StyledTabs>
        </Box>
        <TabPanel value={"0"} style={{ padding: 0, marginTop: 20 }}>
            {danhSachPhim?.filter(phim => phim.hot === true).map((phim, index) => {
              return <LichPhim phim={phim} key={index}/>
            })}
        </TabPanel>
        <TabPanel value={"1"} style={{ padding: 0, marginTop: 20 }}>
            {danhSachPhim?.filter(phim => phim.dangChieu === true).map((phim, index) => {
              return <LichPhim phim={phim} key={index}/>
            })}
        </TabPanel>
        <TabPanel value={"2"} style={{ padding: 0, marginTop: 20 }}>
            {danhSachPhim?.filter(phim => phim.sapChieu === true).map((phim, index) => {
              return <LichPhim phim={phim} key={index}/>
            })}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
