import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        width:'100%',
    },
    btn_title_text:{
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '3px',
        borderBottomLeftRadius: '3px',
        background:'#279cff',
        textDecoration:'none',
        color:'white',
        fontSize:13,
        marginLeft:'auto',
        padding: '8px',
        '&:hover':{
            color:'#279cff',
            textDecoration:'none',
            background:'white',
            border:'1px solid #279cff'
        }
    },
    inputRoot:{
        border: '1px solid #ddd',
        borderRadius:3
    },
    inputInput:{
        padding: '6px 15px 7px'
    },
}));
export default useStyles