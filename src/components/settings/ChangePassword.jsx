import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import image from '../../assets/images/logoimage.png';
import { Link } from "react-router";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleCurrent = () => setShowCurrent(!showCurrent);
  const toggleNew = () => setShowNew(!showNew);
  const toggleConfirm = () => setShowConfirm(!showConfirm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password validation and API call here
    console.log("Password change submitted");
  };

  return (
    <div className="flex flex-col justify-center items-center text-center mb-15 px-4">
      {/* Profile Header */}
      <div className="flex flex-col items-center space-y-4 mb-8">
        <img
          className="h-[118px] w-[118px] rounded-full object-cover"
          src={image}
          alt="Profile"
        />
        <h2 className="text-3xl font-semibold text-black">Mr. Admin</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-lg font-medium mb-6">
        <Link to='/settings'>
          <button className="text-gray-500 hover:text-[#B14034] pb-1">Edit Profile</button>
        </Link>
        <Link to='/changePassword'>
          <button className="text-[#B14034] border-b-2 border-[#B14034] pb-1">Change Password</button>
        </Link>
      </div>


<div>
    <h2 className='text-2xl text-center font-semibold'>Change Password</h2>
</div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="rounded-lg flex flex-col space-y-4 mx-auto w-full max-w-[710px]"
      >
        {/* Current Password */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="currentPassword" className="text-gray-700 font-medium mb-1">
            Current Password
          </label>
          <div className="relative w-full">
            <input
              type={showCurrent ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <div onClick={toggleCurrent} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
              {showCurrent ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        {/* New Password */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="newPassword" className="text-gray-700 font-medium mb-1">
            New Password
          </label>
          <div className="relative w-full">
            <input
              type={showNew ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <div onClick={toggleNew} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
              {showNew ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="confirmPassword" className="text-gray-700 font-medium mb-1">
            Confirm New Password
          </label>
          <div className="relative w-full">
            <input
              type={showConfirm ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <div onClick={toggleConfirm} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
              {showConfirm ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#B14034] w-full h-[60px] text-white font-semibold py-2 rounded-md hover:bg-[#912f26] transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
