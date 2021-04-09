import "./App.css";

import ConnectionToApi from "./tests/ConnectionToApi.jsx";

const IS_TESTING = process.env.REACT_APP_TESTING_TRUE || "false";

const App = () => {
	return (
		<>
			{IS_TESTING === "true" ? (
				<ConnectionToApi />
			) : (
				<div className='App'>
					<h2>Hello World</h2>
				</div>
			)}
		</>
	);
};

export default App;
