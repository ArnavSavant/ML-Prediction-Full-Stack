const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");
const { serverConfig } = require("../config");
async function getFormPrediction(data) {
	try {
		// const formPrediction = await axios({
		// 	url: "/",
		// 	method: "get",
		// 	baseUR: serverConfig.PREDICTION_MODEL_URL,
		// 	data: data,
		// });
		const formPrediction = { predicted: "1" };
		return formPrediction;
	} catch (error) {
		throw new AppError(
			"Something went wrong",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}

module.exports = {
	getFormPrediction,
};
