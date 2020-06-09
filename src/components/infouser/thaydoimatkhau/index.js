import React,{useState} from 'react'
import { Grid, Typography,InputLabel,Button} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import FormGroup  from '@material-ui/core/FormGroup';
import useStyles from './styles';
import { connect } from 'react-redux';
import { fetchChangePassword } from '../../../actions/userAction';
import { clear } from '../../../actions/alertAction';
function ThayDoiMatKhau({user,alert,fetchChangePassword,alertClear}) {
    const classes = useStyles();
    const [statePass, setStatePass] = useState({
        password: '',
        newPassword:'',
        confirmNewPassword:'',
    })
    const [stateSubmitted, setStateSubmitted] = useState(false)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setStatePass({ ...statePass, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setStateSubmitted(true)
        if ( statePass.password && statePass.newPassword.length >= 4  &&  statePass.confirmNewPassword===statePass.newPassword) {
            setTimeout(()=>alertClear(),3000)
            fetchChangePassword(user,statePass.password,statePass.newPassword)
        }
    }
   
    return (
        <Grid className={classes.root}>
            <Typography variant="h5" className={classes.title}>Đổi Mật Khẩu Tài Khoản</Typography>
            <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <form name="form" onSubmit={handleSubmit}>
                <FormGroup className={classes.formGroup}>
                    <InputLabel className={classes.inputLabel} htmlFor="my-input">Xác nhận mật khẩu cũ: </InputLabel> 
                    <Grid  className={classes.text_info_detail} >
                        <input type="password" name="password" value={statePass.password} onChange={(e) => handleChange(e)} aria-describedby="helpId" placeholder="Mật khẩu cũ" className={classes.input} />
                        {stateSubmitted && !statePass.password &&
                            <div className="help-block" style={{ color: '#a94442', margin: '5px 0px',marginLeft: '10px', }}>Vui lòng nhập mật khẩu !</div>
                        }
                    </Grid>
                </FormGroup >
                <FormGroup className={classes.formGroup}>
                    <InputLabel className={classes.inputLabel} htmlFor="my-input">Mật khẩu mới: </InputLabel> 
                    <Grid  className={classes.text_info_detail} >
                        <input type="password" name="newPassword" aria-describedby="helpId" value={statePass.newPassword} onChange={(e) => handleChange(e)} placeholder="Mật khẩu mới" className={classes.input} />
                        {stateSubmitted && !statePass.newPassword &&
                            <div className="help-block" style={{ color: '#a94442', margin: '5px 0px',marginLeft: '10px' }}>Vui lòng nhập mật khẩu mới !</div>
                        }
                        {stateSubmitted && statePass.newPassword.length < 4 && statePass.newPassword !== '' &&
                            <div className="help-block" style={{ color: '#a94442', margin: '5px 0px',marginLeft: '10px' }}>Mật khẩu có it nhất 4 ký tự !</div>
                        }
                    </Grid>
                </FormGroup >
                <FormGroup className={classes.formGroup}>
                    <InputLabel className={classes.inputLabel} htmlFor="my-input"></InputLabel> 
                    <Grid  className={classes.text_info_detail} >
                            <Grid className={classes.list_title_01}>
                                <CheckIcon style={{marginRight:5,color:'#21beff',fontWeight:700,}}></CheckIcon>
                                <Typography style={{color:'#21beff',fontWeight:700, }}>Mật khẩu có ít nhất 4 kí tự</Typography>
                            </Grid>
                            <Grid className={classes.list_title_01}>
                                    <CheckIcon style={{marginRight:5}}></CheckIcon>
                                <Typography >Mật khẩu nên có ít nhất 1 chữ in hoa</Typography>
                            </Grid>
                            <Grid className={classes.list_title_01}>
                                    <CheckIcon style={{marginRight:5}}></CheckIcon>
                                    <Typography >Mật khẩu nên có ít nhất 1 số</Typography>
                            </Grid>    
                    </Grid>
                </FormGroup >
                <FormGroup className={classes.formGroup}>
                    <InputLabel className={classes.inputLabel} htmlFor="my-input">Xác nhận mật khẩu mới: </InputLabel> 
                    <Grid  className={classes.text_info_detail} >
                        <input type="password" name="confirmNewPassword" aria-describedby="helpId" value={statePass.confirmNewPassword} onChange={(e) => handleChange(e)} placeholder="Nhập lại mật khẩu mới" className={classes.input} />
                        {stateSubmitted && !statePass.confirmNewPassword &&
                            <div className="help-block" style={{ color: '#a94442', margin: '5px 0px',marginLeft: '10px' }}>Vui lòng xác nhận mật khẩu !</div>
                        }
                        {stateSubmitted && statePass.confirmNewPassword !== '' && statePass.confirmNewPassword !== statePass.newPassword && 
                            <div className="help-block" style={{ color: '#a94442', margin: '5px 0px' ,marginLeft: '10px'}}>Nhập lại mật khẩu không chính xác !</div>
                        }
                    </Grid>
                </FormGroup >
                <FormGroup className={classes.formGroup}>
                    <InputLabel className={classes.inputLabel} htmlFor="my-input"></InputLabel> 
                    <Grid  className={classes.text_info_detail} >
                        <Button
                        variant="contained"
                        type="submit"
                        classes={{
                            root: classes.buttonXacNhan,
                        }}
                        >
                        Cập nhật
                        </Button>
                    </Grid>
                </FormGroup >
                
            </form>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
      user: state.loginReducer.user,
      alert: state.alertReducer
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchChangePassword: (user,password,newPassword) => {
            dispatch(fetchChangePassword(user,password,newPassword))
        },
        alertClear:()=>{dispatch(clear())}
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ThayDoiMatKhau)