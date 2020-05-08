import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    container_footer_top:{
        padding:0,
    },
    footer_top:{
        padding: '35px 0px !important',
    },
    footer_top_item:{
        display:'flex',
    },
    item_text:{
        marginLeft:20,
    },
    item_text_1:{
        fontSize: '13px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: "'Roboto Condensed', sans-serif",
    },
    item_text_2:{
        fontSize: '13px',
        fontFamily: "'Roboto Condensed', sans-serif",
    },
    text:{
        fontFamily: "'Roboto Condensed', sans-serif",
        fontSize: '15px',
        textDecoration:'none',
        color: 'black',
        '&:hover':{
            textDecoration:'none',
        }
    },
    text_titile:{
        textTransform: 'uppercase',
        fontSize: '16px',
        fontFamily: "'Roboto-Condensed-Bold'",
        color: '#000',
        fontWeight:'bold'
    },
}));
export default useStyles