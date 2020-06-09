import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{

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
        alignItems: 'center'
    },
    inputLabel:{
        width: 180,
        maxWidth: '100%',
        fontWeight: 700,
        color:'black',
        lineHeight: 1.5,
        marginBottom:0,
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
    inputRoot:{
        border: '1px solid #ddd',
        borderRadius:3
    },
    inputInput:{
        padding: '6px 15px 7px'
    },
    buttonXacNhan:{
        backgroundColor: '#29b474',
        color:'white',
        textTransform: 'none',
    },
    buttonGuiLai:{
        color:'29b474',
        textTransform: 'none',
        marginLeft:10
    },
    buttonContainerGuiLai:{
        '&:hover':{
            boxShadow: 'none',
            backgroundColor: '#29b474',
        }
    },
    buttonContainerXacNhan:{
        '&:hover':{
            boxShadow: 'none',
            backgroundColor: '#29b474',
        }
    },
    buttonSave:{
        backgroundColor: '#21beff',
        color:'white',
        textTransform: 'none',
    },
    buttonCancel:{
        // backgroundColor: '#ffb517',
        // color:'white',
        textTransform: 'none',
        marginLeft:20,
    },
    input:{
        marginLeft: '10px',
        border: '1px solid #eee',
        padding: '3px 10px',
        width:' 300px',
        color:' #000',
        height: '34px',
    },
}));
export default useStyles