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
    },
    btn_menu:{
        display:'flex',
        backgroundColor: 'transparent',
        color: '#000',
        width: '24%',
        padding:5,
        cursor: 'pointer',
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
    bar_btn:{
        display:'flex',
        padding:5,
        cursor: 'pointer',
        justifyContent: 'center',
        width:'100%',
        alignItems: 'center',
        backgroundColor:'black',
        borderColor:'black !important',
        '&:hover':{
            backgroundColor:'black',
        },
        '&:active':{
          backgroundColor:'#232323 !important',
          borderColor:'white !important',
        },
        '&:focus': {
          boxShadow: 'none !important',
        },
      },
      dropdownMenuCart:{
          padding:0,
          width:'100%',
      }
       
}));
export default useStyles
