// hooks/useFetchUsers.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
import { RootState } from '../store';
import { User } from '../types/User';
import { AppDispatch } from '../store'; // Import AppDispatch

const useFetchUsers = () => {
  const dispatch = useDispatch<AppDispatch>(); // Type the dispatch
  const { users, status, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers()); // Correctly typed dispatch
    }
  }, [dispatch, status]);

  return {
    users,
    status,
    error,
  };
};

export default useFetchUsers;
