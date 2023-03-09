import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
    <Hero/>
    <section id="hero" className="d-flex justify-center align-items-top">
          <div id="transaction" className="container justify-center">
            <h1 className="text-center"><br/>Trasansation tasks</h1>
            <br/>
            
            <div className="flex justify-center">
            <Link to="/customers">
            <button className="justify-center outline-none border-node bg-blue-300 text-[#272727]  p-4 m-2 rounded-xl text-xl">
           View All customers
           </button>
           </Link>

           <Link to="/adduser"><button className="justify-center outline-none border-node bg-blue-300 text-[#272727]  p-4 m-2 rounded-xl text-xl">
           Add a new User
           </button>
           </Link>

           <Link to="/transactionhistory"><button className="justify-center outline-none border-node bg-blue-300 text-[#272727]  p-4 m-2 rounded-xl text-xl">
          View transaction history
           </button>
           </Link>
           </div>
          </div>
          
        </section>
      
    </>
  );
};

export default Home;
