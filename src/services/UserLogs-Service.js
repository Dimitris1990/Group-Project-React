import http from "../http-backend";

const getAllLogs = () => {
  return http.get("/logs");
};

const getLogsPerUser = (id) => {
  return http.get(`/users/${id}/logs`);
};

const createLog = (id,data) => {
  return http.post(`/users/${id}/logs`, data);
};


export default {
  getAllLogs,
  getLogsPerUser,
  createLog
};