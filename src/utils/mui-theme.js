import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const MuiTheme = createMuiTheme({
    typography: {
        fontSize:12.5,
        fontFamily: "'Roboto Condensed', sans-serif",
    },
    root:{
        backgroundColor: '#f7f7f7',
    },
    overrides: {
        MuiContainer:{
            root:{

            },
            maxWidthMd:{
                maxWidth:'1000px !important'
            }
        },
       
        MuiOutlinedInput: {
            input: {
                padding:'11px 14px'
            },
        }
    }
         
});

export default MuiTheme;