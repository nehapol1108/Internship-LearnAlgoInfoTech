import React, { useEffect, useState } from "react";
import axios from "../axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
export default function TransactionHistory() {
    const [transactionData,settransactionData] = useState([]);
    const [loading,setLoading] = useState(false);
     const getTransactionData =async ()=>{
       try{
         
           setLoading(true);
           const {data} = await axios.get("/transferdata");
           console.log(data[0]._id);
           settransactionData(data);
           
           setLoading(false);
           
       }catch(err){
           console.log(err.message);
           setLoading(false);
       }
     }
    useEffect(() => {
    setLoading(true);
    getTransactionData();
    setLoading(false);
    }, []);

    if (loading) {
        return <Spinner/>
      }
  return (
    <>
<Navbar/>
<div className="">
      <div className="flex justify-center items-center mt-10 ">
        <table className="">
          <thead className="">
            <tr>
              <th className="bg-blue-100 border border-blue-400 text-left px-8 py-4">
                Transaction History
              </th>
    
            </tr>
          </thead>
          <tbody>
            {/* {transactionData.data._id} */}
            {transactionData.reverse().map((transaction) => {
              return (
                <tr key={transaction._id} className="border  ">
                  <td className="px-8 py-4">{transaction.statement} on {transaction.createdAt}</td>
    
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  )
}
