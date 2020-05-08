import {fade,makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  
    top_header: {
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 9999
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
        position: 'fixed',
        width: '100%',
        top: 30,
        zIndex: 9999,  
    },
    header_container:{
        display: 'flex',
        padding:0,
    },
    imglogo:{
      borderRadius:0,
      backgroundColor:'#232323',
      marginRight:'10px'
    },
    divlogo:{
      alignSelf:'center',
      display:"flex",
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
      textAlign:'center',
      alignSelf:'center',
      cursor:'pointer',
      
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
    },
    user:{
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor:'pointer'
    },
    imguser:{
      height:28,
      width:28,
      marginRight:5
    },
    linkhotro:{
      color:'white',
      '&:hover':{
        color:'white',
        textDecoration:'none',
      }
    },
    btnuser:{
      backgroundColor:'inherit',
      borderColor:'white !important',
     
      '&:hover':{
        backgroundColor:'inherit',
      },
      '&:active':{
        backgroundColor:'#232323 !important',
        borderColor:'white !important',
      },
      '&:focus': {
        boxShadow: 'none !important',
      },
    },
    btncart:{
      backgroundColor:'inherit',
      display:'flex',
      padding:10,
      borderColor:'white !important',
      '&:hover':{
        backgroundColor:'inherit',
      },
      '&:active':{
        backgroundColor:'#232323 !important',
        borderColor:'white !important',
      },
      '&:focus': {
        boxShadow: 'none !important',
      },
    },
    d_inline_block:{
      alignSelf: 'center',
    },
    dropdownMenuUser:{
      width: '280px !important',
      right: '0 !important',
      left: 'auto !important',
      paddingTop:15,
      paddingBottom:0,
      margin: '0px 0 0 !important',
      '&::before':{
        content: '""',
        position: 'absolute',
        right: '11px',
        top: -10,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth:' 0 10px 10px 10px',
        borderColor: 'transparent transparent white transparent',
        zIndex: 9999.
      }
    },
    btnnaptien:{
      marginLeft:'auto',
      padding:'4px 8px',
      borderRadius:3,
      backgroundImage: 'linear-gradient(to right, #5db8ec 0%, #2584e4 51%) !important',
      color:'black',
      '&:hover':{
        textDecoration:'none',
        color:'black'
      }
    },
    dropdownMenuCart:{
      right: '0 !important',
      left: 'auto !important',
      margin: '0px 0 0 !important',
      width: '360px !important',
      '&::before':{
        content: '""',
        position: 'absolute',
        right: '11px',
        top: -10,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth:' 0 10px 10px 10px',
        borderColor: 'transparent transparent white transparent',
        zIndex: 9999.
      }
    },
    dropdownItemUser:{
      backgroundColor:'#f5f5f5',
      height:45,
      '&:hover':{
        textDecoration:'none',
        color:'black',
        backgroundColor:'#f5f5f5',
      }
    },
    linkItem:{
      color:'black',
      '&:hover':{
        textDecoration:'none',
        color:'black',
        backgroundColor:'#f5f5f5',
      }
    },

    animatedItem: {
      height: 25,
      width: 350,
    
      overflow: 'hidden',
      position: 'relative',
      
    },
    sub_marquee:{
      display: 'block',
      width: '200%',
      height: '30px',
    
      position: 'absolute',
      overflow: 'hidden',
      animation: `$myEffect 8000ms linear infinite`
    },
    marquee_text:{
      float: 'left',
      width: '50%',
    },
    "@keyframes myEffect": {
      "0%" :{ left: 0 },
      "100%": { left: '-100%' }
    },
    logo_linkname:{
      color:'white',
      '&:hover':{
          color:'white',
          textDecoration:'none',
      }
    }

   
}));
export default useStyles