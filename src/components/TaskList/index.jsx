import React from "react";
import TaskItem from "../TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-list">
        <i className="fas fa-clipboard-list" />
        <h3>No tasks yet</h3>
        <p>Add your first task above!</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onEdit={(text) => onEdit(task.id, text)}
          onDelete={() => onDelete(task.id)}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default TaskList;
