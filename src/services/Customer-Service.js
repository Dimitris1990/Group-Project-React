import http from "../http-backend";



const getAllCustomers = () => {
  return http.get("/customers");
};

const getCustomer = id => {
  return http.get(`/customers/${id}`);
};

const createCustomer = (userId,data) => {
  return http.post(`/users/${userId}/customer`, data);
};

const updateCustomer = (id, data) => {
  return http.put(`/customers/${id}`, data);
};

const removeCustomer = id => {
  return http.delete(`/customers/${id}`);
};


export default {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  removeCustomer
};