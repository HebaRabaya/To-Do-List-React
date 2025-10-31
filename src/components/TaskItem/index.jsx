import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = ({ task, onToggle, onEdit, onDelete, delay }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.text);

  const handleEdit = () => {
    if (edit) {
      const trimmed = text.trim();
      if (trimmed && trimmed !== task.text) {
        if (trimmed.length < 3 || trimmed.length > 50) {
          alert("Task must be 3-50 characters");
          return;
        }
        onEdit(trimmed);
      }
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setText(task.text);
      setEdit(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      onDelete();
    }
  };

  return (
    <div
      className={`task-item ${task.done ? "done" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="task-content">
        <button
          className="check-btn"
          onClick={onToggle}
          title={task.done ? "Mark as incomplete" : "Mark as complete"}
        >
          <i className={`fas ${task.done ? "fa-check" : ""}`}></i>
        </button>

        <div className="task-text">
          {edit ? (
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKey}
              onBlur={handleEdit}
              className="edit-input"
              autoFocus
              maxLength={50}
            />
          ) : (
            <span
              style={{
                display: "block",
                whiteSpace: "normal",
                wordWrap: "normal",
                overflowWrap: "normal",
                wordBreak: "normal",
              }}
            >
              {task.text}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button
          className="action-btn complete-btn"
          onClick={onToggle}
          title={task.done ? "Mark incomplete" : "Mark complete"}
        >
          <i className="fas fa-check"></i>
        </button>

        <button
          className="action-btn edit-btn"
          onClick={handleEdit}
          title={edit ? "Save changes" : "Edit task"}
        >
          <i className="fas fa-edit"></i>
        </button>

        <button
          className="action-btn delete-btn"
          onClick={handleDelete}
          title="Delete task"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
