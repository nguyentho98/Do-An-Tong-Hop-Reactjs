import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Headers() {
    const classes = useStyles();
        return (
        <Grid>
            <Grid className={classes.top_header}>
                <Container maxWidth="md" className={classes.container_top_header}>
                    <Grid className={classes.slide_new}>
                        <Typography variant="body1" >Xin chào ekko</Typography>
                    </Grid>
                    <Grid className={classes.text_right}>
                        <Link to="/test">
                            {/* <Typography variant="body1" >Hộ trợ 0357 004 230</Typography> */}
                            Hộ trợ 0357 004 230
                        </Link>
                        
                    </Grid>
                    <Grid className={classes.clear}></Grid>
               </Container>
            </Grid>
            <Grid className={classes.home_page}>
                <Container maxWidth="md" className={classes.header_container}>
                    <Grid className={classes.logo}>
                        <Typography variant="body1"  className={classes.logo_name}>
                        <Link to="/"> EkkoShop</Link>
                        </Typography>
                    </Grid>
                    <Grid className={classes.search_form}>
                        <Grid className={classes.search}>
                            <Grid className={classes.searchIcon}>
                            <SearchIcon className={classes.rootSearchIcon} />
                            </Grid>
                            <InputBase
                            placeholder="Nhập sản phẩm cần tìm..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid className={classes.header_btn}>
                        <Grid  className={classes.header_btn_1}>
                            <Typography variant="body1" style={{cursor:'pointer'}}>Đăng nhập</Typography>
                            <Typography variant="body1">/</Typography>
                            <Typography variant="body1" style={{cursor:'pointer'}}>Đăng ký</Typography>
                        </Grid>
                        <Grid className={classes.header_btn_2} style={{position:'relative'}} useEffect>
                            <ShoppingCartIcon/>
                            <Typography variant="body1" className={classes.header_btn_2_text}>
                                <Link to="/cart"> Giỏ Hàng</Link>
                            </Typography>
                            <Typography variant="body1" className={classes.header_btn_2_quantity}>0</Typography>
                            <Grid className={classes.carts}>
                                <Typography variant="body1" className={classes.header_btn_2_text}>Xin chao</Typography>
                                <Typography variant="body1" className={classes.header_btn_2_quantity}>2020</Typography>
                            </Grid>
                        </Grid>
                       
                    </Grid>  
                </Container>
            </Grid>
        </Grid>
       
        )
}
