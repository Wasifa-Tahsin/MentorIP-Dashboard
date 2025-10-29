import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

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


 
  return (
    <div className="container mx-auto px-6 py-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Add Post Outline</h2>
        <button className="bg-[#a13e2d] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#8d3425]">
          <FaPlus /> Add Post Outline
        </button>
      </div>

      {/* Toolbar */}
      <div className="border border-gray-300 rounded mb-5 px-3 py-2 flex gap-3 items-center text-gray-600 text-sm">
        <button className="font-bold">B</button>
        <button className="italic">I</button>
        <button className="underline">U</button>
        <button>•</button>
        <button>1.</button>
        <button>–</button>
        <button>→</button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left Side */}
        <div className="flex flex-col">
          {[
            { label: "Main Title", name: "mainTitle" },
            { label: "Sub Title", name: "subTitle" },
            { label: "Pre-Step", name: "preStep" },
            { label: "Stage 1", name: "stage1" },
            { label: "Stage 1A", name: "stage1A" },
            { label: "Stage 2", name: "stage2" },
            { label: "Stage 2A", name: "stage2A" },
            { label: "Stage 3", name: "stage3" },
            { label: "Post- Registration", name: "postReg" },
            { label: "Sub Title", name: "finalSubTitle" },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <label className="font-semibold mb-1 block text-left">{item.label}</label>
              <input
                type="text"
                name={item.name}
                placeholder="Type here"
                value={formData[item.name]}
                onChange={handleChange}
                className="border border-gray-300 text-left rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Categories</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
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

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <button
         
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 rounded-md font-medium"
        >
          Create
        </button>
        <button
         
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-2 rounded-md font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPostOutline;
