import React, { useState } from "react";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sample Task 1", description: "This is a demo task", status: "pending" },
    { id: 2, title: "Sample Task 2", description: "This task is completed", status: "completed" },
  ]);

  const [newTask, setNewTask] = useState({ title: "", description: "", status: "pending" });

  // Add a new task
  const handleAddTask = () => {
    if (newTask.title.trim() === "" || newTask.description.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), ...newTask } // Use timestamp as unique ID
    ]);
    setNewTask({ title: "", description: "", status: "pending" });
  };

  // Update task status
  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  // Delete a task
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Task Manager</h1>

      {/* Add Task Form */}
      <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h3>Add New Task</h3>
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          style={{ marginBottom: "10px" }}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleAddTask} style={{ display: "block", marginTop: "10px" }}>Add Task</button>
      </div>

      {/* Task List */}
      <div style={{ marginTop: "20px" }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
