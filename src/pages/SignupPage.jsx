import React, { useState } from "react";

const SignupPage = ({ navigateTo }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      phone: '',
      email: '',
      password: '',
      company: '',
      isAgency: ''
    });
    
    const handleSignup = (e) => {
      e.preventDefault();
      navigateTo(4);
    };
    
    return (
      <div className="flex flex-col justify-between h-full p-6">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-4">Create your PopX account</h1>
          
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-purple-600 mb-1 text-sm">Full Name*</label>
              <input
                type="text"
                name="fullName"
                placeholder="Marry Doe"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={formData.fullName}
                disabled
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-purple-600 mb-1 text-sm">Phone number*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Marry Doe"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={formData.phone}
                disabled
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-purple-600 mb-1 text-sm">Email address*</label>
              <input
                type="email"
                name="email"
                placeholder="Marry Doe"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={formData.email}
                disabled
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-purple-600 mb-1 text-sm">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="Marry Doe"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={formData.password}
                disabled
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-purple-600 mb-1 text-sm">Company name</label>
              <input
                type="text"
                name="company"
                placeholder="Marry Doe"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={formData.company}
                disabled
              />
            </div>
            
            <div className="mb-6">
              <p className="text-purple-600 mb-2 text-sm">Are you an Agency?*</p>
              <div className="flex items-center opacity-75">
                <label className="mr-4 flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value=""
                    checked={formData.isAgency === 'Yes'}
                    className="mr-2 text-purple-600 h-5 w-5 cursor-not-allowed"
                    disabled
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="No"
                    checked={formData.isAgency === 'No'}
                    className="mr-2 h-5 w-5 cursor-not-allowed"
                    disabled
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md mb-1 hover:bg-purple-700 cursor-pointer"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignupPage;