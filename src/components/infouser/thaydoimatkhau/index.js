import React from 'react'
import { Grid, Typography,InputLabel} from '@material-ui/core';
import FormGroup  from '@material-ui/core/FormGroup';
import useStyles from './styles';
export default function ThayDoiMatKhau() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Typography variant="h5" className={classes.title}>Thay Đổi Mật Khẩu</Typography>
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
        </Grid>
    )
}
