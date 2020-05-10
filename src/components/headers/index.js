import React from 'react'
import { Container, Grid, Typography,Avatar } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import DropDownUser from './dropdownuser';
import DropDownCart from './dropdowncart';
import nuce from '../../utils/images/nuce.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
function Headers({stateLogin,loggedIn,stateUser}) {
    
    const classes = useStyles();


    const UserLogin = () => {
        if (loggedIn) {
            return (
                <Grid className={classes.header_btn_1}>
                    <DropDownUser></DropDownUser>
                </Grid>
            )
        } else {
            return (
                <Grid className={classes.header_btn_1}>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none', border: 'none', '&:hover': { textDecoration: 'none', } }}>
                        Đăng nhập
                    </Link>
                    <Typography variant="body1">/</Typography>
                    <Link to="/register" style={{ color: 'white', textDecoration: 'none', border: 'none', '&:hover': { textDecoration: 'none', } }}>
                        Đăng ký
                    </Link>
                </Grid>
            )
        }
    }

    return (
        <Grid>
            <Grid className={classes.top_header}>
                <Container maxWidth="md" className={classes.container_top_header}>
                    <Grid className={classes.slide_new}>
                    <div className={classes.animatedItem}>
                        <div className={classes.sub_marquee}>
                            <span className={classes.marquee_text}>Xin chào bạn đã đến với NuceShop </span>
                            <span className={classes.marquee_text}>Xin chào bạn đã đến với NuceShop </span>
                        </div>
                    </div>
                    </Grid>
                    <Grid className={classes.text_right}>
                        <Link to="/test" className={classes.linkhotro}>
                            Hộ trợ 0357 004 230
                        </Link>

                    </Grid>
                    <Grid className={classes.clear}></Grid>
                </Container>
            </Grid>
            <Grid className={classes.home_page}>
                <Container maxWidth="md" className={classes.header_container}>
                    <Grid className={classes.divlogo}>
                        <Avatar src={nuce} alt="xin chao" className={classes.imglogo}></Avatar>
                        <Typography variant="body1" className={classes.logo_name}>
                            <Link to="/" className={classes.logo_linkname}> NuceShop</Link>
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

                        <UserLogin></UserLogin>
                        <DropDownCart></DropDownCart>


                    </Grid>
                </Container>
            </Grid>
        </Grid>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    }
}
export default connect(mapStateToProps, null)(Headers)