import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) {
      alert("Please enter a task!");
      return;
    }

    if (trimmed.length < 3) {
      alert("Task must be at least 3 characters");
      return;
    }

    if (trimmed.length > 50) {
      alert("Task too long (max 50)");
      return;
    }

    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What to do?..."
        className="task-input"
        maxLength={50}
      />
      <button type="submit" className="add-btn" disabled={!text.trim()}>
        <i className="fas fa-plus" />
        Add
      </button>
    </form>
  );
};

export default TaskInput;
