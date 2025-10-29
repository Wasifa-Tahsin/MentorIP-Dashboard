import React from "react";
import { LiaEye, LiaReplySolid } from "react-icons/lia";
import { LuEye } from "react-icons/lu";
import image from '../../assets/images/logoimage.png'
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { Link } from "react-router";
const FeedBack = () => {
  const feedbacks = [
    { id: "#001", date: "2025-10-29", username: "Dindiniya", description: "Great service!" },
    { id: "#002", date: "2025-10-28", username: "Rafi", description: "Could be better." },
    { id: "#003", date: "2025-10-27", username: "Mitu", description: "Loved it!" },
    { id: "#004", date: "2025-10-26", username: "Hasan", description: "Not satisfied." },
    { id: "#005", date: "2025-10-25", username: "Alia", description: "Awesome experience." },
    { id: "#006", date: "2025-10-24", username: "Samir", description: "Good support." },
    { id: "#007", date: "2025-10-23", username: "Nadia", description: "Fast response." },
    { id: "#008", date: "2025-10-22", username: "Rina", description: "Helpful staff." },
    { id: "#009", date: "2025-10-21", username: "Tariq", description: "Will recommend." },
    { id: "#010", date: "2025-10-20", username: "Laila", description: "Excellent service." },
    { id: "#011", date: "2025-10-19", username: "Zahid", description: "Average experience." },
  ];

  return (
    <section className="container mx-auto p-4">





         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                {/* Left Section */}
                <div className="flex items-center gap-2">
                  <button className="text-red-600 hover:text-red-700">
                    <FiArrowLeft size={22} />
                  </button>
                  <h2 className="text-lg sm:text-xl font-medium text-gray-800">FeedBack</h2>
                </div>
        
                {/* Search Bar */}
                <div className="relative w-full sm:w-64">
                  <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
              </div>



      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-medium text-gray-700">ID No</th>
              <th className="py-3 px-4 font-medium text-gray-700">Date</th>
              <th className="py-3 px-4 font-medium text-gray-700">Username</th>
              <th className="py-3 px-4 font-medium text-gray-700">Description</th>
              <th className="py-3 px-4 font-medium text-gray-700 text-center">View</th>
              <th className="py-3 px-4 font-medium text-gray-700 text-center">Reply</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {feedbacks.map((fb, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">{fb.id}</td>
                <td className="py-3 px-4 text-gray-700">{fb.date}</td>
               


               <td className="py-3 px-4 text-gray-700">
  <div className="flex items-center gap-3">
    <img
      className="w-10 h-10 rounded-full object-cover"
      src={image} // replace with your user image variable
      alt={fb.username}
    />
    <span>{fb.username}</span>
  </div>
</td>

                
               
                <td className="py-3 px-4 text-gray-700">{fb.description}</td>
                <td className="py-3 px-4 text-center">
                  <Link to='/FeedbackView' state={fb}><button className="text-green-600 hover:underline"><LiaEye /></button></Link>
                </td>
                <td className="py-3 px-4 text-center">
                  <Link to='/FeedbackReply'><button className="text-green-600 hover:underline"><LiaReplySolid /></button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeedBack;
