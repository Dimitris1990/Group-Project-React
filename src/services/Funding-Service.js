import http from "../http-backend";

const getAllfundings = () => {
  return http.get("/fundings");
};


const getFundingsPerAccount = id => {
  return http.get(`/accounts/${id}/fundings`);
};


const deposit = (id,data) => {
  return http.post(`/accounts/${id}/deposit`, data);
};

const withdrawal = (id,data) => {
  return http.post(`/accounts/${id}/withdrawal`, data);
};


export default {
  getAllfundings,
  getFundingsPerAccount,
  deposit,
  withdrawal
};