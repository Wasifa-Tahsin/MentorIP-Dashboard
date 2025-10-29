import React from "react";
import { useLocation, useNavigate } from "react-router";

const FeedbackView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fb = location.state; // the feedback data passed from FeedBack

  if (!fb) return <p>No feedback selected</p>;

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow">
      <button
        onClick={() => navigate(-1)}
        className="text-red-600 mb-4 hover:text-red-700"
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-4">Feedback Details</h2>
      <p><strong>ID No:</strong> {fb.id}</p>
      <p><strong>Date:</strong> {fb.date}</p>
      <p><strong>Username:</strong> {fb.username}</p>
      <p><strong>Description of the issue: <br /></strong> {fb.description}</p>
    </div>
  );
};

export default FeedbackView;
