import {fade,makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    container_carts:{
        padding:0,
        marginTop:5,
    },
    duongke:{
        marginTop: '20px',
        marginBottom: '20px',
        border: '0px',
        borderTop: '1px solid #eee',
    },
    list_title:{
        display:'flex',
        alignItems: 'center',
    },
    btn_title_text:{
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        background:'#279cff',
        textDecoration:'none',
        color:'white',
        fontSize:13,
        marginLeft:'auto',
        padding: '10px',
    },
    title_text:{
        marginLeft:'auto',
    },
    title:{
        fontWeight:'bold',
    },
    thanhtoan_container:{
        backgroundColor: '#fff',
        padding: '35px 40px',
        marginBottom: '20px',
        border: '1px solid #eee',
        borderRadius: '4px',
    },
    image:{
        width:'96%',
        borderRadius:'2%',
        height:'100px',
    },
    thanhtoan_carts:{
        "&::before":{
            content: '""',
            borderTop: '1px solid #dddddd',
            margin: '0 auto',
            width: 'calc(100% - 532px)',
            position:'absolute',
           
        },
    },
    thanhtoan_carts_item:{
        borderBottom: '1px solid #dddddd',
        borderRight: '1px solid #dddddd',
        borderLeft: '1px solid #dddddd',
        padding: '20px',
    },
    thanhtoan_action_left:{
        borderRadius: '4px',
      
    },
    thanhtoan_action:{
        marginTop:30,
        flexGrow:1,
    },
    thanhtoan_action_right:{
        borderRadius: '4px',
       
    },
    div_title:{
        
        padding: '10px 0px 10px 14px',
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        backgroundColor: '#f5f5f5',
        borderColor: '#ddd',
    },
    title_text_02:{
        fontSize: '13px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: "'Roboto Condensed', sans-serif",
    },
    rootSearchIcon:{
        color:'white',
      },
      search: {
          border: '1px solid #ddd',
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
          fontSize:13,
          color:'white',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px 12px',
          background:'#279cff',
          borderTopRightRadius: '3px',
          borderBottomRightRadius: '3px',
          borderBottom: '1px solid #279cff',
        },
        inputRoot: {
          color: 'inherit',
          width:'100%',cursor:'pointer',
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
        border:{
            border: '1px solid #ddd', 
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px',
            borderBottomRightRadius: '3px',
            borderBottomLeftRadius: '3px',
        },
        list_title_01:{
            marginTop:15,
            marginBottom:20,
            display:'flex',
            alignItems: 'center',
            padding:'0px 14px 0px 14px'
        },
        btn_napthemtien:{
            width: '87%',
            margin: '0 auto',
            background:'#e53935',
            padding: '10px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            textAlign:'center',
            marginBottom:10,
        },
        btn_napthemtien_text:{
            textDecoration:'none',
            color:'white'
        },
        btn_thanhtoan:{
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            background:'#279cff',
            textDecoration:'none',
            color:'white',
            marginLeft:'auto',
            padding: '10px',
        },
        btn_add:{
            minWidth: 40,
        },
        btn_remove:{
            minWidth: 40,
        },
        text_soluong:{
            border: '1px solid #ddd',
            padding: '7px',
            borderRadius: '4px',
            marginLeft: '3px',
            marginRight: '3px',
        },
        text_name:{
            paddingLeft:10,
            color:'#337ab7',
            fontSize:17,
        },
        text_stats:{
            paddingLeft:10,
        },
        text_delete:{
            paddingLeft:10,
            color:'red',
        },
        text_price:{
            fontSize:16,
            fontWeight:'bold',
        },
        text_stats_sub_01:{
            color:'green'
        },
        text_stats_sub_02:{
            color:'red',
        },

   
}));
export default useStyles