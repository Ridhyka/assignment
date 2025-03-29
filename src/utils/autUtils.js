// Check if token exists and is valid
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  
  // Get token from localStorage
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Remove token from localStorage
  export const removeToken = () => {
    localStorage.removeItem('token');
  };