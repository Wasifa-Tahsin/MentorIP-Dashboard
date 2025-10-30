import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { LiaPaperPlaneSolid } from "react-icons/lia";
import { useLocation, Link } from "react-router";

const EmailViewReply = () => {
  const location = useLocation();
  const emailReply = location.state;

  // ✅ Fix: show "No Email" if no state was passed
  if (!emailReply) {
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>No email data found.</p>
        <Link
          to="/email"
          className="text-red-600 hover:underline block mt-2"
        >
          Go back to inbox
        </Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto p-4 max-w-3xl">
      {/* Back Button */}
      <div className="flex items-center gap-3 mb-6">
        <Link to="/email">
          <button className="flex items-center text-red-700 hover:text-red-800 font-medium">
            <FaLongArrowAltLeft className="mr-2" />
            Back to Inbox
          </button>
        </Link>
      </div>

      {/* Email Container */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Email Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            {emailReply.subject}
          </h2>
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
            <div>
              <span className="font-medium text-gray-700">{emailReply.sender}</span>{" "}
              &lt;{emailReply.email}&gt;
            </div>
            <div>{emailReply.time}</div>
          </div>
        </div>

        {/* Email Body */}
        <div
          className="text-left px-6 py-6 text-gray-700 text-sm leading-relaxed bg-gray-50"
          dangerouslySetInnerHTML={{ __html: emailReply.message }}
        ></div>
      </div>

      {/* Reply Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-md font-medium text-gray-800 mb-3">
          Reply to {emailReply.sender}
        </h3>
        <textarea
          rows="5"
          placeholder="Write your reply..."
          className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-400 resize-none mb-4"
        ></textarea>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-medium">
            <LiaPaperPlaneSolid size={18} />
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailViewReply;
