import React, { useEffect, useReducer } from "react";
import { fetchApi } from "../../hooks/fetchApi";
import "./VehicleDetails.css";

const clientId = process.env.REACT_APP_CLIENT_ID || 1013;

const initialState = {
	loading: true,
	vehicleDetails: {},
	vehicleTypeDetails: {},
	error: false,
};

const reducer = (state, action) => {
	const { payload } = action;
	switch (action.type) {
		case "SEARCH_REQUEST":
			return { ...initialState, loading: true };
		case "SEARCH_FAILED":
			return { ...initialState, loading: false, error: true };
		case "SEARCH_SUCCESS":
			return {
				...state,
				loading: false,
				vehicleDetails: payload.vehicleDetails,
				vehicleTypeDetails: payload.vehicleTypeDetails,
			};
		default:
			return state;
	}
};

const VehicleDetails = ({ typeId, vehicleId }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loading, error, vehicleDetails, vehicleTypeDetails } = state;

	useEffect(() => {
		dispatch({ type: "SEARCH_REQUEST" });
		fetchApi(clientId, vehicleId, typeId)
			.then((res) =>
				dispatch({
					type: "SEARCH_SUCCESS",
					payload: { vehicleDetails: res.vehicleData, vehicleTypeDetails: res.vehicleTypeData },
				})
			)
			.catch(() => dispatch({ type: "SEARCH_FAILED" }));
	}, [dispatch, vehicleId, typeId]);
	return (
		<>
			{error && (window.location = "/")}
			{loading ? "Loading..." : "Done Loading"}
		</>
	);
};

export default VehicleDetails;
