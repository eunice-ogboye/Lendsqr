import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockUsers } from '../api/mockApi';

type UserContextType = {
  users: typeof mockUsers;
  setUsers: React.Dispatch<React.SetStateAction<typeof mockUsers>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState(mockUsers);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
