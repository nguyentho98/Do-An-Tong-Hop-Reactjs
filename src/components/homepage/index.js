import React,{useEffect} from 'react'
import { Container, Grid,Typography,Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarsIcon from '@material-ui/icons/Stars';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import img1 from '../../utils/images/1.png';
import img2 from '../../utils/images/2.png';
import img3 from '../../utils/images/3.png';
import img4 from '../../utils/images/4.png';
import img5 from '../../utils/images/5.png';
import anh1 from '../../utils/images/anh1.jpg';
import anh2 from '../../utils/images/anh2.png';
import anh3 from '../../utils/images/anh3.png';
import anh4 from '../../utils/images/anh4.png';
import anh5 from '../../utils/images/anh5.png';
import Slideshow from './../slideshow/slideshow';
const collection = [
    { src: img1  },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
];
const menu = [
    {
      value:<i className="fab fa-steam-symbol"></i>,
      text: 'Game trên Steam',
    },
    {
      value: <i className="fas fa-trophy"></i>,
      text: 'PUBG',
    },
    {
      value: <i className="fab fa-optin-monster"></i>,
      text: 'Game trên Origin',
    },
    {
      value: <i className="fab fa-angellist"></i>,
      text: 'Game trên Battle.net',
    },
    {
      value: <i className="fas fa-wallet"></i>,
      text: 'Steam Wallet',
    },
    {
        value: <i className="fab fa-itunes"></i>,
        text: 'Gói nạp iTunes',
    },
    {
        value: <i className="fab fa-phoenix-framework"></i>,
        text: 'Gói nạp Garena',
    },
    {
        value: <i className="fab fa-google-play"></i>,
        text: 'Google Play',
    },
    {
        value: <i className="fas fa-tshirt"></i>,
        text: 'Áo Ekko',
    },
    {
        value: <i className="fas fa-wallet"></i>,
        text: 'Nintendo Eshop Card',
    },
    {
        value:<i className="fas fa-magic"></i>,
        text: 'Tiện ích',
    },
  ];
export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    const classes = useStyles();
        return (
        <Grid className={classes.root}>
           <Container maxWidth="md" className={classes.home_page_banner}>
                <Grid className={classes.menu_left}>
                    <Grid className={classes.bar_btn}>
                        <i className="fas fa-bars" style={{fontSize: 14}}></i>
                        <Typography variant="body1" className={classes.bar_btn_text}>Danh Sách Sản Phẩm</Typography>
                    </Grid>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.list_menu}
                        >
                        {menu.map((options) => ( 
                            <ListItem button className={classes.list_item} key={options}>
                                <ListItemIcon className={classes.list_item_icon} > 
                                    {options.value}
                                </ListItemIcon>
                                <ListItemText primary= {options.text} />
                            </ListItem>
                        ))}
                        
                    </List>
                </Grid>
                <Grid className={classes.menu_right} container>
                    <Grid container className={classes.btn}>
                        <Grid  className={classes.btn_menu}>
                            <i className="fab fa-hotjar"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Mua nhiều trong 24h</Typography>
                        </Grid>
                        <Grid className={classes.btn_menu}>
                            <i className="fas fa-gamepad"></i> 
                            <Typography variant="body1" className={classes.bar_btn_text}>Hướng dẫn mua hàng</Typography>
                        </Grid>
                        <Grid  className={classes.btn_menu}>
                             <i className="fas fa-award"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Chính sách bảo hành</Typography>
                        </Grid>
                        <Grid  className={classes.btn_menu}>
                            <i className="far fa-credit-card"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Hình thức thanh toán</Typography>
                        </Grid>
                    </Grid>       
                    <Grid className={classes.menu_right_slideshow} md={8} item>
                        <Slideshow
                            input={collection}
                            ratio={`3:2`}
                            mode={`automatic`}
                            timeout={`3000`}
                        />
                    </Grid>
                    <Grid className={classes.menu_right_image} md={4} item>
                        <Avatar alt="Remy Sharp" src={anh1} className={classes.image_2}></Avatar>
                        <Avatar alt="Remy Sharp" src={anh2} className={classes.image_2}></Avatar>
                    </Grid>  
                    <Grid container>
                        <Grid md={4} item>
                             <Avatar alt="Remy Sharp" src={anh3} className={classes.image_1}></Avatar>
                        </Grid>
                        <Grid md={4} item>
                             <Avatar alt="Remy Sharp" src={anh4} className={classes.image_1}></Avatar>
                        </Grid>
                        <Grid md={4} item>
                             <Avatar alt="Remy Sharp" src={anh5} className={classes.image_1}></Avatar>
                        </Grid>
                    </Grid>          
                </Grid>
           </Container>
        </Grid>
       
    )
}
