import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{
      
    },
    container_chinhsachbaohanh:{
        padding:0,
    },
    title:{
        marginTop:20,
        fontWeight:'bold',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    title_buoc:{
        fontWeight:'bold',
        fontSize: 18,
    },
    imghuongdang01:{
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:'80%',
        height:'100%',
        borderRadius:0,
        margin:'0 auto',
        marginBottom:40,
        marginTop:30,
    },
    imghuongdang02:{
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:'50%',
        height:'100%',
        borderRadius:0,
        margin:'0 auto',
        marginBottom:40,
        marginTop:30,
    },
    imghuongdang03:{
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:'50%',
        height:'100%',
        borderRadius:0,
        margin:'0 auto',
        marginBottom:40,
        marginTop:30,
    },
    text:{
        margin:"15px 0",
    },
    info01:{
        height:180,
        marginBottom:30,
        borderLeft:' 4px solid',
        borderColor: 'rgb(247, 125, 5)',
        borderRadius: '3px',
        fontSize: 16,
        paddingTop:30
    },
    info02:{
        height:80,
        marginBottom:30,
        borderLeft:' 4px solid',
        borderColor: 'rgb(56, 132, 255)',
        borderRadius: '3px',
        alignItems: 'center',
        fontSize: 16,
    },

}));
export default useStyles