// components/UserList.tsx
'use client'
import React from 'react';
import useFetchUsers from '../../hooks/useFetchUsers';
import { User } from '../../types/User'; // Importing the User type

const UserList = () => {
  const { users, status, error } = useFetchUsers();

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user._id} className="mb-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
