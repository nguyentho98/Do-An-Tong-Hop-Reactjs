import {makeStyles } from '@material-ui/core';
import infouser from '../../utils/images/infouser.png';
const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        marginBottom:20
      },
      tabs: {
        width:300
      },
    container_info:{
        padding:0,
    },
    tabPanel:{
        width:'100%'
    },
    container_header:{
        position: 'relative',
        marginTop: '20px',
        marginBottom: '25px',
        borderRadius: '2px',
        overflow: 'hidden',
    },
    img:{
        backgroundImage: "url(" +  infouser + ")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '230px',
        position: 'relative',
        '&::after':{
            content: '""',
            width: '100%',
            height: '120px',
          
            background:' linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 68%, rgba(0, 0, 0, 0.35) 100%, rgba(0, 0, 0, 0.35) 101%)',
            position: 'absolute',
            bottom: 0
        }
    },
    account_title:{
        position: 'absolute',
        top: '105px',
        left: '40px',
        display: 'flex',
        alignItems: 'center',
    } ,
    account_img:{
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        float: 'left',
        padding: '3px',
        backgroundColor: '#fff',
        border: '1px solid #eee',
    },
    account_name:{
        float: 'left',
        marginLeft: '15px',
        marginTop: '30px',
    },
    account_name_text1:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    account_name_text2:{
        fontSize:13,
        color:'white'
    },
    account_info:{
        backgroundColor:' #fff',
        color: '#000',
        padding: '10px 0 10px 190px',
        border: '1px solid #eee'
    },
    account_info_item:{
        display: 'inline-block',
        fontWeight: '500',
        padding: '0 15px',
        '&:not(:last-child)': {
            borderRight: '1px solid #eee',
        }
    },
    account_info_item_text:{
        fontSize:'15px',
        fontWeight:'bold',
    },
    tab:{
        padding:'20px 0',
        backgroundColor: '#eeeeeec9'
    },
    tabs_item:{
        display:'flex',
    },
    tabs_text:{
        textAlign:'left',
        marginLeft: '5px',
    },
    tabs_text1:{
        fontWeight: 'bold',
        textTransform: 'none',
    },
    tabs_text2:{
        textTransform: 'none',
    },
    tabs_item_icon:{
        float:'left',
        width: 35,
        textAlign: 'center',
        marginLeft: '10px',
    }

       
}));
export default useStyles