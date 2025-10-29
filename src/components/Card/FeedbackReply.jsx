import React, { useState } from "react";

const FeedbackReply = () => {
  const [replyText, setReplyText] = useState("");

  return (
    <div className="p-4 bg-white rounded-lg shadow max-w-md mx-auto">

        <h2 className="text-xl font-semibold">Reply</h2>
      <h2 className="text-left   mb-4">Reply</h2>

      <input
        type="text"
        placeholder="Type here..."
        className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-red-500 text-lg"
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />

      <button
        onClick={() => {
          console.log("Sent reply:", replyText);
          setReplyText("");
        }}
        className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded text-lg font-semibold"
      >
        Send
      </button>
    </div>
  );
};

export default FeedbackReply;
