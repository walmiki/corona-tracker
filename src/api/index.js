import axios from "axios";

const url = "https://api.covid19india.org/data.json";

export const fetchAllData = async () => {
	try {
		const {
			data: { confirmed, active, recovered, deaths },
		} = await axios.get("https://api.covidindiatracker.com/total.json");
		return {
			active,
			confirmed,
			recovered,
			deaths,
		};
	} catch (error) {}
};

export const fetchData = async (state) => {
	try {
		const {
			data: { statewise },
		} = await axios.get(url);
		return statewise.map(({ confirmed, active, deaths, recovered, state }) => ({
			confirmed,
			active,
			deaths,
			recovered,
			state,
		}));
	} catch (error) {
		console.log(error);
	}
};
// export const fetchStateData = async (state) => {
// 	try {
// 		const {
// 			data: { statewise },
// 		} = await axios.get(url);

// 		return statewise.state === state;
// return statewise.map(({ confirmed, active, deaths, recovered, state}));
// 	} catch (error) {}
// };
export const fetchState = async () => {
	const data = await fetchData();

	return data.map((name) => name.state);
};
// export const fetchStateData = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			"https://api.covidindiatracker.com/state_data.json"
// 		);

// 		return data.map((name) => name.state);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
