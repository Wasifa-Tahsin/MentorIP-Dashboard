import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddPostOutline = () => {
  const [formData, setFormData] = useState({
    mainTitle: "",
    subTitle: "",
    preStep: "",
    stage1: "",
    stage1A: "",
    stage2: "",
    stage2A: "",
    stage3: "",
    postReg: "",
    finalSubTitle: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = () => alert("Post Outline Created!");
  const handleCancel = () =>
    setFormData({
      mainTitle: "",
      subTitle: "",
      preStep: "",
      stage1: "",
      stage1A: "",
      stage2: "",
      stage2A: "",
      stage3: "",
      postReg: "",
      finalSubTitle: "",
      category: "",
    });

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 font-sans bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white bg-red-800 rounded-full p-2 hover:bg-red-700 transition">
            <FiArrowLeft size={20} />
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Add Post Outline
          </h2>
        </div>

        <button className="bg-[#a13e2d] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#8d3425] transition">
          <FaPlus /> Add Post Outline
        </button>
      </div>

      {/* ===== Toolbar ===== */}
      <div className="flex justify-between items-center rounded mb-5 px-3 py-2 bg-white shadow-sm border border-gray-200 text-gray-600 text-sm">
        <div className="flex flex-wrap gap-2">
          <button className="font-bold bg-gray-100 px-2 py-1 rounded">B</button>
          <button className="italic bg-gray-100 px-2 py-1 rounded">I</button>
          <button className="underline bg-gray-100 px-2 py-1 rounded">U</button>
          <button className="bg-gray-100 px-2 py-1 rounded">•</button>
          <button className="bg-gray-100 px-2 py-1 rounded">1.</button>
          <button className="bg-gray-100 px-2 py-1 rounded">–</button>
          <button className="bg-gray-100 px-2 py-1 rounded">→</button>
        </div>

        <div className="flex gap-3 text-red-800">
          <CiEdit size={18} />
          <RiDeleteBin6Line size={18} />
        </div>
      </div>

      {/* ===== Form ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* ----- Left Side ----- */}
        <div className="flex  flex-col text-left">
          {[
            { label: "Main Title", name: "mainTitle" },
            { label: "Sub Title", name: "subTitle" },
            { label: "Pre-Step", name: "preStep" },
            { label: "Stage 1", name: "stage1" },
            { label: "Stage 1A", name: "stage1A" },
            { label: "Stage 2", name: "stage2" },
            { label: "Stage 2A", name: "stage2A" },
            { label: "Stage 3", name: "stage3" },
            { label: "Post-Registration", name: "postReg" },
            { label: "Final Sub Title", name: "finalSubTitle" },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <label className="font-semibold mb-1 block text-sm sm:text-base text-gray-700">
                {item.label}
              </label>
              <input
                type="text"
                name={item.name}
                placeholder="Type here"
                value={formData[item.name]}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
              />
            </div>
          ))}
        </div>

        {/* ----- Right Side ----- */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1 text-sm sm:text-base text-gray-700">
            Categories
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
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
        </div>
      </div>

      {/* ===== Action Buttons ===== */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10">
        <button
          onClick={handleCreate}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md font-medium text-sm sm:text-base transition w-full sm:w-auto"
        >
          Create
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md font-medium text-sm sm:text-base transition w-full sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPostOutline;
