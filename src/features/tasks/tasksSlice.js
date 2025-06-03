import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;