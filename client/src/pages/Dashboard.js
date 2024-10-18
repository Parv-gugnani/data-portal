import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [credits, setCredits] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const res = await axios.get("http://localhost:5000/api/user/credits", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCredits(res.data.credits);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCredits();
  }, [navigate]);

  const handleBuyCredits = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/payment/buy-credits",
        { credits: 10 }, // buying 10 credits
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.href = res.data.url; // Redirect to Stripe payment page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Your Credits: {credits}</h1>
      <button onClick={handleBuyCredits}>Buy Credits</button>
      <Map />
    </div>
  );
};

export default Dashboard;
