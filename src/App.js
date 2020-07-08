import React from "react";
import { Chart, StatePicker, List } from "./components";
import IndiaData from "./components/List/IndiaData";
import styles from "./App.module.css";
import { fetchData, fetchAllData } from "./api";

import image from "./img/image.png";

class App extends React.Component {
	state = {
		data: {},
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
		const stateData = await fetchData(state);
		const data1 = stateData.find(handleState);
		function handleState(name) {
			return name.state === state;
		}

		this.setState({ stateData, state: data1 });
	};

	render() {
		const { data, state } = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.image} src={image} alt="COVID-19" />

				<IndiaData data1={data} />
				<StatePicker handleStateChange={this.handleStateChange} />
				<List state={state} />

				<Chart data={data} state={state} />
			</div>
		);
	}
}

export default App;
