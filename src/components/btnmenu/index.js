import React, { useEffect,useState} from 'react'
import { Container, Grid, Typography,Link } from '@material-ui/core';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';
import { NavLink } from 'react-router-dom';
const menu = [
    {
        value: <i className="fab fa-steam-symbol"></i>,
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
        value: <i className="fas fa-magic"></i>,
        text: 'Tiện ích',
    },
];
export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const classes = useStyles();
    const [dropdownOpen, setDropdownOpen] = useState(false)
  
  
    const toggle = () => {
      setDropdownOpen(!dropdownOpen)
    }
  
    const onMouseEnter = () => {
      setDropdownOpen(true)
    }
  
    const onMouseLeave = () => {
      setDropdownOpen(false)
    }
    const onClickMuaNhieu = () => {
       
    }
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.home_page_banner}>
                <Grid className={classes.menu_left}>
                    <Dropdown onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle} className={classes.d_inline_block}>
                        <DropdownToggle className={classes.bar_btn} >
                            <i className="fas fa-bars" style={{ fontSize: 14,marginRight:3 }}></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Danh Sách Sản Phẩm</Typography>
                        </DropdownToggle>
                        <DropdownMenu className={classes.dropdownMenuCart}>
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
                                <ListItemText primary={options.text} />
                            </ListItem>
                        ))}

                        </List>  
                        </DropdownMenu>
                    </Dropdown>
                   
                </Grid>
                <Grid className={classes.menu_right} container>
                    <Grid container className={classes.btn}>
                        <NavLink  to={"/sreach"} className={classes.btn_menu} onClick={()=>onClickMuaNhieu()}>
                            <i className="fab fa-hotjar"></i>
                            <Typography  variant="body1" className={classes.bar_btn_text}>Mua nhiều trong 24h</Typography>
                        </NavLink>
                        <NavLink to={"/huongdanmuahang"} className={classes.btn_menu}>
                            <i className="fas fa-gamepad"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Hướng dẫn mua hàng</Typography>
                        </NavLink>
                        <NavLink  to={"/chinhsachbaohanh"} className={classes.btn_menu}>
                            <i className="fas fa-award"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Chính sách bảo hành</Typography>
                        </NavLink>
                        <NavLink  to={"/phuongthucthanhtoan"}  className={classes.btn_menu}>
                            <i className="far fa-credit-card"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Hình thức thanh toán</Typography>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
        </Grid>

    )
}
