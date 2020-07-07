import React from "react";
import { Cards, Chart, StatePicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchAllData } from "./api";

import image from "./img/image.png";

class App extends React.Component {
	state = {
		data: "",
		state: "",
	};
	async componentDidMount() {
		const data = await fetchAllData();

		this.setState({ data });
	}
	// function	handleState = (data) => {
	// 		return data.state === {state};
	// 		this.setState({ data, state: state });
	// 	};

	handleStateChange = async (state) => {
		const data = await fetchData();
		const data1 = data.find(handleState);
		function handleState(name) {
			return name.state === state;
		}

		this.setState({ data, state: data1 });
	};

	render() {
		const { data, state } = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.image} src={image} alt="COVID-19" />
				<Cards data={data} state={state} />
				<StatePicker handleStateChange={this.handleStateChange} />
				<Chart data={data} state={state} />
			</div>
		);
	}
}

export default App;
