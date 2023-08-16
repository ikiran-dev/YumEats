import React from "react";

function NewsLetter() {
  return (
    <div className="max-w-[1520px] mx-auto text-white px-4 bg-[#24262b] ">
      <div className="mx-auto grid lg:grid-cols-3 border-b-2 border-b-gray-500">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign Up to join our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="flex p-3 w-full rounded-md text-black"
              type="email"
              placeholder="email"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 py-3 my-6 px-6 border-none">
              {" "}
              Notify Me
            </button>
          </div>
          <p>
            We are concerned about the security of your data, Read {""}{" "}
            <span className="text-[#00df9a]"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
