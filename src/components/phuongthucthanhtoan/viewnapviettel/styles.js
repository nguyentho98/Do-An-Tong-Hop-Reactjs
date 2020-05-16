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
        color:'white',
        textAlign:'center',
        fontSize:13,
        padding: '8px',
        width: '50%',
        margin: 'auto',
       
        marginTop:' 21px',
        cursor: 'pointer',
        '&:hover':{
            color:'#279cff',
            background:'white',
            border:'1px solid #279cff'
        }
    },
    inputLabel:{
        marginTop:14,
        fontWeight: 700,
        color:'black',
    },
    inputSelect:{
        width:' 100%',
    },
    input:{
        padding:0
    }
    
}));
export default useStyles