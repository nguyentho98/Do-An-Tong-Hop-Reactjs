import React from 'react'
import { Grid, Container, Typography, Avatar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';
import chinhsachbaohanh from '../../utils/images/chinhsachbaohanh.png';
export default function ChinhSachBaoHanh() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_chinhsachbaohanh}>
                <Typography variant="h5" className={classes.title}>Chính Sách Bảo Hành</Typography>
                <hr style={{ margin: '20px auto', borderTop: '2px solid #eee' }}></hr>
                <Avatar src={chinhsachbaohanh} alt="" className={classes.img}></Avatar>
                <Alert severity="info" className={classes.info01}>Thời gian bảo hành sản phẩm sẽ được ghi trong thông tin chi tiết của sản phẩm.</Alert>
                <Alert severity="info" className={classes.info02}>Với các sản phẩm không có thông tin chi tiết, thời gian bảo hành mặc định là 6 tháng.</Alert>
            </Container>
        </Grid>
    )
}
