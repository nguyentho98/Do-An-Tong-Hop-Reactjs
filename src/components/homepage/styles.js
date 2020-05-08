import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop:'5px',
        backgroundColor: '#f7f7f7'
    },
    home_page_banner:{
        backgroundColor: '#f7f7f7',
        color: '#000',
        justifyContent: 'space-between',
        display: 'flex',
        marginTop:10,
        flex: '1 100%',
        padding:0,
    },
    menu_left:{
        maxWidth: '172px',
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        marginRight: '15px',
    },
    list_menu:{
        background:'white',
        marginTop:10,
        padding:0,
    },
    bar_btn:{
        display: 'flex',
        textAlign: 'center',
        cursor:'pointer',
        backgroundColor: '#000',
        color: '#fff',
        fontSize:13,
        width: '100%',
        height: 'auto',
        padding: '5px 0px',
        borderRadius: '4px',
        border: 'thin solid #000',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
   
    list_item:{
        padding:'9px 0px' ,
        '&:hover':{
            backgroundColor:'white',
        }
        
    },
    list_item_icon:{
        minWidth: '30px',
        justifyContent: 'center',
        color:'black',
    },
    btn:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom:10,
    },
    btn_menu:{
        display:'flex',
        backgroundColor: 'transparent',
        color: '#000',
        cursor: 'pointer',
        width: '24%',
        height: 'auto',
        border: 'thin solid #000',
        borderRadius: '4px',
        flexFlow: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover':{
            textDecoration:'none',
            color:'black'
        }
       
    },
    menu_right_slideshow:{
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
    },
    image_1:{
        width:'100%',
        borderRadius:'2%',
        height:'150px',
    },
    image_2:{
        width:'100%',
        borderRadius:'2%',
        height:'165px',
    },
    bar_btn_text:{
        marginLeft:5
    }
    
    
   
}));
export default useStyles
