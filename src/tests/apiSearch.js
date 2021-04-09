import axios from "axios";

const BASE_URL = "https://app.navotar.com/api";

export async function searchApi(cId, vId, vTId) {
	const API_BODY = { ClientId: cId, ConsumerType: "Admin,Basic" };
	let token = "";
	let vehicleData;
	let vehicleTypeData;

	try {
		const config = { headers: { "Content-Type": "application/json" } };
		const { data } = await axios.post(`${BASE_URL}/Login/GetClientSecretToken`, API_BODY, config);

		token = data.apiToken.access_token;
	} catch (error) {
		console.log(`Auth Error: \n${error}`);
	}

	if (token.length === 0) return;

	const config = { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } };
	const vRes = axios.get(`${BASE_URL}/Vehicle/GetVehicle?vehicleTypeId=${vTId}&id=${vId}`, config);
	const vTRes = axios.get(`${BASE_URL}/VehicleType/Get?id=${vTId}`, config);

	try {
		const [vData, vTData] = await axios.all([vRes, vTRes]);
		vehicleData = vData.data;
		vehicleTypeData = vTData.data;

		// console.log(vehicleData);
		// console.log(vehicleTypeData);
	} catch (error) {
		console.log(`Vehicle Search Error: \n${error}`);
	}

	return { vehicleData, vehicleTypeData };
}
