import React, { useEffect } from 'react'
import { Grid, Container, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import TabsCustom from '@material-ui/core/Tabs';
import TabCustom from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles';
import infouser2 from '../../utils/images/infouser2.png';
import ThongTinTaiKhoan from './thongtintaikhoan';
import LichSuDonHang from './lichsudonhang';
import LichSuGiaoDich from './lichsugiaodich';
import ThayDoiMatKhau from './thaydoimatkhau';
import SanPhamYeuThich from './sanphamyeuthich';

import { connect } from 'react-redux';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

 function InfoUser({user,statusUser,onClickItemUser}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // useEffect(() => {
  //   setValue(statusUser)
  // }, [])
  const Tab = withStyles({
    selected: {
      backgroundColor: 'white'
    },
    textColorInherit: {
      opacity: 1
    },
    wrapper: {
      alignItems: 'unset',
    }
  })(TabCustom);
  const Tabs = withStyles({
    scroller: {
      backgroundColor: '#f7f7f7'
    },
  })(TabsCustom);
  function handleChange(event, newValue) {
    onClickItemUser(newValue);
  }

  return (
    <Container maxWidth="md" className={classes.container_info}>
      <Grid className={classes.container_header}>
        <Grid className={classes.img}>

        </Grid>
        <Grid className={classes.account_title}>
          <Grid className={classes.account_img}>
            <img src={infouser2} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} alt="xin chao" />
          </Grid>
          <Grid className={classes.account_name}>
            <Typography variant="body2" className={classes.account_name_text1}>Nguyễn Xuân Thọ</Typography>
            <Typography variant="body2" className={classes.account_name_text2}>Số dư hiện tại : {user.Surplus}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.account_info}>
          <Grid className={classes.account_info_item}>
            UserName:
        <Typography variant="caption" className={classes.account_info_item_text} > Tuoithotranve98</Typography>
          </Grid>
          <Grid className={classes.account_info_item}>
            Ngày đăng ký:
          <Typography variant="caption" className={classes.account_info_item_text}> 25/5/2020</Typography>
          </Grid>
          <Grid className={classes.account_info_item}>
            <Typography variant="caption" className={classes.account_info_item_text}> Member</Typography>
          </Grid>
          <Grid className={classes.account_info_item}>
            Đã tích lũy:
            <Typography variant="caption" className={classes.account_info_item_text}> 200,440</Typography>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.content}>
        <Tabs
          orientation="vertical"
          value={statusUser}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          indicatorColor="primary"
          TabIndicatorProps={{
            style: {
              left: "0px",
            }
          }}
        >
          <Tab className={classes.tab} label={
            <Grid className={classes.tabs_item}>
              <Grid className={classes.tabs_item_icon}>
                <i className="fas fa-info fa-2x" style={{ fontSize: 28 }}></i>
              </Grid>

              <Grid className={classes.tabs_text}>
                <Typography className={classes.tabs_text1} variant="body2">Thông tin tài khoản</Typography>
                <Typography className={classes.tabs_text2} variant="body2">Quản lý thông tin cá nhân</Typography>
              </Grid>
            </Grid>
          } {...a11yProps(0)} />
          <Tab className={classes.tab} label={
            <Grid className={classes.tabs_item}>
              <Grid className={classes.tabs_item_icon}>
                <i className="fas fa-shopping-cart fa-2x" style={{ fontSize: 28, color: '#f4b844' }}></i>
              </Grid>

              <Grid className={classes.tabs_text}>
                <Typography className={classes.tabs_text1} variant="body2">Lịch sử đơn hàng</Typography>
                <Typography className={classes.tabs_text2} variant="body2">Thông tin sản phẩm đã mua</Typography>
              </Grid>
            </Grid>
          } {...a11yProps(1)} />
          <Tab className={classes.tab} label={
            <Grid className={classes.tabs_item}>
              <Grid className={classes.tabs_item_icon}>
                <i className="fas fa-dollar-sign fa-2x" style={{ fontSize: 28, color: '#48a163' }}></i>
              </Grid>

              <Grid className={classes.tabs_text}>
                <Typography className={classes.tabs_text1} variant="body2">Lịch sử giao dịch</Typography>
                <Typography className={classes.tabs_text2} variant="body2">Thông tin thanh toán</Typography>
              </Grid>
            </Grid>
          } {...a11yProps(2)} />
          <Tab className={classes.tab} label={
            <Grid className={classes.tabs_item}>
              <Grid className={classes.tabs_item_icon}>
                <i className="fas fa-heart fa-2x" style={{ fontSize: 28, color: '#ea3a4b' }}></i>
              </Grid>

              <Grid className={classes.tabs_text}>
                <Typography className={classes.tabs_text1} variant="body2">Sản phẩm yêu thích</Typography>
                <Typography className={classes.tabs_text2} variant="body2">Sản phẩm đã đánh dấu</Typography>
              </Grid>
            </Grid>
          } {...a11yProps(3)} />
          <Tab className={classes.tab} label={
            <Grid className={classes.tabs_item}>
              <Grid className={classes.tabs_item_icon}>
                <i className="fas fa-key fa-2x" style={{ fontSize: 28, color: '#ad4025' }}></i>
              </Grid>

              <Grid className={classes.tabs_text}>
                <Typography className={classes.tabs_text1} variant="body2">Thay đổi mật khẩu</Typography>
                <Typography className={classes.tabs_text2} variant="body2">Cập nhật mật khẩu mới</Typography>
              </Grid>
            </Grid>
          } {...a11yProps(4)} />

        </Tabs>
        <TabPanel value={statusUser} index={0} className={classes.tabPanel}>
          <ThongTinTaiKhoan user={user}/>
        </TabPanel>
        <TabPanel value={statusUser} index={1} className={classes.tabPanel}>
          <LichSuDonHang />
        </TabPanel>
        <TabPanel value={statusUser} index={2} className={classes.tabPanel}>
          <LichSuGiaoDich />
        </TabPanel>
        <TabPanel value={statusUser} index={3} className={classes.tabPanel}>
          <SanPhamYeuThich />
        </TabPanel>
        <TabPanel value={statusUser} index={4} className={classes.tabPanel}>
          <ThayDoiMatKhau />
        </TabPanel>
      </div>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.loginReducer.user,
    statusUser: state.cartReducer.statusUser
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickItemUser: (value) => {
      dispatch({type:"onClickItemUser",value})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoUser)