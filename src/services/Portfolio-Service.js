import http from "./http-backend";

const getAllPortfolios = () => {
    return http.get("/portfolio");
  };

  const getPortfolioPerAccount = id => {
    return http.get(`/accounts/${id}/portfolio`);
  };

  export default {
    getAllPortfolios,
    getPortfolioPerAccount
  };