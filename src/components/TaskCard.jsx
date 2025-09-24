import React from "react";
import "./TaskCard.css";

const TaskCard = ({ id, title, description, status, onStatusChange, onDelete }) => {
  const statusClass = status === "completed" ? "completed" : status === "pending" ? "pending" : "other";

  return (
    <div className={`task-card ${statusClass}`}>
      <input type="text" value={title} readOnly />
      <textarea value={description} readOnly />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <select value={status} onChange={(e) => onStatusChange(id, e.target.value)}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
