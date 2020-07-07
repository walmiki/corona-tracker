import React from "react";
// import { fetchDailyData } from "../../api";
import { Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({
	data,
	state: { confirmed, active, recovered, deaths, state },
}) => {
	// const [dailyData, setDailyData] = React.useState({});
	// React.useEffect(() => {
	// 	const fetchAPI = async () => {
	// 		setDailyData(await fetchDailyData());
	// 	};
	// 	fetchAPI();
	// }, []);

	const barChart = (
		<Bar
			data={{
				labels: ["Infected", "Active", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						data: [confirmed, active, recovered, deaths],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in ${state}` },
			}}
		/>
	);

	const barChart2 = (
		<Bar
			data={{
				labels: ["Infected", "Active", "Recovered", "Deaths"],
				datasets: [
					{
						label: "People",
						backgroundColor: [
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)",
						],
						data: [data.confirmed, data.active, data.recovered, data.deaths],
					},
				],
			}}
			options={{
				legend: { display: false },
				title: { display: true, text: `Current state in India` },
			}}
		/>
	);

	return <div className={styles.container}>{state ? barChart : barChart2}</div>;
};

export default Chart;
