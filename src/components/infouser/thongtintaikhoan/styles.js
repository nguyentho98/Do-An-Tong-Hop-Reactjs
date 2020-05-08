import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{

    },
    title:{
        fontWeight:'bold',
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
        fontWeight: 'bold',
        marginLeft: '10px',
        minWidth:' 245px',
    },
    text_info_detail_1:{
        marginLeft: '10px',
        fontStyle:'italic'
    }
}));
export default useStyles