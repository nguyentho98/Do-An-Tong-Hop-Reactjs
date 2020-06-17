import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{
        marginTop:15
    },
    title:{
        fontWeight:700,
        fontSize: 16,
        textTransform: 'uppercase',
    },
    table: {
        minWidth: 700,
    },
    containerTable:{
        overflow:'unset'
    },
    buttonADD:{
        backgroundColor: '#21beff',
        color:'white',
        padding:' 6px 10px',
        textTransform: 'none',
        minWidth:0,
    },
    buttonDelete:{
        backgroundColor: '#e47a77',
        color:'white',
        padding: '6px 10px',
        marginLeft:5,
        textTransform: 'none',
        minWidth:0,
    },
    image:{
        width:'110px',
        borderRadius:'2%',
        height:'60px',
    },
}));
export default useStyles