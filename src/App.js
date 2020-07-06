import React from "react";
import { Cards, Chart, StatePicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import image from "./img/image.png";

class App extends React.Component {
	state = {
		data: {},
		state: "",
		active: "",
	};
	async componentDidMount() {
		const data = await fetchData();

		this.setState({ data });
	}
	handleStateChange = async (state) => {
		const data = await fetchData(state);

		this.setState({ data, state: state });
	};
	render() {
		const { data, state } = this.state;
		console.log(data);

		return (
			<div className={styles.container}>
				<img className={styles.image} src={image} alt="COVID-19" />
				<Cards data={data} />
				<StatePicker handleStateChange={this.handleStateChange} />
				<Chart data={data} state={state} />
			</div>
		);
	}
}

export default App;
