import React from 'react'
import { Grid, InputLabel, Input, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import FormGroup  from '@material-ui/core/FormGroup';
import { connect } from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
function ThongTinTaiKhoan({stateViewThongTinUser}) {
    const classes = useStyles();
    // const [state,setState]=React.useState(true)
    const View  = () => {
        if(!stateViewThongTinUser){
            return(
                <Grid className={classes.root}>
                    <Typography variant="h5" className={classes.title}>Thông Tin Cá Nhân</Typography>
                    <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Email address: </InputLabel> 
                        <Grid  className={classes.text_info_detail} >nxtho0109@gmail.com</Grid>
                        <Typography variant="caption">
                            <i className="fas fa-edit"></i>
                            Cập nhật
                        </Typography>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Username: </InputLabel> 
                        <Grid  className={classes.text_info_detail} >Tuoithotranve98</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Họ và tên: </InputLabel> 
                        <Grid  className={classes.text_info_detail} >Thọ Nguyễn Xuân</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Số điện thoại: </InputLabel> 
                        <Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Số chứng minh nhân dân: </InputLabel> 
                        <Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Giới tính:</InputLabel> 
                        <Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Địa chỉ:</InputLabel> 
                        <Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Nghề nghiệp:</InputLabel> 
                        <Grid  className={classes.text_info_detail_1} >(Chưa có thông tin)</Grid>
                    </FormGroup >
                </Grid>
            )
        }else{
            return ( 
                <Grid className={classes.root}>
                    <Typography variant="h5" className={classes.title}>Điền Mã Xác Thực Đã Được Shop Gửi tới Email</Typography>
                    <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
                
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input">Mã xác thực: </InputLabel> 
                        <InputBase
                            placeholder="Nhập mã xác thực..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                
                            }}
                            inputProps={{ 'aria-label': 'search' } }
                        />
                    </FormGroup >
                    <FormGroup className={classes.formGroup}>
                        <InputLabel className={classes.inputLabel} htmlFor="my-input"></InputLabel> 
                        <Button
                        variant="contained"
                        classes={{
                            root: classes.buttonXacNhan,
                            container: classes.buttonContainerXacNhan,
                            
                        }}
                        >
                        Xác nhận
                        </Button>
                        <Button
                        variant="outlined"
                        classes={{
                            root: classes.buttonGuiLai,
                            container: classes.buttonContainerGuiLai,
                            
                        }}
                    
                        >
                        Gửi lại
                        </Button>
                    </FormGroup >
                </Grid>
            )
        }
    }
    return (
       <View></View>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        stateViewThongTinUser: state.cartReducer.stateViewThongTinUser
    }
}
export default connect(mapStateToProps, null)(ThongTinTaiKhoan)