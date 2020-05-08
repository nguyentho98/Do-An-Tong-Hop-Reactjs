import React from 'react'
import { Grid, Container, Typography, Avatar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import useStyles from './styles';
import huongdan01 from '../../utils/images/huongdan01.PNG';
import huongdan02 from '../../utils/images/huongdan02.PNG';
import huongdan03 from '../../utils/images/huongdan03.PNG';
export default function ChinhSachBaoHanh() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_chinhsachbaohanh}>
                <Typography variant="h5" className={classes.title}>Hướng Dẫn Mua Hàng</Typography>
                <hr style={{ margin: '20px auto', borderTop: '2px solid #eee' }}></hr>
                <Typography variant="h5" className={classes.title_buoc}>Bước 1:</Typography>
                <Typography variant="body1" className={classes.text}>Ở giao diện trang chủ Nuce Shop, click vào Đăng kí</Typography>
                <Avatar src={huongdan01} className={classes.imghuongdang01} alt="xin chao"></Avatar>
                
                <Typography variant="h5" className={classes.title_buoc}>Bước 2:</Typography>
                <Typography variant="body1" className={classes.text}>Điền đầy đủ các thông được yêu cầu:</Typography>
                <Avatar src={huongdan02} className={classes.imghuongdang02} alt="xin chao"></Avatar>
                <Alert  className={classes.info01} severity="warning">
                    <AlertTitle>Lưu ý</AlertTitle>
                    Username viết liền không dấu, không chứa kí tự đặc biệt. Nên viết dễ đọc dễ nhớ vì nó sẽ nằm trong chú pháp nạp tiền để thanh toán tại Shop.<br></br>
                    Email điền chính xác, vì các sản phẩm key game cũng như các thông báo qua trọng sẽ được Shop gửi qua email tới khách hàng.
                </Alert>

                <Typography variant="h5" className={classes.title_buoc}>Bước 3:</Typography>
                <Typography variant="body1" className={classes.text}>Bấm vào Đăng ký</Typography>
                <Typography variant="body1" style={{fontWeight:'bold'}}>Như vậy là bạn đăng đăng ký thành công rùi đó</Typography>
                <Avatar src={huongdan03} className={classes.imghuongdang03} alt="xin chao"></Avatar>
                <Alert severity="info" className={classes.info02}>Ngoài ra nếu có sẵn tài khoản Google hoặc Facebook bạn có thể Đăng nhập/Đăng kí thông qua 2 mạng xã hội trên thông qua các nút dưới phần Đăng nhập qua MXH</Alert>
            </Container>
        </Grid>
    )
}
