import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk("fetchTodos", async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  return res.json();
});

export const fetchPostById = createAsyncThunk("fetchTodoById", async (id) => {
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
    builder.addCase(fetchPost.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isError = true;
      console.log(Error);
    });

    // Single Post

    builder.addCase(fetchPostById.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleData = action.payload;
    });

    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.isError = true;
      console.log(Error);
    });
  },
});

export default dataSlice.reducer;
