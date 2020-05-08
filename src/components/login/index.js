import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from "react-router-dom";
import { clear } from './../../actions/alertAction';
import { login } from './../../actions/userAction';
import { connect } from 'react-redux';
import { history } from './../../reducers/history';
function Login({ clearAlerts, login, alert }) {
    history.listen((location, action) => {
       clearAlerts();
    });
    const classes = useStyles();
    const [sateUser, setSateUser] = useState({
        email: '',
        password: ''
    })
    const [sateSubmitted, setSateSubmitted] = useState(false)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSateUser({ ...sateUser, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSateSubmitted(true)
        if (sateUser.email && sateUser.password) {
            login(sateUser.email, sateUser.password)
        }
    }
    return (
        <Grid className={classes.root}>
            <Grid className={classes.login_bg}></Grid>
            <Grid className={classes.container_div}>
                <Grid className={classes.container_login}>
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <form name="form" onSubmit={handleSubmit}>
                        <Grid className={classes.line_high}>
                            <Typography className={classes.title} >ĐĂNG NHẬP</Typography>
                        </Grid>

                        <div  className={classes.formGroup}>
                            <i className="far fa-envelope" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="email"  name="email" value={sateUser.email} onChange={(e) => handleChange(e)} placeholder="Địa chỉ Email" className={classes.input} />
                            {sateSubmitted && !sateUser.email &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Email is required</div>
                            }
                        </div>
                        <div className={classes.formGroup}>
                            <i className="fas fa-lock" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="password" name="password" value={sateUser.password} onChange={(e) => handleChange(e)} placeholder="Mật khẩu" className={classes.input} />
                            {sateSubmitted && !sateUser.password &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Password is required</div>
                            }
                        </div>
                        <Grid className={classes.divLink}>
                            <Grid>
                                <i className="fas fa-angle-left" style={{ color: '#21beff', marginRight: 3 }}></i>
                                <Link to="/" className={classes.link_trangchu}>
                                    Quay về trang chủ
                            </Link>
                            </Grid>

                            <Link to="/" className={classes.link_quenmatkhau}>
                                Quên mật khẩu
                        </Link>
                        </Grid>

                        <Grid className={classes.div_dangnhap}>
                            {/* <Link to="/test" className={classes.btn_dangnhap_text}> */}
                            <Button className={classes.btn_dangnhap} type="submit">Đăng nhập</Button>
                            {/* </Link> */}
                        </Grid>
                        <Grid className={classes.div_dangky}>
                            <Link to="/register" className={classes.btn_dangky_text}>
                                <Button className={classes.btn_dangky}>Đăng ký tài khoản mới</Button>
                            </Link>
                        </Grid>
                        <hr style={{ width: '80%', marginTop: 45, backgroundColor: 'white' }}></hr>
                        <Grid className={classes.btn_napthemtien}>
                            <Typography style={{ color: 'white', marginBottom: 30 }}>Hoặc đăng nhập thông qua MXH</Typography>
                        </Grid>

                        <Grid className={classes.div_mangxh}>
                            <Link to="/" className={classes.btn_mangxh_text}>
                                <span style={{ float: 'left', height: 30, borderRight: '1px solid rgba(0, 0, 0, 0.2)', width: 43, marginLeft: -3 }}>
                                    <i className="fab fa-google-plus-g" style={{ fontSize: 25 }}></i>
                                </span>
                                <Typography> Đăng nhập bằng Google</Typography>
                            </Link>
                        </Grid>
                    </form>
                </Grid>

            </Grid>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        alert: state.alertReducer,
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearAlerts: () => {
            dispatch(clear())
        },
        login: (email, password) => {
            dispatch(login(email, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
