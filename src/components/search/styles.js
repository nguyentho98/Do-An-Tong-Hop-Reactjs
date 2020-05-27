import {makeStyles } from '@material-ui/core';
import anh from '../../utils/images/banner.png';
const useStyles = makeStyles(theme => ({
    root:{

    },
    container_sreach:{
        padding:0,
    },
    contenttitle:{
        textAlign:'center',
        marginTop:30,
        marginBottom:30,
    },
    title:{
        marginTop:30,
        fontWeight:'bold',
        fontSize: 30,
        // textTransform: 'uppercase',
    },
    inputSreach:{
        width:'100%'
    },
    inputSelect01:{
        width:80,
    },
    contentThietLapGia:{
        marginTop:30,
        marginBottom:30,
        alignItems: 'center',
    },
    tittleThietLapGia:{
        fontWeight:700,
        marginLeft:10,
    },
    contentSlider:{
        display:'flex',
        justifyContent:'center',
    },
    slider:{
        width:'75%',
        marginLeft: '20px',
        marginRight: '20px',
    },
    min:{
        height: '30px',
        width: '79px',
        border: '1px solid',
        textAlign: 'center',
        lineHeight: 2,
    },
    max:{
        height: '30px',
        width: '79px',
        border: '1px solid',
        textAlign: 'center',
        lineHeight: 2,   
        marginRight:30,
    },
    buttonFilter:{
        textTransform:'none',
        color:'white',
        fontWeight:700,
        backgroundColor:'#21beff'
    }
   
}));
export default useStyles