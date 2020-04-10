import React from 'react'
import { Grid,Container,Typography, Avatar,Button } from '@material-ui/core';
import { BrowserRouter as Router, Link } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import product1 from '../../utils/images/product1.jpg';

export default function Carts() {
    const classes = useStyles();
        return (
         <Grid>
             <Container maxWidth="md" className={classes.container_carts}>
                <Grid className={classes.list_title}>
                    <Typography component="h3" variant="h5" className={classes.title}>Giỏ Hàng </Typography>
                    <span style={{fontSize:13,marginLeft:5}}> (2 sản phẩm) </span>
                    <Link to="/" className={classes.btn_title_text}>
                        Tiếp tục mua hàng
                    </Link>
                </Grid>
                <hr className={classes.duongke}></hr>  
                <Grid className={classes.thanhtoan_container}>
                    <Grid container className={classes.thanhtoan_carts}>
                        <Grid container className={classes.thanhtoan_carts_item}>
                            <Grid md={3}>
                                <Avatar alt="Remy Sharp" src={product1} className={classes.image}></Avatar>
                            </Grid>
                            <Grid md={5}>
                                <Typography component="h3" variant="h5" className={classes.text_name}>Giỏ Hàng</Typography>
                                <Typography  className={classes.text_stats}>Tình trạng: <span className={classes.text_stats_sub_01}>Còn hàng</span></Typography>
                                <Typography  className={classes.text_delete}>Xoá</Typography>
                            </Grid>
                            <Grid md={2}>
                            <Typography  className={classes.text_price}>459.000đ</Typography>
                            </Grid>
                            <Grid md={2}>
                                <Button variant="contained" color="" className={classes.btn_remove}>-</Button>
                                <Typography variant="contained" className={classes.text_soluong} >10</Typography>
                                <Button  variant="contained" color="" className={classes.btn_add}>+</Button>
                               
                               
                            </Grid>
                        </Grid>
                        <Grid container className={classes.thanhtoan_carts_item}>
                            <Grid md={3}>
                                <Avatar alt="Remy Sharp" src={product1} className={classes.image}></Avatar>
                            </Grid>
                            <Grid md={5}>
                                <Typography component="h3" variant="h5" className={classes.text_name}>Giỏ Hàng</Typography>
                                <Typography  className={classes.text_stats}>Tình trạng: <span className={classes.text_stats_sub_02}>Hết hàng</span></Typography>
                                <Typography  className={classes.text_delete}>Xoá</Typography>
                            </Grid>
                            <Grid md={2}>
                            <Typography  className={classes.text_price}>459.000đ</Typography>
                            </Grid>
                            <Grid md={2}>
                                <Button variant="contained" color="" className={classes.btn_remove}>-</Button>
                                <Typography variant="contained" className={classes.text_soluong} >10</Typography>
                                <Button  variant="contained" color="" className={classes.btn_add}>+</Button>
                                
                                
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} className={classes.thanhtoan_action}>
                        <Grid md={6} item className={classes.thanhtoan_action_left}>
                            <Grid className={classes.border}>
                                <Grid className={classes.div_title} >
                                    <Typography  className={classes.title_text_02}>MÃ GIẢM GIÁ</Typography>
                                </Grid>
                                <Grid className={classes.search}>
                                    <Grid className={classes.searchIcon}>
                                        Sử dụng
                                    </Grid>
                                    <InputBase
                                    placeholder="Nhập mã giảm giá..."
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid  md={6} item className={classes.thanhtoan_action_right}>
                            <Grid className={classes.border}>
                                <Grid className={classes.div_title}  >
                                    <Typography  className={classes.title_text_02}>THÔNG TIN THANH TOÁN</Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography  style={{color:'#8e9098'}}>Thành tiền sản phẩm</Typography>
                                    <Typography  className={classes.title_text}>459.000đ </Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography  className={classes.title}>TỔNG TIỀN</Typography>
                                    <Typography  style={{color:'red',marginLeft:"auto"}}>459.000đ </Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography  style={{color:'#8e9098'}}>Số dư hiện tại</Typography>
                                    <Typography  className={classes.title_text}>0đ </Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography  className={classes.title}>SỐ TIỀN CẦN NẠP THÊM</Typography>
                                    <Typography  style={{color:'red',marginLeft:"auto"}}>459.000đ </Typography>
                                </Grid>
                                <Grid className={classes.btn_napthemtien}>
                                    <Link to="/test" className={classes.btn_napthemtien_text}>
                                        Nạp Thêm Tiền
                                    </Link>
                                </Grid>
                              
                            </Grid>
                        </Grid>
                        <Grid md={12}>
                            <hr className={classes.duongke}></hr>  
                            <Grid className={classes.list_title}>
                                <Link to="/" style={{border: '1px solid #DDD',textDecoration:'none',color:'black',padding:5,borderRadius:4}}>
                                    Tiếp tục mua hàng
                                </Link>
                                <Link to="/test" className={classes.btn_thanhtoan}>
                                    Thanh Toán
                                </Link>
                               
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>  
             </Container>
         </Grid>
        )
}
