import http from "../http-backend";


const getAllUsers = () => {
    return http.get("/users");
  };
  
  const getUser = id => {
    return http.get(`/users/${id}`);
  };
  
  
  const updateUser = (id, data) => {
    return http.put(`/users/${id}`, data);
  };
  
  
  
  export default {
    getAllUsers,
    getUser,
    updateUser,
    // removeUser
  };