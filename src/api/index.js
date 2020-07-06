import axios from "axios";

const url = "https://api.covidindiatracker.com/total.json";

export const fetchData = async (state) => {
	if (state) {
		try {
			const { data } = await axios.get(
				"https://api.covidindiatracker.com/state_data.json"
			);
			return data.find((name) => (name.state = state));
		} catch (error) {
			console.log(error);
		}
	}
	try {
		const {
			data: { active, confirmed, recovered, deaths },
		} = await axios.get(url);
		return {
			active,
			confirmed,
			recovered,
			deaths,
		};
	} catch (error) {
		console.log(error);
	}
};

// export const fetchDailyData = async () => {
// 	try {
// 		const { data } = await axios.get("https://covid19.mathdro.id/api/daily");
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

export const fetchStateData = async () => {
	try {
		const { data } = await axios.get(
			"https://api.covidindiatracker.com/state_data.json"
		);

		return data.map((name) => name.state);
	} catch (error) {
		console.log(error);
	}
};
