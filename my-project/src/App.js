import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Transaction from "./Components/Transaction";
import Customers from "./Components/Customers";
import React from "react";
import CustomerProfile from "./Components/Customer";
import Footer from "./Components/Footer";
import AddUser from "./Components/AddUser";
import TransactionHistory from "./Components/TransactionHistory";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route exact path="/transaction" element={<Transaction />} />
          <Route exact path="/transactionhistory" element={<TransactionHistory/>} />
          <Route exact path="/adduser" element={<AddUser/>} />
          <Route exact path="/customers" element={<Customers />} />
          <Route
            exact
            path="/customer/:id"
            element={<CustomerProfile />}
          />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
