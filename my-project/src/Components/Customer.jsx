import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Customer = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [fromCustomer, setFromCustomer] = useState({
    name: "",
    email: "",
    balance: "",
  });
  const [toCustomer, setToCustomer] = useState();

  const fetchCustomers = async () => {
    setLoading(true);
    const data = await axios.get("/customersdata");
    setCustomers(data.data);
    setFromCustomer(data.data.find((i) => i._id === id));
    setLoading(false);
  };
  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    if (parseInt(amount) > parseInt(fromCustomer.balance)){
      alert("insufficient balance");
      return;
    }
    
    try {
      setLoading(true);
      console.log("re" + fromCustomer._id + toCustomer || customers.filter((i) => i._id !== id)[0]);
      const {data} = await axios.post("/transaction/new", {
        from: fromCustomer._id,
        to: toCustomer || customers.filter((i) => i._id !== id)[0],
        amount: parseInt(amount),
      });
      setLoading(false);
      navigate("/transactionhistory");
     
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  if (loading) {
    return <Spinner/>
  }
  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center justify-center ">
        <div className="space-y-5 mt-12 w-[400px] border-2 border-blue-400 bg-blue-100 rounded-xl p-10 shadow-2xl">
          <div>
            <p className="text-sm text-gray-500">User Name</p>
            <span className="font-bold text-lg text-slate-800 ">
              {fromCustomer.name}{" "}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500"> Email Id</p>
            <span className="font-bold text-lg text-slate-800">
              {fromCustomer.email}{" "}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500">User Balance</p>
            <span className="font-bold text-lg text-slate-800">
              {fromCustomer.balance}{" "}
            </span>
          </div>

          <div className="">
            <form className="flex flex-col space-y-5">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500"> Transfer To </label>
                <select
                  className="p-1 my-2 rounded-lg outline-none "
                  onChange={(e) => setToCustomer(e.target.value)}
                >
                  <option>
                            
                          </option>
                  {customers
                    .filter((i) => i._id !== id)
                    .map((customer, index) => {
                      return (
                        <>
                          <option key={index} value={customer._id}>
                            {customer.name}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-500" htmlFor="">
                  Enter your amount
                </label>
                <input
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={(event) => handleChange(event)}
                  className="p-1 my-2 rounded-lg px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handleTransfer}
                  className="outline-none border-none bg-blue-300 text-[#272727]  py-2 px-4  rounded-xl text-xl"
                >
                  Transfer
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center m-4">
          <button className="outline-none border-none bg-blue-300 text-[#272727]  p-4 m-2 rounded-xl text-xl">
            <Link to="/customers"> customers</Link>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Customer;
