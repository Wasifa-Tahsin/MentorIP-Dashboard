import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { LiaEye, LiaReplySolid } from 'react-icons/lia';
import { Link } from 'react-router';

const Emails = () => {
  const emails = [
    {
      snippet: "Thanks for joining our service...",
      time: "Just now",
      sender: "Support Team",
      email: "support@example.com",
      subject: "Welcome to our service!",
      message: `
        Hi there,<br/><br/>
        Thank you for joining our platform! We're excited to have you.<br/><br/>
        Regards,<br/>Support Team
      `
    },
    {
      snippet: "Can you clarify...",
      time: "25 min ago",
      sender: "Alice Smith",
      email: "alice@example.com",
      subject: "Need clarification on pricing",
      message: `
        Hello,<br/><br/>
        Could you clarify the difference between the basic and premium plans?<br/><br/>
        Thanks,<br/>Alice
      `
    },
    {
      snippet: "I really liked your app...",
      time: "2 hours ago",
      sender: "David Lee",
      email: "david@example.com",
      subject: "Great experience!",
      message: `
        Hey,<br/><br/>
        I just wanted to say your app is amazing — keep up the great work!<br/><br/>
        Cheers,<br/>David
      `
    },
    {
      snippet: "I cannot login...",
      time: "Yesterday",
      sender: "Sara Khan",
      email: "sara@example.com",
      subject: "Login issue",
      message: `
        Hi,<br/><br/>
        I'm unable to login to my account. Can you please assist?<br/><br/>
        Regards,<br/>Sara
      `
    },
  ];

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
                <td className="py-3 px-4 text-gray-700 flex justify-between items-center">
                  <span>{email.snippet}</span>
                  <span className="text-sm text-gray-400">{email.time}</span>
                </td>

                <td className="py-3 px-4 text-center">
                  <button className="text-green-600 hover:underline">
                    <LiaEye />
                  </button>
                </td>
                <td className="py-3 px-4 text-center">
                  <Link state={email} to="/emailReply">
                    <button className="text-blue-600 hover:underline">
                      <LiaReplySolid />
                    </button>
                  </Link>
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
