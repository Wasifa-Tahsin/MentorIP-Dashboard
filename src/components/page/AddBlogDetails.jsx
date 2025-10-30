import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlus, FaCamera, FaVolumeUp } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddBlogDetails = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleAudioUpload = (e) => {
    const file = e.target.files[0];
    if (file) setAudio(file.name);
  };

  const handleCreate = () => alert("Blog Details Created!");
  const handleCancel = () => {
    setTitle("");
    setSubtitle("");
    setDesc("");
    setCategory("");
    setTags("");
    setImage(null);
    setAudio(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 font-sans bg-gray-50 min-h-screen">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <button className="text-white bg-red-800 rounded-full p-2 hover:bg-red-700 transition">
            <FiArrowLeft size={20} />
          </button>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Add Blog Details
          </h2>
        </div>

        <button className="bg-[#a13e2d] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#8d3425] transition">
          <FaPlus /> Add Blog Details
        </button>
      </div>

      {/* ===== Editor Toolbar ===== */}
      <div className="flex justify-between items-center rounded mb-5 px-3 py-2 bg-white shadow-sm border border-gray-200 text-gray-600 text-sm">
        <div className="flex ">
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

      {/* ===== Form Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* ----- Left Side ----- */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1 text-sm sm:text-base">
            Main Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="font-semibold mb-1 text-sm sm:text-base">
            Sub Title
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />

          <label className="font-semibold mb-1 text-sm sm:text-base">
            Description
          </label>
          <textarea
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 h-32 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        {/* ----- Right Side ----- */}
        <div className="flex flex-col text-left">
          <label className="font-semibold mb-1 text-sm sm:text-base">
            Categories
          </label>
          <select
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
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

          <label className="font-semibold mb-1 text-sm sm:text-base">
            Tags
          </label>
          <select
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          >
            <option>Select Tags</option>
            <option>Trademark</option>
            <option>Copyright</option>
            <option>Patent</option>
          </select>

          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center h-40 sm:h-44 mb-4 bg-white relative">
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
                  className="text-gray-500 cursor-pointer flex flex-col items-center text-sm"
                >
                  <FaCamera className="text-2xl mb-1" />
                  <span>Add Image</span>
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

          {/* Audio Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center h-20 sm:h-24 bg-white">
            {audio ? (
              <p className="text-gray-600 text-sm">{audio}</p>
            ) : (
              <>
                <label
                  htmlFor="audio-upload"
                  className="text-gray-500 cursor-pointer flex flex-col items-center text-sm"
                >
                  <FaVolumeUp className="text-xl mb-1" />
                  <span>Add Audio</span>
                </label>
                <input
                  id="audio-upload"
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="hidden"
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* ===== Action Buttons ===== */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <button
          onClick={handleCreate}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md font-medium text-sm sm:text-base transition"
        >
          Create
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md font-medium text-sm sm:text-base transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBlogDetails;
