import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("users", async () => {
  const response = await axios.get("https://.typicode.com/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    stags: [
      {
        name: "test",
        email: "test@gmail.com",
        id: 1,
      },
      {
        name: "test2",
        email: "test2@gmail.com",
        id: 2,
      },
      {
        name: "test3",
        email: "test3@gmail.com",
        id: 3,
      },
    ],
    isError: false,
    isLoading: false,
    isSuccess: false
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
    showUser: (state, action) => { 
      const { id } = action.payload;
      const existUser = state.stags.filter((user) => { return user.id == id })
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const findUser = state.data.find((user) => user.id == id);
      if (findUser) {
        findUser.name = name;
        findUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const findUser = state.data.find((user) => user.id == id);
      if (findUser) {
        state.data.filter((user) => user.id != id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
        state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state, action) => {
        state.isError = true;
        console.log("Error", action.payload);
    })
    builder.addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stags = action.payload;
    });
  },
});

export const { addUser, updateUser, deleteUser, showUser } = userSlice.actions;
export default userSlice.reducer;
