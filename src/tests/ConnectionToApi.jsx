import React, { useState, useEffect } from "react";

import { searchApi } from "./apiSearch";

const ConnectionToApi = () => {
	const [clientId, setClientId] = useState(1013);
	const [vehicleId, setVehicleId] = useState(137332);
	const [vehicleTypeId, setVehicleTypeId] = useState(25635);

	const [vehicleData, setVehicleData] = useState();

	function handleFormSubmit(e) {
		e.preventDefault();
		searchApi(clientId, vehicleId, vehicleTypeId);
	}

	useEffect(() => {
		searchApi(clientId, vehicleId, vehicleTypeId).then((res) => setVehicleData(res));
	}, [clientId, vehicleId, vehicleTypeId]);

	return (
		<div>
			<form onSubmit={(e) => handleFormSubmit(e)}>
				<div className='input-group'>
					<label id='ClientID'>ClientID:&nbsp;</label>
					<input
						type='text'
						name='ClientID'
						id='ClientID'
						value={clientId}
						onChange={(e) => setClientId(e.target.value)}
					/>
				</div>
				<div className='input-group'>
					<label id='VehicleId'>VehicleID:&nbsp;</label>
					<input
						type='text'
						name='VehicleID'
						id='VehicleId'
						value={vehicleId}
						onChange={(e) => setVehicleId(e.target.value)}
					/>
				</div>
				<div className='input-group'>
					<label id='VehicleTypeId'>Vehicle Type ID:&nbsp;</label>
					<input
						type='text'
						name='VehicleTypeID'
						id='VehicleTypeId'
						value={vehicleTypeId}
						onChange={(e) => setVehicleTypeId(e.target.value)}
					/>
				</div>
				<div className='input-group'>
					<button type='submit'>Search</button>
				</div>
			</form>
			<div>
				<pre>{JSON.stringify(vehicleData, null, 2)}</pre>
			</div>
		</div>
	);
};

export default ConnectionToApi;
