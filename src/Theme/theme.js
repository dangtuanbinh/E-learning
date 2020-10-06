import {createMuiTheme} from '@material-ui/core'; 

const theme = createMuiTheme({
    palette:{
        primary:{
            light: 'pink',
            main: '#f38b9c',
            dark:'#f3556f'
        },
        secondary:{
            main: "#19a8e6",
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
    spacin: 10,
});

export default theme;