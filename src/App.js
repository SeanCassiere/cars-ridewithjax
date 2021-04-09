import "./App.css";

import ConnectionToApi from "./tests/ConnectionToApi.jsx";

import Header from "./components/Header/Header";
import DownloadApps from "./components/DownloadApps/DownloadApps";
import Footer from "./components/Footer/Footer";

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
					<Header />
					<DownloadApps />
					<Footer />
				</div>
			)}
		</>
	);
};

export default App;
