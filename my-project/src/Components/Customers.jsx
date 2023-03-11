import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCustomers = async () => {
    setLoading(true);
    const data = await axios.get("/customersdata");
    setCustomers(data.data);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchCustomers();
  }, []);
  console.log(customers);

  // const jsonObj = JSON.stringify(customers);
  // console.log(jsonObj);
  if (loading) {
    return <Spinner/>
  }
  return (
    <div className="">
      <div className="flex justify-center items-center mt-10 ">
        <table className="">
          <thead className="">
            <tr>
              <th className="bg-blue-100 border border-blue-400 text-left px-8 py-4">
                Name
              </th>
              <th className="bg-blue-100 border border-blue-400 text-left px-8 py-4">
                Email
              </th>
              <th className="bg-blue-100 border border-blue-400 text-left px-8 py-4">
                Balance
              </th>
              <th className="bg-blue-100 border border-blue-400 text-left px-8 py-4">
                Perform Transaction
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
              return (
                <tr key={customer._id} className="border  ">
                  <td className="px-8 py-4">{customer.name}</td>

                  <td className="border px-8 py-4">{customer.email}</td>
                  <td className="border px-8 py-4">{customer.balance}</td>
                  <div className="flex justify-center">
                  <Link to={`/customer/${customer._id}`} className="">
                    <button className="outline-none border-none bg-blue-300 text-[#272727] m-2 rounded-xl text-xl">
                        <td className="px-8 py-4">Send Money</td>
                     
                    </button>
                    </Link>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
