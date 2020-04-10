import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    container_product:{
        padding:0,
    },
    card_root: {
        maxWidth: 345,
    },
    img:{
        objectFit:'fill',
        height: 'auto',
    },
    text_name:{
        textTransform: 'unset',
        color: '#000',
        marginBottom: '10px',
        textAlign: 'center',
        minHeight: '42px',
        maxHeight: '42px',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Roboto-Condensed-Bold'",
        fontSize: '15px',
        fontWeight:'bold'
    },
    text_price:{
        fontFamily: "'Roboto-Condensed-Bold'",
        fontSize: '15px',
        fontWeight:'bold',
        textAlign: 'center',
    
    },
    grid_cart:{
      display:'grid',  
      padding:'0px 0 20px 0',
    },
    btn_iconcart:{
        margin:'0 auto',
        cursor:'pointer',
        color:'#b5b5b5',
    },
    btn_cart:{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#21beff',
        border: '1px solid #21beff',
        borderRadius: '3px',
        padding: '5px 13px',
        width: 'fit-content',
        textAlign: 'center',
        margin: '10px auto 0',
        fontSize: '12px',
        fontFamily: "'Roboto-Condensed-Bold'",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor:'#21beff',
            color:'white',
        },
    },
    duongke:{
        marginTop: '20px',
        marginBottom: '20px',
        border: '0px',
        borderTop: '1px solid #eee',
    },
    list_title:{
        marginTop:15,
        marginBottom:20,
    },
    title:{
        fontWeight:'bold'
    },
    text_load_sp:{
        paddingTop:40,
        paddingBottom:15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#21beff',
        cursor: 'pointer',
        border: 'unset',
        fontWeight:'bold',
    },
   
}));
export default useStyles