import "./App.css";

import ConnectionToApi from "./tests/ConnectionToApi.jsx";

const App = () => {
	return (
		<div className='App'>
			<h2>Hello World</h2>
			<ConnectionToApi />
		</div>
	);
};

export default App;
