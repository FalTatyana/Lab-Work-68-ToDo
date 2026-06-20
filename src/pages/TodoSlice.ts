import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PostTodo, Todo } from "../types";
import axiosApi from "../components/AxiosApi/AxiosApi";
import type { RootState } from "../App/store";

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: boolean;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: false,
};

export const fetchTodo = createAsyncThunk(
  "todo,fetch", async () => {
  const response = await axiosApi.get<Record<string, Todo> | null>("/todos.json");

  const data = response.data;
  if (!data) {
    return [];
  }
  const result = Object.keys(data).map((id) => {   
    return {
      key: data[id].title,
      id,
      ...data[id],
    };
  });
  return result;
});

export const addTodo = createAsyncThunk(
  "todo, post",
  async (todo: PostTodo, { dispatch }) => {
    await axiosApi.post<Record<string, Todo> | null>("/todos.json", todo);
    dispatch(fetchTodo());
  }
);

export const deleteTodo = createAsyncThunk(
  "todo, delete",
  async (id: string) => {
    await axiosApi.delete<Record<string, Todo> | null>(`/todos/${id}.json`);
    return id;
  }
);

export const toggleTodo = createAsyncThunk(
  "todo/toggle",
  async (todo: Todo) => {
    await axiosApi.patch(`/todos/${todo.id}.json`, {completed: !todo.completed,});

    return todo.id;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchTodo.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    });
    builder.addCase(toggleTodo.fulfilled, (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    });
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;

