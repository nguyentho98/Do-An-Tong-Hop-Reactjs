import {fade,makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  
    top_header: {
        backgroundColor: '#1c1c1c',
        color: '#ffffff' 
    },
    container_top_header:{
        opacity: 0.7,
        padding:0,
    }, 
    text_right:{
        padding: '5px 0',
        float: 'right'
    },
    slide_new:{
        padding: '5px 0',
        position: 'relative',
        float: 'left',
        display: 'inline-flex',
    },
    clear:{
        clear: 'both'
    },
    home_page:{
        backgroundColor: '#232323',
        
    },
    header_container:{
        display: 'flex',
        padding:0,
    },
    logo:{
      alignSelf:'center',
    },
    logo_name:{
        color: '#ffffff',
        fontSize: '21px',
        padding: '10px 0',
        marginRight: '80px',
    },
    search_form:{ 
      width: '100%',
      maxWidth: '422px',
    },
    rootSearchIcon:{
      color:'white',
    },
    search: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px auto',  
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white,255),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white,255),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:'#279cff',
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '3px',
      },
      inputRoot: {
        color: 'inherit',
        width:'100%',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    header_btn:{
        marginLeft: 'auto',
        display: 'flex',
    },
    header_btn_1:{
        display:'flex',
        color:'white',
        alignSelf:'center',
        marginRight:'20px',
    },
    header_btn_2:{
      display:'flex',
      color:'white',
      border:'1px solid',
      textAlign:'center',
      alignSelf:'center',
      cursor:'pointer',
      padding:'10px 10px',
      '&:hover':{
        carts:{
          display:'block',
        }
      }
    },
    header_btn_2_text:{
      margin: '0 10px',
    },
    header_btn_2_quantity:{
      backgroundColor: '#ffba27',
      padding: '2px 5px',
      color: '#1c1c1c !important',
      borderRadius: '3px',
      fontWeight: 'bold',
      marginRight: '2px',
    },
    carts:{
      position: 'absolute',
      top:65,
      right: 0,
      zIndex: 999,
      width: 315,
      backgroundColor: 'red',
      height: 100,
      display:'none',
    }

   
}));
export default useStyles