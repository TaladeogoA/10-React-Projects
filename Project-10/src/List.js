import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

// destructure props
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {/* map over items array and display each item */}
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => {
                  editItem(id);
                }}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
