import { createTheme } from '@mui/material/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#FFA000';

export default createTheme({
	palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`
		},
		primary: {
			main: `${arcBlue}`
		},
		secondary: {
			main: `${arcOrange}`
		}
	},
	typography: {
		tab: {
			fontFamily: 'Raleway !important',
			fontWeight: '700 !important',
			textTransform: 'none !important',
			fontSize: '1rem !important',
			color: 'white !important'
		},
		estimate: {
			fontFamily: 'Pacifico !important',
			fontSize: '1rem !important',
			textTransform: 'none !important',
			color: 'white !important'
		}
	}
});
