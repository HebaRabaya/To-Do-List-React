import React from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Actions from "./components/Actions";
import { useStorage } from "./hooks/useStorage";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

function App() {
  const [tasks, setTasks] = useStorage("tasks", []);
  const { dark, toggle } = useTheme();

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      done: false,
      time: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const editTask = (id, text) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const clearDone = () => {
    if (window.confirm("Clear completed tasks?")) {
      setTasks((prev) => prev.filter((task) => !task.done));
    }
  };

  const clearAll = () => {
    if (window.confirm("Clear ALL tasks?")) {
      setTasks([]);
    }
  };

  const done = tasks.filter((t) => t.done).length;
  const total = tasks.length;

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <div className="container">
        <Header dark={dark} toggle={toggle} />

        <TaskInput onAdd={addTask} />

        <div className="stats">
          <span>Total: {total}</span>
          <span>Done: {done}</span>
          {total > 0 && <span>{Math.round((done / total) * 100)}%</span>}
        </div>

        <Actions
          onClearDone={clearDone}
          onClearAll={clearAll}
          hasDone={done > 0}
          hasTasks={total > 0}
        />

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onEdit={editTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
