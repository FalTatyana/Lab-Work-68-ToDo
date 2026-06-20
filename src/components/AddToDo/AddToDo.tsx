import { useState, type SubmitEvent, type ChangeEvent } from "react";
import type { PostTodo } from "../../types";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../App/store";
import { addTodo } from "../../pages/TodoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState<PostTodo>({
    title: '',
    completed: false
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTodo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    dispatch(addTodo(todo)); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo..."
          name="title"
          id="title"
          value={todo.title}
          onChange={handleChange} 
        />

        <button className="btn btn-primary" type="submit">
          Add new To Do
        </button>
      </div>
    </form>
  );
};

export default AddTodo;