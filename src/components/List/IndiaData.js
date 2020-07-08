import React from "react";
import { Typography, Grid } from "@material-ui/core";

import styles from "./IndiaData.module.css";

const IndiaData = ({ data1: { confirmed, active, recovered, deaths } }) => {
	return (
		<div className={styles.indiaData}>
			<p className={styles.mainText}>Total Cases In India</p>
			<Grid container spacing={4} justify="center">
				<Grid item xs={3} md={3}>
					<Typography color="textSecondary" gutterBottom>
						Confirmed
					</Typography>
					<Typography className={styles.text} variant="h5">
						{Math.abs(confirmed) > 999
							? (Math.abs(confirmed) / 1000).toFixed(1) + "k"
							: Math.sign(confirmed) * Math.abs(confirmed)}
					</Typography>
				</Grid>
				<Grid item xs={3} md={3}>
					<Typography color="textSecondary" gutterBottom>
						Active
					</Typography>
					<Typography className={styles.text} variant="h5">
						{Math.abs(active) > 999
							? (Math.abs(active) / 1000).toFixed(1) + "k"
							: Math.sign(active) * Math.abs(active)}
					</Typography>
				</Grid>
				<Grid item xs={3} md={3}>
					<Typography color="textSecondary" gutterBottom>
						Recovered
					</Typography>
					<Typography className={styles.text} variant="h5">
						{Math.abs(recovered) > 999
							? (Math.abs(recovered) / 1000).toFixed(1) + "k"
							: Math.sign(recovered) * Math.abs(recovered)}
					</Typography>
				</Grid>
				<Grid item xs={3} md={3}>
					<Typography color="textSecondary" gutterBottom>
						Deaths
					</Typography>
					<Typography className={styles.text} variant="h5">
						{Math.abs(deaths) > 999
							? (Math.abs(deaths) / 1000).toFixed(1) + "k"
							: Math.sign(deaths) * Math.abs(deaths)}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default IndiaData;
