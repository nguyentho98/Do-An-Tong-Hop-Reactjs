import React, { useState ,useEffect} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Grid, Typography, Avatar ,Link} from '@material-ui/core';
import { logout } from './../../actions/loginAction';
import { actThongTinUser,actLichSuDonHang,actLichSuGiaoDich,actSanPhamYeuThich } from '../../actions/cartAction';
import iconaccount from '../../utils/images/iconaccount.png';
import { NavLink } from "react-router-dom";
import useStyles from './styles';
import tien from '../../utils/images/tien.png';
import { connect } from 'react-redux';
import { history } from './../../reducers/history';
import { cleanup } from '@testing-library/react';
const Example = ({ logout ,user,actThongTinUser,actLichSuDonHang,actLichSuGiaoDich,actSanPhamYeuThich}) => {
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false)
//   useEffect(() => {
//     return () => {
//         console.log("xin chao");
//         cleanup()
//     };
// },[]);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const onMouseEnter = () => {
    setDropdownOpen(true)
  }
  const onMouseLeave = () => {
    setDropdownOpen(false)
  }
  const onClickLogout = () => {
    history.push("/login");
    logout()
  }
  const onClickThongTinTaiKhoan  = () => {
    actThongTinUser()
    history.push("/info");
  }
  const onClickLinhSuDonHang  = () => {
    actLichSuDonHang()
    history.push("/info");
  }
  const onClickLichSuGiaoDich  = () => {
    actLichSuGiaoDich()
    history.push("/info");
  }
  const onClickSanPhamYeuThich  = () => {
    actSanPhamYeuThich()
    history.push("/info");
  }
  return (
    <Dropdown className="d-inline-block" onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={classes.btnuser}>
        <Grid className={classes.user}>
          <Avatar src={iconaccount} className={classes.imguser} alt="xin chào"></Avatar>
        <Typography variant="body1">{user.username}</Typography>
        </Grid>
      </DropdownToggle>
      <DropdownMenu className={classes.dropdownMenuUser}>
        <Grid style={{padding:'0 15px'}}>
          <Typography variant="body1" style={{fontWeight:'bold'}}>Số Dư Tài Khoản</Typography>
          <Grid style={{fontWeight:'bold',display:'flex',marginTop:10,marginLeft:6,marginBottom:15,alignItems:'center'}}>
            Số dư: {user?.money}
            <Avatar src={tien} alt="xin chào" style={{borderRadius:0,width:25,height:25,marginBottom:5}}></Avatar>
            <NavLink to="/phuongthucthanhtoan" className={classes.btnnaptien}>Nạp Tiền</NavLink>
          </Grid>
        </Grid>
          <DropdownItem divider style={{margin:0}}/>
          <DropdownItem className={classes.dropdownItemUser} onClick={() =>onClickThongTinTaiKhoan() } >
            Thông tin tài khoản
          </DropdownItem>

          <DropdownItem divider  style={{margin:0}} />
          <DropdownItem className={classes.dropdownItemUser} onClick={() =>onClickLinhSuDonHang() }  >
            Lịch sử đơn hàng
          </DropdownItem>

          <DropdownItem divider  style={{margin:0}}/>
          <DropdownItem className={classes.dropdownItemUser} onClick={() =>onClickLichSuGiaoDich() }>
            Lịch sử giao dịch
          </DropdownItem>

          <DropdownItem divider  style={{margin:0}} />
          <DropdownItem className={classes.dropdownItemUser} onClick={() =>onClickSanPhamYeuThich() }>
            Sản phẩm yêu thích
          </DropdownItem>

          <DropdownItem divider  style={{margin:0}}/>
          <DropdownItem  className={classes.dropdownItemUser} onClick={() =>onClickLogout() }>
            Đăng xuất 
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.loginReducer.user
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout())
    },
    actLichSuDonHang: () => {
      dispatch(actLichSuDonHang())
    },
    actThongTinUser: () => {
      dispatch(actThongTinUser())
    },
    actLichSuGiaoDich: () => {
      dispatch(actLichSuGiaoDich())
    },
    actSanPhamYeuThich: () => {
      dispatch(actSanPhamYeuThich())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)