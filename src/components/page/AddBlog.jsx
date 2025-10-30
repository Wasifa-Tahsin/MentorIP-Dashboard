import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import imgPlaceholder from '../../assets/images/addblogimg.png';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleCreate = () => alert("Blog Created!");
  const handleCancel = () => {
    setTitle("");
    setDesc("");
    setCategory("");
    setImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white bg-red-800 rounded-full p-2 hover:bg-red-700 transition">
            <FiArrowLeft size={20} />
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Add Blog</h2>
        </div>
        <button className="bg-[#a13e2d] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#8d3425] transition">
          <FaPlus /> Add Blog
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Side */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1 text-sm sm:text-base">Main Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="font-semibold mb-1 text-sm sm:text-base">Description</label>
          <textarea
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1 text-sm sm:text-base">Categories</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
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
                src={image}
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
      <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-full sm:w-60 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden relative"
          >
            <img
              src={imgPlaceholder}
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
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleCreate}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 mt-5 rounded-md font-medium w-full sm:w-auto transition"
        >
          Create
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-2 mt-5 rounded-md font-medium w-full sm:w-auto transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
