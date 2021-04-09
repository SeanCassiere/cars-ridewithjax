import "./App.css";

import ConnectionToApi from "./tests/ConnectionToApi.jsx";

const IS_TESTING = process.env.REACT_APP_TESTING_TRUE || "false";

const VEHICLE_TYPE_ID = new URLSearchParams(window.location.search).get("vehicleTypeId");
const VEHICLE_ID = new URLSearchParams(window.location.search).get("id");

// Testing Query String ?vehicleTypeId=25635&id=137332
const App = () => {
	return (
		<>
			{IS_TESTING === "true" ? (
				<div className='App'>
					<ConnectionToApi />
				</div>
			) : (
				<div className='App'>
					<h2>Hello World</h2>
					<br />
					<div>Type ID: {VEHICLE_TYPE_ID}</div>
					<div>ID: {VEHICLE_ID}</div>
				</div>
			)}
		</>
	);
};

export default App;
