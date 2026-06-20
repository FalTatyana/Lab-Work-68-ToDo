import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");

  return (
    <div className="input-group mb-5">
      <input
        type="text"
        className="form-control"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="btn btn-primary"
        type="button"
      >
        Add new To Do
      </button>
    </div>
  );
};

export default AddTodo;