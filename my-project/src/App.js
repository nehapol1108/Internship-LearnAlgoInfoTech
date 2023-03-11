import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Customers from "./Components/Customers";
import React from "react";
import CustomerProfile from "./Components/Customer";
import AddUser from "./Components/AddUser";
import TransactionHistory from "./Components/TransactionHistory";

function App() {
  return (
    <>
      <div className="h-screen">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/transactionhistory" element={<TransactionHistory/>} />
          <Route exact path="/adduser" element={<AddUser/>} />
          <Route exact path="/customers" element={<Customers />} />
          <Route
            exact
            path="/customer/:id"
            element={<CustomerProfile />}
          />
        </Routes>
       
      </div>
    </>
  );
}

export default App;
