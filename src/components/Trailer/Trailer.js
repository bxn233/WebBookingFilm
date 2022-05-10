import React, { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { CloseSquareOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
export default function Trailer() {
    
  const { isDisplay, url } = useSelector((state) => state.TrailerReducer);
  console.log(isDisplay)
  const dispatch = useDispatch();
  return (
    <Fragment>
      {isDisplay === true ? (
        <div
          className="flex justify-center items-center h-full w-full fixed "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 50,
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className="w-1/2">
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                style={{ position: "absolute", top: 0, left: 0 }}
                url={url}
                width="100%"
                height="100%"
                controls={true}
              />
              <span style={{
                    position: "absolute",
                    top: "-30px",
                    right: 0,
                    cursor: 'pointer'
                  }}
                onClick={() => {
                    dispatch({
                        type: "HIDE_TRAILER",
                      })
                }}
              >
                <CloseSquareOutlined
                  style={{
                    fontSize: "30px",
                    color: "rgb(192, 182, 135)",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
