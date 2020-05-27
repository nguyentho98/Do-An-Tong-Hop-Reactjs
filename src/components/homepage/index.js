import React, { useEffect } from 'react'
import { Container, Grid, Typography, Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/categoryAction';
const collection = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
];

function HomePage({fetchCategory,category}) {
    useEffect(() => {
        window.scrollTo(0, 0)
        fetchCategory()
    }, [])
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.home_page_banner}>
                <Grid className={classes.menu_left}>
                    <Grid className={classes.bar_btn}>
                        <i className="fas fa-bars" style={{ fontSize: 14 }}></i>
                        <Typography variant="body1" className={classes.bar_btn_text}>Danh Sách Sản Phẩm</Typography>
                    </Grid>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={classes.list_menu}
                    >
                        {category.map((options) => (
                            <NavLink to={`search/${options.id}`}  className={classes.btn_listItem}> 
                                <ListItem button className={classes.list_item} >
                                    <ListItemIcon className={classes.list_item_icon} >
                                        <i className={options.icon}></i>
                                    </ListItemIcon>
                                    <ListItemText primary={options.name} />
                                </ListItem>
                            </NavLink>
                        ))}

                    </List>
                </Grid>
                <Grid className={classes.menu_right} container>
                    <Grid container className={classes.btn}>
                        <NavLink to={"/search"} className={classes.btn_menu}>
                            <i className="fab fa-hotjar"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Mua nhiều trong 24h</Typography>
                        </NavLink>
                        <NavLink to={"/huongdanmuahang"} className={classes.btn_menu}>
                            <i className="fas fa-gamepad"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Hướng dẫn mua hàng</Typography>
                        </NavLink>
                        <NavLink to={"/chinhsachbaohanh"} className={classes.btn_menu}>
                            <i className="fas fa-award"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Chính sách bảo hành</Typography>
                        </NavLink>
                        <NavLink to={"/phuongthucthanhtoan"} className={classes.btn_menu}>
                            <i className="far fa-credit-card"></i>
                            <Typography variant="body1" className={classes.bar_btn_text}>Hình thức thanh toán</Typography>
                        </NavLink>
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
const mapStateToProps = (state, ownProps) => {
    return {
        category: state.categoryReducer.category,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCategory: () => {
            dispatch(fetchCategory())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)