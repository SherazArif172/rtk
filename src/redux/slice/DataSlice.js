import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  return res.json();
});

export const fetchTodoById = createAsyncThunk("fetchTodoById", async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    data: [],
    isRejected: false,
    singleTodo: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
      console.log(Error);
    });

    // Single Post

    builder.addCase(fetchTodoById.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodoById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleData = action.payload;
    });

    builder.addCase(fetchTodoById.rejected, (state, action) => {
      state.isError = true;
      console.log(Error);
    });
  },
});

export default dataSlice.reducer;
