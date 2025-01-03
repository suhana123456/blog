"use client"
import React, { useState } from 'react';

function CommentSection() {
  // State for storing comments
  const [comments, setComments] = useState([
    { id: 1, name: "mikael", text: " Amazing article! Keep doing!" ,},
    { id: 2, name: "zara", text: "Very nice. Thanks !" },
  ]);

  // State for new comment input and name input
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  // Function to handle adding a new comment
  const addComment = () => {
    if (newComment.trim() !== "") {
      const currentDateTime = new Date().toLocaleString(); // Get current date and time

      const newCommentObj = {
        id: comments.length + 1, // Generate a new id (based on length)
        name: name.trim() !== "" ? name : "User", // Use "User" if name is not provided
        text: newComment,
        date: currentDateTime, // Store the current date and time
      };

      setComments((prevComments) => [...prevComments, newCommentObj]); // Add new comment
      setNewComment(""); // Clear the comment input field
      setName(""); // Clear the name input field
    }
  };

  // Function to handle removing a comment
  const removeComment = (id:number|string) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id)); // Remove comment by id
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Comments</h2>

      {/* Display existing comments */}
      <div style={{ marginBottom: "1rem" }}>
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              position: "relative",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              minHeight: "150px"
            }}
          >
            {/* Name at top left */}
            <div style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#333",
            }}>
              {comment.name}
            </div>

            {/* Comment text */}
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.5" , marginTop: "30px", overflowWrap: "break-word", wordWrap: "break-word" }}>
              {comment.text}
            </p>

            {/* Date and time at bottom right */}
            <div style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              fontSize: "0.8rem",
              color: "#888",
            }}>
              
            </div>

            {/* Remove button */}
            <button
              onClick={() => removeComment(comment.id)}
              style={{
                padding: "0.2rem 0.5rem",
                backgroundColor: "#e63946",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "0.8rem",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Input fields for name and comment */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update state when name changes
          placeholder="Your name (optional)"
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)} // Update state when comment text changes
          placeholder="Write a comment..."
          
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Button to add new comment */}
      <button
        onClick={addComment}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#1d3557",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

export default CommentSection;
