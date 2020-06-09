import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from "react-router-dom";
import { clear } from './../../actions/alertAction';
import { register } from './../../actions/registerAction';
import { connect } from 'react-redux';
import { history } from './../../reducers/history';

function Register({ alert, alertClear, register }) {

    const classes = useStyles();
    const [sateUser, setSateUser] = useState({
        email: '',
        fullname: '',
        username: '',
        phone: '',
        password: '',
        confirmPassword:'',
    })
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    
    const [sateSubmitted, setSateSubmitted] = useState(false)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSateUser({ ...sateUser, [name]: value })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSateSubmitted(true)
        if ( pattern.test(sateUser.email) && sateUser.fullname.length >= 6 && (sateUser.username.length >=6 ||sateUser.username.length <= 16) && sateUser.password && (sateUser.phone.length >=9 ||sateUser.phone.length <= 11)  ) {
            register(sateUser)
            setTimeout(()=>alertClear(),2000)
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
                            <Typography className={classes.title} >ĐĂNG KÝ</Typography>
                        </Grid>

                        <div className={classes.formGroup}>
                            <i className="far fa-address-card" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="text"  name="fullname" value={sateUser.fullname} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Họ và tên" className={classes.input} />
                            {sateSubmitted && !sateUser.fullname &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Vui lòng nhập đầy đủ họ và tên !</div>
                            }
                             {sateSubmitted && sateUser.fullname.length < 6 && sateUser.fullname !== '' &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Họ và tên của bạn phải dài trên 6 kí tự !</div>
                            }
                        </div>
                        <div  className={classes.formGroup}>
                            <i className="far fa-user" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="text" name="username" value={sateUser.username} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="username" className={classes.input} />
                            {sateSubmitted && !sateUser.username &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Vui lòng nhập tên Username !</div>
                            }
                            {sateSubmitted  && (sateUser.username.length > 16 || sateUser.username.length < 6 ) &&  sateUser.username !== '' &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Username phải từ 6 đến 16 kí tự !</div>
                            }
                        </div>
                        <div className={classes.formGroup}>
                            <i className="far fa-envelope" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="email" name="email" value={sateUser.email} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Địa chỉ email" className={classes.input} />
                            {sateSubmitted && !sateUser.email &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Vui lòng nhập Email !</div>
                            }
                            
                        </div>
                        <div className={classes.formGroup}>
                            <i className="fas fa-phone" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="number"  name="phone" value={sateUser.phone} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Số điện thoại" className={classes.input} />
                            {sateSubmitted && !sateUser.phone &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Vui lòng nhập số điện thoại !</div>
                            }
                            {sateSubmitted && (sateUser.phone.length > 11 || sateUser.phone.length < 9 ) && sateUser.phone !== '' &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Số điện thoại phải từ 9 đến 11 chữ số!</div>
                            }
                        </div>
                        <div className={classes.formGroup}>
                            <i className="fas fa-lock" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="password" name="password" value={sateUser.password} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Mật khẩu" className={classes.input} />
                            {sateSubmitted && !sateUser.password &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Vui lòng nhập password !</div>
                            }
                        </div>
                        <div className={classes.formGroup}>
                            <i className="fas fa-lock" style={{ position: 'absolute', color: '#777', top: '10px', left: '10px', fontSize: '18px' }}></i>
                            <input type="password" name="confirmPassword" value={sateUser.confirmPassword} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Nhập lại mật khẩu" className={classes.input} />
                            {sateSubmitted && !sateUser.confirmPassword &&
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Vui lòng nhập confirm password !</div>
                            }
                            {sateSubmitted && sateUser.confirmPassword !== '' && sateUser.confirmPassword !== sateUser.password && 
                                <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' }}>Nhập lại mật khẩu không chính xác !</div>
                            }
                        </div>

                        <Grid className={classes.divLink}>
                            <Grid>
                                <i className="fas fa-angle-left" style={{ color: '#21beff', marginRight: 3 }}></i>
                                <Link to="/login" className={classes.link_trangchu}>
                                    Trở lại trang đăng nhập
                            </Link>
                            </Grid>

                            <Grid style={{ marginLeft: 'auto' }}>

                                <Link to="/" className={classes.link_quenmatkhau}>
                                    Quay về trang chủ
                            </Link>
                                <i className="fas fa-angle-right" style={{ color: '#21beff', marginLeft: 3 }}></i>
                            </Grid>
                        </Grid>

                        <Grid className={classes.div_dangnhap}>
                            {/* <Link to="/register" className={classes.btn_dangnhap_text}> */}
                            <Button className={classes.btn_dangnhap} type="submit">
                                Đăng ký
                            </Button>
                            {/* </Link> */}
                        </Grid>
                        <hr style={{ width: '80%', marginTop: 45, backgroundColor: 'white' }}></hr>
                        <Grid className={classes.btn_napthemtien}>
                            <Typography style={{ color: 'white', marginBottom: 30 }}>Hoặc đăng nhập thông qua MXH</Typography>
                        </Grid>
                        <Grid className={classes.div_mangxh}>
                            <Link to="/register" className={classes.btn_mangxh_text}>
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
        alert: state.alertReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertClear:()=>{dispatch(clear())},
        register: (user) => {
            dispatch(register(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

