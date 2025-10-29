import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaCamera, FaVolumeUp } from "react-icons/fa";

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
    <div className="container mx-auto px-6 py-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Add Blog Details</h2>
        <button className="bg-[#a13e2d] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#8d3425]">
          <FaPlus /> Add Blog Details
        </button>
      </div>

      {/* Editor Toolbar (simple static UI like in screenshot) */}
      <div className="border border-gray-300 rounded mb-5 px-3 py-2 flex gap-3 items-center text-gray-600 text-sm">
        <button className="font-bold">B</button>
        <button className="italic">I</button>
        <button className="underline">U</button>
        <button>•</button>
        <button>1.</button>
        <button>–</button>
        <button>→</button>
      </div>

      {/* Form Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left Side */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Main Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="font-semibold mb-1">Sub Title</label>
          <input
            type="text"
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />

          <label className="font-semibold mb-1">Description</label>
          <textarea
            placeholder="Type here"
            className="border border-gray-300 rounded px-3 py-2 h-32 focus:ring-2 focus:ring-blue-400 outline-none"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Categories</label>
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

          <label className="font-semibold mb-1">Tags</label>
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
          <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center h-36 mb-4 relative">
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
          <div className="border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center h-20">
            {audio ? (
              <p className="text-gray-600 text-sm">{audio}</p>
            ) : (
              <>
                <label
                  htmlFor="audio-upload"
                  className="text-gray-500 cursor-pointer flex flex-col items-center"
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

      {/* Action Buttons */}
      <div className="flex justify-center gap-6">
        <button
          onClick={handleCreate}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 rounded-md font-medium"
        >
          Create
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-2 rounded-md font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBlogDetails;
