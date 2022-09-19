import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },

  reducers: {
    setUsers: (state, action) => {
        state.users = action.payload
    },
    addUser: (state, action) => {
        state.users.push(action.payload)
    }
  }
})


export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
