import React from "react";

import styles from "./List.module.css";

import CountUp from "react-countup";

const List = ({
	state: { confirmed, active, recovered, deaths, state, lastUpdate },
}) => {
	if (!confirmed) {
		return <h2 className={styles.text}>Select State</h2>;
	}

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr>
						<th scope="col">Location</th>
						<th scope="col">Confirmed</th>
						<th scope="col">Active</th>
						<th scope="col">Recovered</th>
						<th scope="col">Death</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{state}</th>
						<td>
							<CountUp
								start={0}
								end={parseInt(confirmed)}
								duration={2.5}
								separator=","
							/>
						</td>
						<td>
							<CountUp
								start={0}
								end={parseInt(active)}
								duration={2.5}
								separator=","
							/>
						</td>
						<td>
							<CountUp
								start={0}
								end={parseInt(recovered)}
								duration={2.5}
								separator=","
							/>
						</td>
						<td>
							<CountUp
								start={0}
								end={parseInt(deaths)}
								duration={2.5}
								separator=","
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default List;
