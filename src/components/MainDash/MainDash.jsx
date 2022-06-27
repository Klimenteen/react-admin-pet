import React from "react";
import Cards from "../Cards/Cards.jsx"
import Table from "../Table/Table.jsx"
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="main-dash">
      <h1>Dashbord</h1>
      <Cards />
      <h2>Recent Orders</h2>
      <Table />
    </div>
  );
};

export default MainDash;
