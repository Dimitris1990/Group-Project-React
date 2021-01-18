import http from "./http-backend";


const getAllOrders = () => {
  return http.get("/orders");
};

const getOrder = id => {
  return http.get(`/orders/${id}`);
};


const getOrdersPerAccount = id => {
  return http.get(`/accounts/${id}/orders`);
};


const createOrder =(id,data) => {
  return http.post(`/accounts/${id}/orders`, data);
};

const updateOrder = (id, data) => {
  return http.put(`/orders/${id}`, data);
};



export default {
  getAllOrders,
  getOrdersPerAccount,
  getOrder,
  createOrder,
  updateOrder
};