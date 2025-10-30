import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import img from '../../assets/images/addblogimg.png'
import { FiArrowLeft } from "react-icons/fi";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };



  return (
    <div className="max-w-6xl mx-auto px-6 py-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
     <div className="flex items-center gap-2">
              <button className="text-white  rounded-full bg-red-800 ">
                <FiArrowLeft size={22} />
              </button>
              <h2 className="text-lg sm:text-xl font-medium text-gray-800">Add Blog</h2>
            </div>
        <button className="bg-[#a13e2d] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#8d3425]">
          <FaPlus /> Add Blog
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Side */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1">Main Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="font-semibold mb-1">Description</label>
          <textarea
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1">Categories</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select Categories</option>
            <option>Assignment</option>
            <option>Bangladesh</option>
            <option>Design</option>
            <option>DPDT (IP Office) Bangladesh</option>
            <option>FAQ</option>
            <option>IP Laws and Rules</option>
            <option>IP News</option>
            <option>IPR Enforcement</option>
            <option>Journal</option>
            <option>Opposition</option>
            <option>Patent</option>
            <option>Registration</option>
            <option>Renewal</option>
            <option>Trademark</option>
            <option>Utility Model</option>
            
          </select>

          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center h-40 relative">
            {image ? (
              <img
                src={img}
                alt="preview"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <>
                <label
                  htmlFor="file-upload"
                  className="text-gray-500 cursor-pointer flex flex-col items-center"
                >
                  📷 <span className="mt-2">Add image</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Example Blog Cards */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-60 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden relative"
          >
            <img
              src={img}
              alt="Blog"
              className="w-full h-36 object-cover"
            />
            <div className="p-3 text-left">
              <h4 className="text-sm font-semibold leading-tight">
                COMMON GROUNDS FOR TRADEMARK OBJECTIONS IN BANGLADESH
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                MENTORIA | Bangladesh <br />
                <span className="text-gray-500">Sep 28, 2025</span> <br />
                <span className="text-blue-600 text-xs">
                  Trademark - Bangladesh
                </span>
              </p>
            </div>

            <div className="absolute top-2 right-2 flex gap-2">
              <FaEdit className="text-[#a13e2d] cursor-pointer hover:text-[#8d3425]" />
              <FaTrash className="text-red-500 cursor-pointer hover:text-red-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-4">
        <button
         
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 mt-5 rounded-md font-medium"
        >
          Create
        </button>
        <button
          
          className="bg-red-600 mt-5 hover:bg-red-700 text-white px-10 py-2 rounded-md font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
