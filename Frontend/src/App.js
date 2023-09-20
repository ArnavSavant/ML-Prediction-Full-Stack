// import logo from "./logo.svg";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import SignUpPage from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import HealthForm from "./Components/Form.js";
import SuccessPage from "./Components/SuccessPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [predictionResult, setPredictioResult] = useState(null);
  // Function to fetch the prediction result from backend
  const fetchPredictionResult = async () => {
    try {
      const response = await fetch("/api/predict"); // Replace with your backend API endpoint
      const data = await response.json();
      // console.log(data);
      setPredictioResult(data.prediction); // Assuming your backend returns a 'prediction' field
    } catch (error) {
      console.log("Error fetching prediction: ", error);
    }
  };

  useEffect(() => {
    fetchPredictionResult(); // Fetch prediction result when the component mounts
  });

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/health-form" element={<HealthForm />} />
        <Route
          path="/success"
          element={<SuccessPage predictionResult={predictionResult} />}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
