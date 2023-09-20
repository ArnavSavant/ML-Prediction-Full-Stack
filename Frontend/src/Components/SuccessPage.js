import React from "react";
import ParticleAnimation from "./ParticleAnimation";
import { useLocation } from "react-router-dom";

function SuccessPage() {
  	const location = useLocation();
		const predictionResult = location.state && location.state.prediction;
  return (
		<div className="flex items-center justify-center min-h-screen bg-gray-700">
			<div className="absolute top-0 left-0 w-full h-full z-0">
				<ParticleAnimation />
			</div>
			<div className="bg-gray-800 p-8 rounded shadow-md w-96 relative z-10 bg-opacity-75">
				<h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 pb-1 flex justify-center">
					Prediction Result
				</h2>
				<p className="text-white text-lg flex justify-center flex-col items-center space-y-3">
					<span className="text-2xl font-medium">Prediction Result:</span>
					<span className="text-3xl text-blue-500 font-semibold bg-white p-2 rounded-md shadow-md">
						{predictionResult}
					</span>
				</p>
			</div>
		</div>
	);
}

export default SuccessPage;
