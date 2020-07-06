import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchStateData } from "../../api";

import styles from "./StatePicker.module.css";

const StatePicker = ({ handleStateChange }) => {
	const [fetchedState, setFetchedState] = React.useState([]);

	React.useEffect(() => {
		const fetchStateAPI = async () => {
			setFetchedState(await fetchStateData());
		};
		fetchStateAPI();
	}, [setFetchedState]);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleStateChange(e.target.value)}
			>
				<option value="">Select State</option>
				{fetchedState.map((state, index) => (
					<option key={index} value={state}>
						{state}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default StatePicker;
