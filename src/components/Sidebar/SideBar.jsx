import React, { useState } from "react";
import "./SideBar.css";
import Logo from "../../imgs/logo.png";
import { motion } from "framer-motion";
import { SideBarData } from "../../data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="side-bar__button"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="side-bar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="side-bar__logo">
          <img src={Logo} alt="" />
          <span>
            Ad<span>m</span>in
          </span>
        </div>
        <div className="side-bar__menu">
          {SideBarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index
                    ? "side-bar__menu-item active"
                    : "side-bar__menu-item"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="side-bar__menu-item">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
