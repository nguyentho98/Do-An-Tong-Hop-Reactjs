import {makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root:{
      
    },
    container_chinhsachbaohanh:{
        padding:0,
    },
    title:{
        marginTop:20,
        fontWeight:700,
        fontSize: 20,
        textTransform: 'uppercase',
    },
    img:{
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:'80%',
        height:'100%',
        borderRadius:0,
        margin:'0 auto',
        marginBottom:40,
        marginTop:30,
        
    },
    info01:{
        height:60,
        marginBottom:30,
        borderLeft:' 4px solid',
        borderColor: 'rgb(56, 132, 255)',
        borderRadius: '3px',
        alignItems: 'center',
        fontSize: 16,
    },
    info02:{
        height:60,
        marginBottom:30,
        borderLeft:' 4px solid',
        borderColor: 'rgb(56, 132, 255)',
        borderRadius: '3px',
        fontSize: 16, 
        alignItems: 'center',
    }
}));
export default useStyles