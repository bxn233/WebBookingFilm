import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDanhSachRapAction } from "../../redux/actions/QuanLiRapAction";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AimOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import DemoTabsMUISon from "./DemoTabsMUISon";

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
      color: "rgb(232, 31, 118)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
    paddingTop: theme.typography.pxToRem(10),
  })
);
export default function DemoTabsMUI() {
  const { heThongRapChieu } = useSelector((state) => state.QuanLiRapReducer);
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDanhSachRapAction());
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="py-5">
      <div className="container">
        <h1
          className="w-full text-center text-4xl font-black mb-10 "
          style={{ color: "rgb(232, 31, 118)" }}
        >
          Lịch chiếu phim
        </h1>
        <div className="border-2 border-gray-300 bg-white rounded-lg boxShawdownContainer">
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
                  {heThongRapChieu.map((rap, index) => {
                    return (
                      <StyledTab
                        value={index}
                        icon={
                          <div
                            className="focus:border-red-400 border-2 border-gray-200 flex items-center justify-center mb-2 rounded-xl"
                            style={{
                              width: 50,
                              height: 50,
                              borderColor: `${
                                index === value ? "rgb(232, 31, 118)" : ""
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
              {heThongRapChieu.map((rap, index) => {
                return (
                  <TabPanel value={index} key={index} style={{padding:0 }}>
                    <DemoTabsMUISon rap={rap} />
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
