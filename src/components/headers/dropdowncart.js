import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import { NavLink,Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Example = ({dataCart}) => {
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false)


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
    <Dropdown onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={dropdownOpen} toggle={toggle} className={classes.d_inline_block}>
      <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none', border: 'none', '&:hover': { textDecoration: 'none', } }}>
        <DropdownToggle className={classes.btncart}>
          <ShoppingCartIcon />
            <Typography variant="body1" className={classes.header_btn_2_text}>
            Giỏ Hàng
            </Typography>
          <Typography variant="body1" className={classes.header_btn_2_quantity}>{dataCart.length > 0 ? dataCart.length : 0}</Typography>
        </DropdownToggle>
      </Link>
      {/* <DropdownMenu className={classes.dropdownMenuCart}>
          <NavLink to={'/cart'}>Giỏ hàng</NavLink>
      </DropdownMenu> */}
    </Dropdown>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataCart: state.cartReducer.dataCart
  }
}
export default connect(mapStateToProps,null)(Example)