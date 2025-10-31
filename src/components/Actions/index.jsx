import React from "react";
import "./Actions.css";

const Actions = ({ onClearDone, onClearAll, hasDone, hasTasks }) => {
  return (
    <div className="actions-container">
      <button
        className="action-btn done-btn"
        onClick={onClearDone}
        disabled={!hasDone}
      >
        <i className="fas fa-check-double" />
        Clear Done
      </button>

      <button
        className="action-btn all-btn"
        onClick={onClearAll}
        disabled={!hasTasks}
      >
        <i className="fas fa-trash" />
        Clear All
      </button>
    </div>
  );
};

export default Actions;
