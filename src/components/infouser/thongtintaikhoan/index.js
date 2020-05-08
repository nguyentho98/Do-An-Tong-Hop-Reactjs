import React from 'react'
import { Grid, InputLabel, Input, Typography} from '@material-ui/core';
import useStyles from './styles';
import FormGroup  from '@material-ui/core/FormGroup';
export default function ThongTinTaiKhoan() {
    const classes = useStyles();
    return (
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
}
