import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchState } from "../../api";

import styles from "./StatePicker.module.css";

const StatePicker = ({ handleStateChange }) => {
	const [state, setState] = React.useState([]);

	React.useEffect(() => {
		const fetchStateAPI = async () => {
			setState(await fetchState());
		};
		fetchStateAPI();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleStateChange(e.target.value)}
			>
				{state.map((state, index) => (
					<option key={index} value={state}>
						{state}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default StatePicker;
