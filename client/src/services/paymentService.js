import axios from "axios";

const API_URL = "http://localhost:5000/api/payment/";

export const buyCredits = async (credits) => {
  const token = localStorage.getItem("token");
  return axios.post(
    API_URL + "buy-credits",
    { credits },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
