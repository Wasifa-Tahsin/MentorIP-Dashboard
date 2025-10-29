import React, { useState } from "react";
import image from '../../assets/images/logoimage.png';
import { Link } from "react-router";

const EditProfile = () => {
  // State for the form inputs
  const [formData] = useState({
    username: "Mr. Admin",
    email: "robertsmith@example.com",
    phone: "(208) 555-0112",
    address: "79/A Joker Vila, Gotham City",
  });

  

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 ">
      {/* Profile Header */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <img
          className="h-[118px] w-[118px] rounded-full object-cover"
          src={image}
          alt="Profile"
        />
        <h2 className="text-3xl font-semibold text-black">{formData.username}</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-lg font-medium mb-6">
        <Link to='/settings'><button className="text-[#B14034] border-b-2 border-[#B14034] pb-1">Edit Profile</button></Link>
        <Link to='/changePassword'><button className="text-gray-500 hover:text-[#B14034] pb-1">Change Password</button></Link>
      </div>

      {/* Form Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">Edit Your Profile</h2>

      {/* Form */}
      <form
      
        className="rounded-lg flex flex-col space-y-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px]"
      >
        {/* Username */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="username" className="text-gray-700 font-medium mb-1">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            
            placeholder="Robert Smith"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
           
            placeholder="robertsmith@example.com"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="phone" className="text-gray-700 font-medium mb-1">Contact Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
           
            
            placeholder="(208) 555-0112"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="address" className="text-gray-700 font-medium mb-1">Address</label>
          <input
            type="text"
            id="address"
            name="address"
           
            placeholder="79/A Joker Vila, Gotham City"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Submit Button */}
        <button
    
          className="bg-[#B14034] w-full h-[60px] text-white font-semibold rounded-md hover:bg-[#912f26] transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
