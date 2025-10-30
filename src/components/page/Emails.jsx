import React, { useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { LiaEye, LiaReplySolid } from 'react-icons/lia';
import { Link } from 'react-router';

const Emails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const emails = [
    {
      snippet: "Thanks for joining our service...",
      time: "Just now",
      sender: "Support Team",
      email: "support@example.com",
      subject: "Welcome to our service!",
      message: `Hi there, ...`
    },
    {
      snippet: "Can you clarify...",
      time: "25 min ago",
      sender: "Alice Smith",
      email: "alice@example.com",
      subject: "Need clarification on pricing",
      message: `Hello, ...`
    },
    {
      snippet: "I really liked your app...",
      time: "2 hours ago",
      sender: "David Lee",
      email: "david@example.com",
      subject: "Great experience!",
      message: `Hey, ...`
    },
    {
      snippet: "I cannot login...",
      time: "Yesterday",
      sender: "Sara Khan",
      email: "sara@example.com",
      subject: "Login issue",
      message: `Hi, ...`
    },
  ];

  const filteredEmails = emails.filter(
    email =>
      email.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FaLongArrowAltLeft className="text-red-800" />
          <h2 className="text-lg sm:text-xl font-medium text-gray-800">Emails</h2>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search emails"
            className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Emails - Table for Desktop / Cards for Mobile */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-left hidden sm:table">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 font-medium text-gray-700">Total {emails.length} Emails</th>
              <th className="py-3 px-4 font-medium text-gray-700 text-center">View</th>
              <th className="py-3 px-4 font-medium text-gray-700 text-center">Reply</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredEmails.map((email, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700 flex justify-between items-center">
                  <span>{email.snippet}</span>
                  <span className="text-sm text-gray-400">{email.time}</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button aria-label="View email" className="text-green-600 hover:underline">
                    <LiaEye />
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <Link state={email} to="/emailReply">
                    <button aria-label="Reply email" className="text-blue-600 hover:underline">
                      <LiaReplySolid />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-4 sm:hidden mt-4">
          {filteredEmails.map((email, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{email.snippet}</span>
                <span className="text-sm text-gray-400">{email.time}</span>
              </div>
              <div className="flex justify-end gap-4 mt-2">
                <button aria-label="View email" className="text-green-600 hover:underline">
                  <LiaEye />
                </button>
                <Link state={email} to="/emailReply">
                  <button aria-label="Reply email" className="text-blue-600 hover:underline">
                    <LiaReplySolid />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Emails;
