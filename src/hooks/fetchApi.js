import axios from "axios";

const BASE_URL = "https://app.navotar.com/api";

export async function fetchApi(cId, vId, vTId) {
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
		throw new Error("Auth Failed");
	}

	if (token.length === 0) return;

	const config = { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } };
	const vRes = axios.get(`${BASE_URL}/Vehicle/GetVehicle?vehicleTypeId=${vTId}&id=${vId}`, config);
	const vTRes = axios.get(`${BASE_URL}/VehicleType/Get?id=${vTId}`, config);

	try {
		const [vData, vTData] = await axios.all([vRes, vTRes]);

		/* This check should not be needed since searching of the vehicle with
		an incorrect/mismatched vehicle type id should return an error from the
		API, however should that not succeed this application level check has
		been added to ensure that no incorrect vehicle type is shown from the
		client account.*/
		if (vData.data.vehicleTypeId.toString() !== vTId.toString())
			throw new Error("Request vehicle and type do not match");

		vehicleData = vData.data;
		vehicleTypeData = vTData.data;
	} catch (error) {
		console.log(`Vehicle Search Error: \n${error}`);
		throw new Error("Vehicle Search Failed");
	}

	return { vehicleData, vehicleTypeData };
}
