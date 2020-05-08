import React,{useState} from 'react'
import { Grid, Container, Typography,Avatar } from '@material-ui/core';
import useStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import thanhtoan1 from '../../utils/images/thanhtoan1.png'
import thanhtoan2 from '../../utils/images/thanhtoan2.png'
import thanhtoan3 from '../../utils/images/thanhtoan3.png'
import thanhtoan4 from '../../utils/images/thanhtoan4.png'
import thanhtoan5 from '../../utils/images/thanhtoan5.png'
import thanhtoan6 from '../../utils/images/thanhtoan6.png'
import thanhtoan7 from '../../utils/images/thanhtoan7.png'
import thanhtoan8 from '../../utils/images/thanhtoan8.png'
import thanhtoan9 from '../../utils/images/thanhtoan9.png'
import thanhtoan10 from '../../utils/images/thanhtoan10.png'
function PhuongThucThanhToan() {
    const ExpansionPanel = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:first-child': {
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
    })(MuiExpansionPanel);
      
    const ExpansionPanelSummary = withStyles({
        root: {
          borderBottom: '1px solid rgba(0, 0, 0, .125)',
          marginBottom: -1,
          padding: '0px 15px',
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
          '&:hover':{
            backgroundColor: 'rgba(0, 0, 0, .03)',
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
          },
        },
        expanded: {},
    })(MuiExpansionPanelSummary);
      
    const ExpansionPanelDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(4),
        },
    }))(MuiExpansionPanelDetails);

    const classes = useStyles();

    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_phuongthucthanhtoan}>
                <Grid className={classes.body_container}>
                    <Typography variant="overline" component="" className={classes.title}>NẠP DCOIN VÀO TÀI KHOẢN</Typography>
                    <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
                    <Typography className={classes.phuongthucnaptien} >Phương thức nạp tiền: 1  <i className="icon-coin-dollar" style={{ color: '#000' }}></i> = 1 VNĐ</Typography>
                    <Grid  className={classes.content} >
                        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan1} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Nạp thẻ Garena ( Cần nạp 0 VNĐ)</Typography>
                                        <Typography className={classes.body_content_text2} >Nạp Dcoin bằng thẻ cào Garena</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan2} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Nạp tiền qua thẻ cào Viettel</Typography>
                                        <Typography className={classes.body_content_text2} >Nạp tiền bằng thẻ Viettel. Phí 35%</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan3} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Chuyển khoản qua App Momo</Typography>
                                        <Typography className={classes.body_content_text2} >Nạp Dcoin tự động thông qua chuyển khoản trên ứng dụng Momo, cần điền mã giao dịch. Phí 1%. (Lưu ý: Tài khoản Momo cần liên kết ngân hàng)</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan4} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Chuyển Khoản Vietcombank, Vietinbank</Typography>
                                        <Typography className={classes.body_content_text2} >Chuyển khoản ngân hàng online hoặc tại quầy giao dịch</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan5} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Thanh toán bằng QR Pay</Typography>
                                        <Typography className={classes.body_content_text2} >Thanh toán bằng QR Code (VNPay), phí giao dịch 1,2% + 1760đ</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan6} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Nạp số dư  tự động bằng thẻ ngân hàng</Typography>
                                        <Typography className={classes.body_content_text2} >Phí 1.11% + 1.112 đ. Thông qua Megapay</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan7} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Nạp số dư tại  FPT Shop, Circle K</Typography>
                                        <Typography className={classes.body_content_text2} >Nạp số dư tại các điểm giao dịch liên kết với Momo</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan8} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Thanh toán bằng thẻ Master/Visa</Typography>
                                        <Typography className={classes.body_content_text2} >Phí 2.75% + 2.750 đ</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan9} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Thanh toán qua ví VTC</Typography>
                                        <Typography className={classes.body_content_text2} >Phí thanh toán: 1.1% + 1.760đ</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                                <Grid className={classes.body_content} >
                                    <Avatar src={thanhtoan10} alt="xin chao"className={classes.body_content_img} ></Avatar>
                                    <Grid>
                                        <Typography className={classes.body_content_text1} >Giao dịch trực tiếp</Typography>
                                        <Typography className={classes.body_content_text2} >Mua hàng tại các đại lí của Ekko Shop trên khắp cả nước</Typography>
                                    </Grid>
                                </Grid>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography style={{fontWeight:'bold'}}>
                                Đại lý chỉ mua sản phẩm, không nhận nạp số dư vào tài khoản Ekko Shop.
                                <br></br>
                                Hiện Ekkoshop đã có hơn 60 điểm đại lý giao dịch trên toàn quốc. Các bạn có thể đến đưa tiền trực tiếp và được nhận key game ngay lập tức qua email.  
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>

                </Grid>
            </Container>
        </Grid>
    )
}
export default PhuongThucThanhToan