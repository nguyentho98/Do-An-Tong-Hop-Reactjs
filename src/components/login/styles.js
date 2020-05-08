import {makeStyles } from '@material-ui/core';
import anh from '../../utils/images/loginbg.png';
const useStyles = makeStyles(theme => ({
    root:{
        backgroundImage: "url(" +  anh + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        minWidth: '100%',
        minHeight: '100%',
    },
    login_bg:{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.7,
    },
    container_div:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '8%',
        minHeight: '500px',
       
    },
    container_login:{
        maxWidth: '400px',
        width: '100%',
        margin: '0 auto',
        zIndex: 1,
        textAlign: 'center',
    },
    line_high:{
        position: 'relative',
        zIndex: 1,
        color:'white',
        textAlign: 'center',
        fontFamily: "'Roboto-Condensed-Bold'",
        paddingTop: '5px',
        marginBottom: '30px',
        "&::after": {
            borderTop: '1px solid #eee',
            content: '""',
            margin: '0 auto',
            position:'absolute',
            top: 'calc(50% + 3px)',
            bottom: 0,
            width: 'calc(50% - 80px)',
            zIndex: -1,
            left:0,
        },
        "&::before":{
            borderTop: '1px solid #eee',
            content: '""',
            margin: '0 auto',
            position:'absolute',
            top: 'calc(50% + 3px)',
            bottom: 0,
            width: 'calc(50% - 80px)',
            zIndex: -1,
            right: 0,
        },
        
    },
    title:{
        fontSize:24,
        padding:'0 15px',
        textTransform: 'uppercase',
        fontFamily: "'Roboto Condensed Bold', sans-serif",
    },
    formGroup:{
        position: 'relative',
        borderCollapse: 'separate',
        marginBottom: '10px',
        marginTop: '10px',
    },
    icon:{
        position: 'absolute',
        color: '#777',
        top: '10px',
        left: '10px',
        fontSize: '18px'
    },
    input:{
        height: '38px',
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '4px',
        width: '100%',
        padding: '5px 10px 5px 35px',
        "&::focus": {
            outline:'none',
        }
    },
    divLink:{
        display:'flex',
        marginBottom:20,
    },
    link_trangchu:{
        color:'#21beff',
        '&:hover':{
            color:'#21beff',
            textDecoration:'none',
        }
    },
    link_quenmatkhau:{
        marginLeft:'auto',
        color:'#21beff',
        '&:hover':{
            color:'#21beff',
            textDecoration:'none',
        }
    },
    div_dangnhap:{
        width: '100%',
        marginBottom:15
    },
    btn_dangnhap:{
        width: '100%',
        height: '35px',
        color: 'white',
        backgroundColor: '#21beff',
        textTransform: 'none',
        fontSize: '15px',
        '&:hover':{
            color: '#21beff',
            backgroundColor: '#fff',
            border:'1px solid #21beff',
            textDecoration:'inherit',
        }
        
    },
    btn_dangnhap_text:{
        color:'white',
        textDecoration:'none',
        border: 'none',
        '&:hover':{
            textDecoration:'none',
        }
    },
    div_dangky:{
        width: '100%',
        
    },
    btn_dangky:{
        width: '100%',
        height: '35px',
        border:'1px solid #21beff',
        backgroundColor: 'none',
        color: '#21beff',
        textTransform: 'none',
        fontSize: '15px',
        '&:hover':{
            color: 'white',
            backgroundColor: '#21beff',
            border:'1px solid #21beff',
            textDecoration:'none',
        }
        
    },
    btn_dangky_text:{
        color:'white',
        textDecoration:'none',
        border: 'none',
        '&:hover':{
            textDecoration:'none',
        }
    },
    div_mangxh:{
        width: '60%',
        background: '#e02f2f',
        border: '#e02f2f',
        padding:15,
        borderRadius:5,
        margin:'0 auto'
      
    },
    btn_mangxh:{
        width: '100%',
        height: '35px',
        border:'1px solid #21beff',
        backgroundColor: 'none',
        color: '#21beff',
        textTransform: 'none',
        fontSize: '15px',
        '&:hover':{
            color: 'white',
            backgroundColor: '#21beff',
            border:'1px solid #21beff',
            textDecoration:'none',
        }
        
    },
    btn_mangxh_text:{
        color:'white',
        textDecoration:'none',
        margin: '15px 0 0 0',
        paddingTop: '13px',
        width: '65%',
        textAlign: 'center',
        border: 'none',
        '&:hover':{
            textDecoration:'none',
        }
    },
}));
export default useStyles