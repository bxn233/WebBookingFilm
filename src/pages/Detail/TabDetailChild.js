import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { NavLink } from "react-router-dom";
import moment from "moment";

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
export default function TabDetailChild(props) {
  const { cumRapChieu } = props;
  console.log("cumRapChieu", cumRapChieu);
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
                            index.toString() === value
                              ? "rgb(192, 182, 135)"
                              : ""
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
        {/* {cumRapChieu.lichChieuPhim?.map((rap, index) => {
                return ( 
                  <TabPanel value={index.toString()} key={index} style={{padding:0 }} >
                    {cumRapChieu.tenCumRap}
                  </TabPanel>
                );
              })} */}
        <TabPanel value={"0"} style={{ padding: '0 0 10px 0', marginTop: 20 }}>
          <div className="showPhim showLichChieu">
            {cumRapChieu?.map((cumRap, index) => {
              return (
                <div className="w-full p-2" key={index}>
                  <div className="h-full p-5 my-2 rounded-lg border-2 border-gray-300 flex items-center">
                    <div className="w-3/12 flex items-center justify-center h-full">
                      <img
                        src={cumRap.hinhAnh}
                        width={100}
                        height={100}
                        alt={cumRap.maCumRap}
                      />
                    </div>
                    <div className="w-9/12 px-2">
                      <h2 className="sm:text-lg text-base font-bold" style={{ color: "rgb(192, 182, 135)" }}>{cumRap.tenCumRap}</h2>
                      <p className="text-xs text-gray-500">{cumRap.diaChi}</p>
                      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-3">
                        {cumRap.lichChieuPhim
                          ?.slice(0, 5)
                          .map((lich, index) => {
                            return (
                              <Fragment key={index}>
                                <NavLink
                                  className="hover:bg-yellow-50 text-sm text-center hover:text-gray-400 p-1 text-gray-400 bg-white border-2 border-gray-400 rounded-lg"
                                  to={`/checkout/${lich.maLichChieu}`} style={{border: '1px solid rgb(192, 182, 135)'}}
                                >
                                  {moment(lich?.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              </Fragment>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
