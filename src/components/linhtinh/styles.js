import {makeStyles } from '@material-ui/core';
import anh from '../../utils/images/banner.png';
const useStyles = makeStyles(theme => ({
    root:{
        width: "100%", 
        padding: '40px 0 100px 0',
        backgroundImage: "url(" +  anh + ")",
        color:'white',
        textAlign:'center',
        marginBottom:20,
        marginTop:30,
    },
    container_linhtinh:{
        padding:0,
    },
    text_1:{
        
    },
    line_high:{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        fontFamily: "'Roboto-Condensed-Bold'",
       
        paddingTop: '5px',
        marginBottom: '30px',
        "&::after": {
            borderTop: '1px solid #eee',
            content: '""',
            margin: '0 auto',
            position:'absolute',
            top: 'calc(50% + 3px)',
            bottom: 0,
            width: 'calc(50% - 80px)',
            zIndex: -1,
            left:0,
        },
        "&::before":{
            borderTop: '1px solid #eee',
            content: '""',
            margin: '0 auto',
            position:'absolute',
            top: 'calc(50% + 3px)',
            bottom: 0,
            width: 'calc(50% - 80px)',
            zIndex: -1,
            right: 0,
        },
        
    },
    btn:{
        width: '120px',
        borderRadius: '4px',
        margin: '20px auto',
        border: '1px solid #21beff',
        padding: '8px 8px',
        cursor: 'pointer',
        textDecoration:'none',
        fontWeight:'bold',
        color:'white',
        backgroundColor: '#21beff',
        marginTop:20,
        marginBottom:20,
        '&:hover': {
            backgroundColor: 'white',
            color:'#21beff',
        },
    },
   
}));
export default useStyles