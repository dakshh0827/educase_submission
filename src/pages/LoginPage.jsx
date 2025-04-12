import React from "react";
import { useState } from "react";

const LoginPage = ({ navigateTo }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e) => {
      e.preventDefault();
      navigateTo(4); 
    };
    
    return (
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow px-6 pt-6">
          <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-purple-600 mb-1 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-purple-600 mb-1 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default LoginPage;