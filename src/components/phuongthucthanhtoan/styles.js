import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop:10,
        marginBottom:20,
    },
    container_phuongthucthanhtoan:{
        padding:0
    },
    body_container:{
        backgroundColor: '#fff',
        padding: '25px 30px',
        minHeight: '480px',
        border: '1px solid #eee',
        borderLeft: 'none',
    },
    title:{
        textTransform: 'uppercase',
        fontSize: '17px',
        fontWeight:'bold',
        background: 'linear-gradient(to right, #12c2e9 0%, #f64f5a 70%)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
    },
    phuongthucnaptien:{
        fontWeight:'bold'
    },
    content:{
        marginTop:10,
       
    },
    body_content:{
        display:'flex'
    },
    body_content_img:{
        marginRight:10
    },
    body_content_text1:{
        fontWeight:'bold',
    },
    body_content_text2:{
        fontSize:12
    },
    btn_title_text:{
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '3px',
        borderBottomLeftRadius: '3px',
        background:'#279cff',
        textDecoration:'none',
        color:'white',
        fontSize:13,
        marginLeft:'auto',
        padding: '8px',
        '&:hover':{
            color:'#279cff',
            textDecoration:'none',
            background:'white',
            border:'1px solid #279cff'
        }
    },
    inputRoot:{
        border: '1px solid #ddd',
        borderRadius:3
    },
    inputInput:{
        padding: '6px 15px 7px'
    },
}));
export default useStyles