import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import footerAdorment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: '100%',
		position: 'fixed',
		bottom: '0',
		zIndex: 1302
	},
	adornment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '21em'
		},
		[theme.breakpoints.down('sm')]: {
			width: '15em'
		}
	},
	mainContainer: {
		position: 'absolute'
	},
	link: {
		fontSize: '0.75rem',
		fontFamily: 'Arial',
		color: 'white',
		fontWeight: 'bold'
	}
}));

const Footer = () => {
	const classes = useStyles();

	//TODO: Refactor grid system to map out a dataset

	return (
		<footer className={classes.footer}>
			<div>
				<Grid container justifyContent='center' className={classes.mainContainer}>
					<Grid item>
						<Grid container direction='column'>
							<Grid item className={classes.link}>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction='column'>
							<Grid item className={classes.link}>
								Services
							</Grid>
							<Grid item className={classes.link}>
								Custom Software Development
							</Grid>
							<Grid item className={classes.link}>
								Mobile App Development
							</Grid>
							<Grid item className={classes.link}>
								Website Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction='column'>
							<Grid item className={classes.link}>
								The Revolution
							</Grid>
							<Grid item className={classes.link}>
								Vision
							</Grid>
							<Grid item className={classes.link}>
								Technology
							</Grid>
							<Grid item className={classes.link}>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction='column'>
							<Grid item className={classes.link}>
								About Us
							</Grid>
							<Grid item className={classes.link}>
								History
							</Grid>
							<Grid item className={classes.link}>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction='column'>
							<Grid item className={classes.link}>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<img src={footerAdorment} alt='Big black slash' className={classes.adornment} />
			</div>
		</footer>
	);
};

export default Footer;
