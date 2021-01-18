import http from "../http-backend";
import AuthService from "./auth.service";


const currentUser = AuthService.getCurrentUser();

const getAllCreditcards = () => {
    return http.get("/creditcards");
  };
  

  const createCreditcard = data => {
    return http.post(`/accounts/${currentUser.id}/creditcards`, data);
  };
  

  const getCreditcardsPerAccount = () => {
    return http.get(`accounts/${currentUser.id}/creditcards`);
  };

  
  export default {
    getAllCreditcards,
    createCreditcard,
    getCreditcardsPerAccount,
  };