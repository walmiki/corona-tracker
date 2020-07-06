import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, active, recovered, deaths } }) => {
	if (!confirmed) {
		return "Loading...";
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					component={Card}
					xs={12}
					md={4}
					className={cx(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={confirmed} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">
							{new Date().toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of confirmed cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={4}
					className={cx(styles.card, styles.active)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Active
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={active} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">
							{new Date().toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={4}
					className={cx(styles.card, styles.recovered)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={recovered} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">
							{new Date().toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of Recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={4}
					className={cx(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={deaths} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">
							{new Date().toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of Death cases caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
