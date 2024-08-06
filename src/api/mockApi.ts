// src/api/mockApi.ts
export const mockUsers = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));
  
  export const fetchUsers = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUsers);
      }, 500);
    });
  