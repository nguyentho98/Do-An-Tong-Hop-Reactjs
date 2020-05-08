import React from 'react'
import { Grid, Container, Avatar, Typography } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './styles';
import img1 from '../../utils/images/footer1.png';
import img2 from '../../utils/images/footer2.png';
import img3 from '../../utils/images/footer3.png';
import img4 from '../../utils/images/footer4.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    const classes = useStyles();
    return (
        <Grid>
            <Grid style={{ backgroundColor: '#e3e3e3', borderBottom: 'thin solid #b3b2b2' }}>
                <Container maxWidth="md" className={classes.container_footer_top}>
                    <Grid container className={classes.footer_top} >
                        <Grid md={3} className={classes.footer_top_item}>
                            <Avatar alt="Remy Sharp" src={img1} className={classes.image_1}></Avatar>
                            <Grid className={classes.item_text}>
                                <Typography className={classes.item_text_1}>GIAO HÀNG SIÊU TỐC</Typography>
                                <Typography className={classes.item_text_2}>
                                    Hệ thống giao hàng tự động chỉ trong 3 phút
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={3} className={classes.footer_top_item}>
                            <Avatar alt="Remy Sharp" src={img2} className={classes.image_1}></Avatar>
                            <Grid className={classes.item_text}>
                                <Typography className={classes.item_text_1}>BẢO HÀNH NHANH CHÓNG</Typography>
                                <Typography className={classes.item_text_2}>
                                    Mọi yêu cầu hỗ trợ sẽ được đội ngũ tư vấn giải quyết trực tiếp.
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={3} className={classes.footer_top_item}>
                            <Avatar alt="Remy Sharp" src={img3} className={classes.image_1}></Avatar>
                            <Grid className={classes.item_text}>
                                <Typography className={classes.item_text_1}>UY TÍN 5 SAO</Typography>
                                <Typography className={classes.item_text_2}>
                                    Được cộng đồng bình chọn là shop game uy tín nhất VN
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid md={3} className={classes.footer_top_item}>
                            <Avatar alt="Remy Sharp" src={img4} className={classes.image_1}></Avatar>
                            <Grid className={classes.item_text}>
                                <Typography className={classes.item_text_1}>HỖ TRỢ TẬN TÌNH</Typography>
                                <Typography className={classes.item_text_2}>
                                    Hệ thống hỗ trợ online liên tục từ 8h - 24h
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid style={{ backgroundColor: '#f2f2f2' }}>
                <Container maxWidth="md" className={classes.container_footer_top}>
                    <Grid container>
                        <Grid md={2}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader" className={classes.text_titile}>
                                        NuceShop
                            </ListSubheader>
                                }
                            >
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Giới thiệu về Nuce Shop
                                </Link>
                                </ListItem>
                                <ListItem  >
                                    <Link to="" to="" className={classes.text}>
                                        Điều khoản dịch vụ
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Lý do mua game bản quyền
                                </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid md={2}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader" className={classes.text_titile}>
                                        Tài Khoản
                            </ListSubheader>
                                }
                            >
                                <ListItem >
                                    <Link to="/cart" className={classes.text}>
                                        Giỏ hàng
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="/register" className={classes.text}>
                                        Đăng ký
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="/login" className={classes.text}>
                                        Đăng nhập
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="/chinhsachbaohanh" className={classes.text}>
                                        Chính sách bảo hành
                                </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid md={4}>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader" className={classes.text_titile}>
                                        Liên hệ
                            </ListSubheader>
                                }
                            >
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Địa chỉ giao dịch trực tiếp
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Hotline: 035 700 4230 (7:00 - 24:00)
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Email: nxtho0109@gmail.com
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Fanpage
                                </Link>
                                </ListItem>
                                <ListItem >
                                    <Link to="" className={classes.text}>
                                        Donate nhân viên CSKH
                                </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid md={3} style={{ marginTop: 15 }}>
                            <iframe title="myFrame" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEkkoShop-105196324482741%2F%3Fmodal%3Dadmin_todo_tour&tabs&width=340&height=214&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=2810649529020098" width={340} height={214} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowTransparency="true" allow="encrypted-media" />
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <div>
                {/* Load Facebook SDK for JavaScript */}
                <div id="fb-root" />

                {/* Your customer chat code */}
                <div className="fb-customerchat" attribution="setup_tool" page_id={105196324482741}>
                </div>
            </div>
        </Grid>
    )
}
