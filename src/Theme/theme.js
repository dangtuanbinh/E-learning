import {createMuiTheme} from '@material-ui/core'; 

const theme = createMuiTheme({
    palette:{
        primary:{
            light: '#7986cb',
            main: '#3f51b5',
            dark:'#303f9f',
        },
        secondary:{
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162', 
        },
        background:{},
        text:{
           
        },
    },

    typography:{
        h1: {
            fontSize: 60,
            fontWeight: 700,
        },
        h2: {
            fontSize: 30,
            fontWeight: 400,
        },
        h3: {},
        h4: {},
        h5: {},
        h6: {
            fontSize: 20,
            fontWeight: 400,
        },
        subtitle1: {

        },
        subtitle2: {

        },
        body1: {},
        body2: {},
    },
    breakpoints:{},
    spacing: 10,
    shape: {
        borderRadius: 4,
    }
});

export default theme;