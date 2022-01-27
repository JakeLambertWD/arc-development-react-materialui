import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import footerAdorment from '../../assets/Footer Adornment.svg';
import { useRecoilState } from 'recoil';
import { valueState, selectedIndexState } from '../../atoms/stateAtoms';

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
		fontWeight: 'bold',
		textDecoration: 'none'
	},
	gridItem: {
		margin: '5em !important'
	}
}));

const Footer = () => {
	const classes = useStyles();
	const [value, setValue] = useRecoilState(valueState); // index of nav item
	const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState); // index of nav submenu item

	//TODO: Refactor grid system to map out a dataset
	//! This is an alert
	//? This is a query

	return (
		<footer className={classes.footer}>
			<div>
				<Grid container justifyContent='center' className={classes.mainContainer}>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid item component={Link} to='/' className={classes.link}>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid item component={Link} to='/services' className={classes.link}>
								Services
							</Grid>
							<Grid item component={Link} to='/customsoftware' className={classes.link}>
								Custom Software Development
							</Grid>
							<Grid item component={Link} to='/mobileapps' className={classes.link}>
								Mobile App Development
							</Grid>
							<Grid item component={Link} to='/websites' className={classes.link}>
								Website Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid item component={Link} to='/revolution' className={classes.link}>
								The Revolution
							</Grid>
							<Grid item component={Link} to='/revolution' className={classes.link}>
								Vision
							</Grid>
							<Grid item component={Link} to='/revolution' className={classes.link}>
								Technology
							</Grid>
							<Grid item component={Link} to='/revolution' className={classes.link}>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid item component={Link} to='/about' component={Link} to='/about' className={classes.link}>
								About Us
							</Grid>
							<Grid item component={Link} to='/about' className={classes.link}>
								History
							</Grid>
							<Grid item component={Link} to='/about' className={classes.link}>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
							<Grid item component={Link} to='/contact' className={classes.link}>
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
