import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Checkout() {
  return (
    <div>
      <Header />
      <div className="trace p-9 ">
        <div className="w-auto p-2 h-96 trace">
          <h1>Basic Informmation</h1>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label htmlFor="f_name">First name</label>
              <input
                className="w-96 border border-gray-200 "
                type="text"
                id="f_name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="l_name">Last name</label>
              <input
                className="w-96 border border-gray-200"
                type="text"
                id="l_name"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
