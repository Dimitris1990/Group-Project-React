import http from "./http-backend";


const getAllAccounts = () => {
    return http.get("/accounts");
  };
  
  const getAccount = id => {
    return http.get(`/accounts/${id}`);
  };

  
  const updateAccount = (id, data) => {
    return http.put(`/accounts/${id}`, data);
  };
  

  export default {
    getAllAccounts,
    getAccount,
    updateAccount
  };