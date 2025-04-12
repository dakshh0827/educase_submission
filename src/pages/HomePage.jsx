import React from "react";

const HomePage = ({ navigateTo }) => {
  return (
    <div className="flex flex-col justify-end h-full p-6 mt-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        <button
          onClick={() => navigateTo(3)}
          className="w-full bg-purple-600 text-white py-3 rounded-md mb-3 cursor-pointer"
        >
          Create Account
        </button>
        
        <button
          onClick={() => navigateTo(2)}
          className="w-full bg-purple-100 text-purple-800 py-3 rounded-md cursor-pointer"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;