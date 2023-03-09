import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router";
export default function AddUser() {
 const [name,setName] = useState();
 const [email,setEmail] = useState();
 const [balance,setBalance] = useState();
 const [loading,setLoading] = useState(false);
 let navigate = useNavigate();
  const handleAddUser =async (e)=>{
    try{
        e.preventDefault();
        setLoading(true);
        const config = {
            headers:{
                "Content-type":"application/json",
            },
        };
        const data = await axios.post("/addcustomer",{name,email,balance},config);
        setLoading(false);
        console.log(data);
        navigate("/customers");
        
    }catch(err){
        console.log(err.message);
        setLoading(false);
    }
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center ">
        <div className="space-y-5 mt-12 w-[400px] border-2 border-blue-400 bg-blue-100 rounded-xl p-10 shadow-2xl">
    
          <div className="">
            <form className="flex flex-col space-y-5">
            <div className="flex flex-col">
                <label className="text-sm text-gray-500" htmlFor="">
                  Enter your Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="p-1 my-2 rounded-lg px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-500" htmlFor="">
                  Enter your email
                </label>
                <input
                  name="email"
                  type="text"
                  value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  className="p-1 my-2 rounded-lg px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-500" htmlFor="">
                  Enter your balance
                </label>
                <input
                  name="balance"
                  type="number"
                  value={balance}
                  onChange={(e)=>setBalance(e.target.value)}
                  className="p-1 my-2 rounded-lg px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handleAddUser}
                  className="outline-none border-none bg-blue-300 text-[#272727]  py-2 px-4  rounded-xl text-xl"
                >
                 {loading?<>Loading...</>:<>Add User</>}
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </>
  )
}
