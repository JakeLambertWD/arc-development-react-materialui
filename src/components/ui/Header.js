import React, { useState, useEffect } from 'react';
import {
	AppBar,
	Toolbar,
	useScrollTrigger,
	Tabs,
	Tab,
	Button,
	Menu,
	MenuItem,
	useMediaQuery,
	SwipeableDrawer,
	IconButton,
	List,
	ListItem,
	ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

// Elevated AppBar function
function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

// Custom classes
const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em'
	},
	logo: {
		height: '8em',
		// material ui syntax replacing media quiries
		[theme.breakpoints.down('md')]: {
			height: '7em'
		},
		[theme.breakpoints.down('xs')]: {
			height: '5.5em'
		}
	},
	buttonContainer: {
		padding: '0 !important'
	},
	tab: {
		...theme.typography.tab,
		minWidth: '10 !important',
		marginLeft: '25px !important'
	},
	tabsContainer: {
		marginLeft: 'auto !important'
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px !important',
		marginLeft: '50px !important',
		marginRight: '50px !important',
		height: '45px !important'
	},
	menu: {
		backgroundColor: `${theme.palette.common.blue} !important`,
		color: 'white !important',
		borderRadius: '0px !important'
	},
	menuItem: {
		opacity: '0.7 !important',
		'&:hover': {
			opacity: '1 !important'
		},
		'&:focus': {
			opacity: '1 !important'
		}
	},
	drawerIconContainer: {
		marginLeft: 'auto !important'
	},
	drawerIcon: {
		width: '40px !important',
		height: '40px !important',
		color: 'white !important'
	},
	drawer: {
		backgroundColor: `${theme.palette.common.blue} !important`
	},
	drawerItem: {
		...theme.typography.tab,
		color: 'white !important'
	},
	drawerItemEstimate: {
		backgroundColor: `${theme.palette.common.orange} !important`
	},
	appBar: {
		zIndex: `${theme.zIndex.modal + 1} !important`
	}
}));

const Header = () => {
	const classes = useStyles();
	const theme = useTheme();
	const smallScreens = useMediaQuery(theme.breakpoints.down('lg')); // any breakpoints below md will return true
	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent); // checked whether the device is IOS

	const [value, setValue] = useState(0); // index of nav item
	const [selectedIndex, setSelectedIndex] = useState(0); // index of nav submenu item
	const [openDrawer, setOpenDrawer] = useState(false); // open drawer
	const [openSubmenu, setOpenSubmenu] = useState(false); // open submenu
	const [anchorEl, setAnchorEl] = useState(null); // nav item target

	const handleChange = (event, newValue) => {
		setValue(newValue); // render selected page
	};

	const handleClick = e => {
		setAnchorEl(e.currentTarget); // identify current (navbar item) target
		setOpenSubmenu(true); // open submenu
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null); // remove current (navbar item) target
		setOpenSubmenu(false);
		setSelectedIndex(i);
	};

	const handleClose = e => {
		setAnchorEl(null); // remove current (navbar item) target
		setOpenSubmenu(false); // close submenu
	};

	// nav items data
	const routes = [
		{ name: 'Home', link: '/', activeIndex: 0 },
		{ name: 'Services', link: '/services', activeIndex: 1, onMouseOver: e => handleClick(e) },
		{ name: 'Revolution', link: '/revolution', activeIndex: 2 },
		{ name: 'About Us', link: '/about', activeIndex: 3 },
		{ name: 'Contact Us', link: '/contact', activeIndex: 4 }
	];

	// nav submenu items data
	const submenuOptions = [
		{ name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
		{ name: 'Custom Software Development', link: '/customservices', activeIndex: 1, selectedIndex: 1 },
		{ name: 'Mobile App Development', link: '/mobileapp', activeIndex: 1, selectedIndex: 2 },
		{ name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 3 }
	];

	// set the active tab dependant on the URL pathname (for page refresh's)
	useEffect(() => {
		// spread operator to merge 2 arrays into 1
		[...submenuOptions, ...routes].forEach(route => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex);
						if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
							setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				default:
					break;
			}
		});
	}, [value, selectedIndex, routes, submenuOptions]);

	// JSX
	const navigationBarItems = (
		<>
			{/* navmenu */}
			<Tabs value={value} onChange={handleChange} className={classes.tabsContainer} indicatorColor='secondary'>
				{routes.map((route, i) => (
					<Tab key={i} className={classes.tab} component={Link} to={route.link} label={route.name} onMouseOver={route.onMouseOver} />
				))}
			</Tabs>
			<Button variant='contained' color='secondary' className={classes.button}>
				Free Estimate
			</Button>

			{/* submenu */}
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				open={openSubmenu}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				classes={{ paper: classes.menu }}
				style={{ zIndex: 1302 }}
				elevation={0}
			>
				{submenuOptions.map((option, i) => (
					<MenuItem
						key={i}
						onClick={e => {
							handleMenuItemClick(e, i);
							setValue(1); // set active menu item
							handleClose();
						}}
						selected={selectedIndex === i && value === 1} // set active submenu item
						component={Link}
						to={option.link}
						classes={{ root: classes.menuItem }}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</>
	);

	const drawer = (
		<>
			{/* both disable props are used for optimal usability */}
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<div className={classes.toolbarMargin} />
				<List disablePadding>
					{routes.map(route => (
						<ListItem
							key={route.activeIndex}
							onClick={() => {
								setOpenDrawer(false);
								setValue(route.activeIndex);
							}}
							selected={value === route.activeIndex}
							divider
							button
							component={Link}
							to={route.link}
						>
							<ListItemText className={classes.drawerItem} disableTypography>
								{route.name}
							</ListItemText>
						</ListItem>
					))}

					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(5);
						}}
						divider
						button
						component={Link}
						className={classes.drawerItemEstimate}
						to='/estimate'
						selected={value === 5}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</>
	);

	return (
		<>
			<ElevationScroll>
				<AppBar className={classes.appBar}>
					<Toolbar position='fixed' disableGutters>
						<Button component={Link} to='/' onClick={() => setValue(0)} className={classes.buttonContainer} disableRipple>
							<img className={classes.logo} src={logo} alt='Company Logo' />
						</Button>
						{smallScreens ? drawer : navigationBarItems}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			{/* Add a margin below the Toolbar */}
			<div className={classes.toolbarMargin} />
		</>
	);
};

export default Header;
