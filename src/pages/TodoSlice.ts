import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Todo } from "../types";
import axiosApi from "../components/AxiosApi/AxiosApi";

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

export const fetchTodo = createAsyncThunk("todo,fetch", async () => {
  const response = await axiosApi.get<Record<string, Todo> | null>("/todos.json");

  const data = response.data;

  if (!data) {
    return [];
  }

  const result = Object.keys(data).map((id) => {
    return {
      id,
      ...data[id],
    };
  });

  return result;
});

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
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
