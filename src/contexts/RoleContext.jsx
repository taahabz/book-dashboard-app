import { createContext, useState, useContext } from 'react';

// Create the context
const RoleContext = createContext();

// Custom hook to use the role context
export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}

// Provider component that wraps the app
export function RoleProvider({ children }) {
  const [role, setRole] = useState('user');

  // Function to toggle between 'user' and 'admin' roles
  const toggleRole = () => {
    setRole(prevRole => prevRole === 'user' ? 'admin' : 'user');
  };

  // Value object that will be passed to consumers
  const value = {
    role,
    toggleRole
  };

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
} 