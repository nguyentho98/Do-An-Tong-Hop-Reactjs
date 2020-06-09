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
    formGroup:{
        flexDirection: 'row',
        marginTop:20,
        marginBottom:15,
    },
    inputLabel:{
        width: 180,
        maxWidth: '100%',
        fontWeight: 700,
        color:'black',
        lineHeight: 1.5
    },
    text_info_detail:{
        fontWeight: 700,
        marginLeft: '10px',
        minWidth:' 245px',
    },
    text_info_detail_1:{
        marginLeft: '10px',
        fontStyle:'italic'
    },
    input:{
        marginLeft: '10px',
        border: '1px solid #eee',
        padding: '3px 10px',
        width:' 300px',
        color:' #000',
        height: '34px',
    },
    list_title_01:{
        display:'flex',
        marginLeft: '10px',
    },
    buttonXacNhan:{
        marginLeft: '10px',
        backgroundColor: '#21beff',
        color:'white',
        textTransform: 'none',
    },
}));
export default useStyles