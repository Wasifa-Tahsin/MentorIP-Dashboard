import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { LiaEye, LiaReplySolid } from 'react-icons/lia';

const Emails = () => {
  const emails = [
    {  snippet: "Thanks for joining our service..." },
    {   snippet: "Can you clarify..." },
    {  snippet: "I really liked your app..." },
    {  snippet: "I cannot login..." },
  ];

  return (
    <section className="container mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800">Emails</h2>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search emails"
            className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
          />
        </div>
      </div>

      {/* Email Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
             
              <th className="py-3 px-4 font-medium text-gray-700">Total 128 Emails</th>
              <th className="py-3 px-4 font-medium text-gray-700 text-center">View</th>
              <th className="py-3 px-4 font-medium text-gray-700 text-center">Reply</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {emails.map((email, index) => (
              <tr key={index} className="hover:bg-gray-50">
                
               
                
              
                <td className="py-3 px-4 text-gray-700">{email.snippet}</td>
                
                <td className="py-3 px-4 text-center">
                  <button className="text-green-600 hover:underline"><LiaEye /></button>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-blue-600 hover:underline"><LiaReplySolid /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Emails;
