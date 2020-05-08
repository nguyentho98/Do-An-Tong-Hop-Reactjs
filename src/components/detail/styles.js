import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{

    },
    container_detail:{
        padding:0,
    },
    icon:{
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    container_title_detail_product:{
        marginTop: 10,
        marginBottom: 10,
    },
    title_detail_product:{
        fontSize: 30,
        color: '#000',
        margin: 0,
        display: 'inline-block',
        fontWeight:'bold',
    },
    info_detail:{
        backgroundColor: '#fff',
        padding: '23px 25px',
        width: '100%',
        border: '1px solid #eee',
        borderRadius: 4,
    },
    info_detail_item:{
        display: 'inline-flex',
    },
    div_icon_img:{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:7
    },
    icon_img:{
        width: 20,
        height:'auto',
        borderRadius:'0px',
    },
    btn_add:{
        minWidth: 35,
    },
    btn_remove:{
        minWidth: 35,
    },
    text_soluong:{
        border: '1px solid #ddd',
        padding: '7px',
        borderRadius: '4px',
        marginLeft: '3px',
        marginRight: '3px',
    },
    text_wrap1:{
        fontWeight:'bold',
    },
    price_text:{
        color: '#919191',
        textTransform: 'uppercase',
        fontSize: 12,
        marginBottom: 5,
        marginTop:13,
        fontWeight:'bold'
    },
    price:{
        fontSize: 24,
        fontWeight:'bold' 
    },
    quantity_text:{
        fontWeight:'bold'  ,
        fontSize: 12,
        marginBottom:10,
    },
    buttonMuaNgay:{
        backgroundColor: '#29b474',
        color:'white',
        textTransform: 'none',
        marginRight:10,
        marginLeft:10,
    },
    buttonADD:{
        backgroundColor: '#ffb517',
        color:'white',
        textTransform: 'none',
    },
    chitietsanpham:{
        fontSize: 20,
        color: '#000',
        margin: 0,
        display: 'inline-block',
        fontWeight:'bold',
    },
    btn_muangay:{
        '&:hover': {
            // backgroundColor:'#21beff',
            color:'white',
            textDecoration:'none'
        },
    }
}));
export default useStyles