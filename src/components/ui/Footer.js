import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import footerAdorment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
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
	},
	icon: {
		height: '2.5em',
		width: '2.5em',
		marginRight: '1em !important'
	},
	iconContainer: {
		position: 'absolute',
		marginTop: '-6em'
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
				<Hidden lgDown>
					<Grid container justifyContent='center' className={classes.mainContainer}>
						<Grid item className={classes.gridItem}>
							<Grid container direction='column' spacing={2}>
								<Grid item component={Link} to='/' onClick={() => setValue(0)} className={classes.link}>
									Home
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={classes.gridItem}>
							<Grid container direction='column' spacing={2}>
								<Grid
									item
									component={Link}
									to='/services'
									onClick={() => {
										setValue(1);
										setSelectedIndex(0);
									}}
									className={classes.link}
								>
									Services
								</Grid>
								<Grid
									item
									component={Link}
									to='/customsoftware'
									onClick={() => {
										setValue(1);
										setSelectedIndex(1);
									}}
									className={classes.link}
								>
									Custom Software Development
								</Grid>
								<Grid
									item
									component={Link}
									to='/mobileapps'
									onClick={() => {
										setValue(1);
										setSelectedIndex(2);
									}}
									className={classes.link}
								>
									Mobile App Development
								</Grid>
								<Grid
									item
									component={Link}
									to='/websites'
									onClick={() => {
										setValue(1);
										setSelectedIndex(3);
									}}
									className={classes.link}
								>
									Website Development
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={classes.gridItem}>
							<Grid container direction='column' spacing={2}>
								<Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}>
									The Revolution
								</Grid>
								<Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}>
									Vision
								</Grid>
								<Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}>
									Technology
								</Grid>
								<Grid item component={Link} to='/revolution' onClick={() => setValue(2)} className={classes.link}>
									Process
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={classes.gridItem}>
							<Grid container direction='column' spacing={2}>
								<Grid item component={Link} to='/about' component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}>
									About Us
								</Grid>
								<Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}>
									History
								</Grid>
								<Grid item component={Link} to='/about' onClick={() => setValue(3)} className={classes.link}>
									Team
								</Grid>
							</Grid>
						</Grid>
						<Grid item className={classes.gridItem}>
							<Grid container direction='column' spacing={2}>
								<Grid item component={Link} to='/contact' onClick={() => setValue(4)} className={classes.link}>
									Contact Us
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>

				<img src={footerAdorment} alt='Big black slash' className={classes.adornment} />

				<Grid container justifyContent='flex-end' className={classes.iconContainer}>
					<Grid item component={'a'} href='https://www.facebook.com' className={classes.icon}>
						<img src={facebook} alt='Facebook' />
					</Grid>
					<Grid item component={'a'} href='https://www.twitter.com' className={classes.icon}>
						<img src={twitter} alt='twitter' />
					</Grid>
					<Grid item component={'a'} href='https://www.instagram.com' className={classes.icon}>
						<img src={instagram} alt='instagram' />
					</Grid>
				</Grid>
			</div>
		</footer>
	);
};

export default Footer;
