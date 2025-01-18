import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/User'; // Ensure User type is defined correctly
import axiosInstance from '../../utils/axiosInstance'; // Adjust the path to where your axiosInstance is located

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    try {
      const response = await axiosInstance.get('/api/users'); // Use axiosInstance
      return response.data; // Axios responses have data in response.data
    } catch (error: any) {
      // Handle error and throw a message to be caught by the rejected action
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
  }
);

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load users';
      });
  },
});

export default userSlice.reducer;
