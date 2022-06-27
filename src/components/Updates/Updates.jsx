import React from "react";
import { UpdatesData } from "../../data/data";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="right-side__updates">
      {UpdatesData.map((update) => {
        return (
          <div className="right-side__update">
            <img src={update.img} alt="" />
            <div className="right-side__notification">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name} </span>
                <span>{update.noti}</span>
                
              </div>
              <span > {update.time}</span>

            </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
