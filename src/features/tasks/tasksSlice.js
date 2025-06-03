import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000';
const API_KEY = '123@';

export const fetchGoals = createAsyncThunk('tasks/fetchGoals', async () => {
  const res = await axios.get(`${API_URL}/getGoals`, {
    headers: { Authorization: API_KEY }
  });
  return res.data;
});

export const addGoal = createAsyncThunk('tasks/addGoal', async (goal) => {
  const res = await axios.post(`${API_URL}/addGoal`, goal, {
    headers: { Authorization: API_KEY }
  });
  return { ...goal, id: res.data.id };
});

export const deleteGoal = createAsyncThunk('tasks/deleteGoal', async (id) => {
  await axios.delete(`${API_URL}/removeGoal`, {
    headers: { Authorization: API_KEY },
    data: { id }
  });
  return id;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        return state.filter(goal => goal.id !== action.payload);
      });
  },
});

export default tasksSlice.reducer;
