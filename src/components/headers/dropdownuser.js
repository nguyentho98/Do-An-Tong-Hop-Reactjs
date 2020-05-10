import React, { useState ,useEffect} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { logout } from './../../actions/userAction';
import iconaccount from '../../utils/images/iconaccount.png';
import { Link } from "react-router-dom";
import useStyles from './styles';
import tien from '../../utils/images/tien.png';
import { connect } from 'react-redux';
const Example = ({ logout ,user}) => {
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false)
 console.log(user);
  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const onMouseEnter = () => {
    setDropdownOpen(true)
  }

  const onMouseLeave = () => {
    setDropdownOpen(false)
  }
  return (
    <Dropdown className="d-inline-block" onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className={classes.btnuser}>
        <Grid className={classes.user}>
          <Avatar src={iconaccount} className={classes.imguser} alt="xin chào"></Avatar>
          <Typography variant="body1">Admin</Typography>
        </Grid>
      </DropdownToggle>
      <DropdownMenu className={classes.dropdownMenuUser}>
        <Grid style={{padding:'0 15px'}}>
          <Typography variant="body1" style={{fontWeight:'bold'}}>Số Dư Tài Khoản</Typography>
          <Grid style={{fontWeight:'bold',display:'flex',marginTop:10,marginLeft:6,marginBottom:15,alignItems:'center'}}>
            Số dư: {user?.Surplus}
            <Avatar src={tien} alt="xin chào" style={{borderRadius:0,width:25,height:25,marginBottom:5}}></Avatar>
            <Link to="/phuongthucthanhtoan" className={classes.btnnaptien}>Nạp Tiền</Link>
          </Grid>
        </Grid>
        <DropdownItem divider  style={{margin:0}} />
        
        <Link to="/info/1" className={classes.linkItem}>
          <DropdownItem className={classes.dropdownItemUser}>
            Lịch sử mua hàng
          </DropdownItem>
        </Link>
        <DropdownItem divider style={{margin:0}}/>
        <Link to="/info/0"  className={classes.linkItem}>
          <DropdownItem className={classes.dropdownItemUser}>
            Thông tin tài khoản
          </DropdownItem>
        </Link>
        <DropdownItem divider  style={{margin:0}} />
        <Link to="/info/2"  className={classes.linkItem}>
          <DropdownItem className={classes.dropdownItemUser}>
            Sản phẩm yêu thích
          </DropdownItem>
        </Link>
        <DropdownItem divider  style={{margin:0}}/>
        <Link to="/"  className={classes.linkItem}>
          <DropdownItem className={classes.dropdownItemUser}>
            Liên hệ Fanpage
          </DropdownItem>
        </Link>
        <DropdownItem divider  style={{margin:0}}/>
        <DropdownItem onClick={() => logout()} className={classes.dropdownItemUser}>
          <Link to="/login"  className={classes.linkItem}>
            Đăng xuất
            </Link>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)