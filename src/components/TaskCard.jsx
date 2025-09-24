import React from "react";

const TaskCard = ({ id, title, description, status, onStatusChange, onDelete }) => {
  const getStatusColor = (status) => {
    if (status === "completed") return "#aadfbdff"; // light green
    if (status === "pending") return "#decdbbff";   // light yellow
    return "#f8d7da";                             // light red (for any error/other)
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        backgroundColor: getStatusColor(status),
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <input
        type="text"
        value={title}
        readOnly
        style={{
          width: "100%",
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "5px",
          border: "none",
          backgroundColor: "transparent",
        }}
      />
      <textarea
        value={description}
        readOnly
        style={{
          width: "100%",
          marginBottom: "10px",
          border: "none",
          backgroundColor: "transparent",
          resize: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <select
          value={status}
          onChange={(e) => onStatusChange(id, e.target.value)}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button
          onClick={() => onDelete(id)}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#6f35dcff",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
