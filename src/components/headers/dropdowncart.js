import React, { useState,useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import { NavLink,Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Example = ({countQuantityCart}) => {
  const classes = useStyles();
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  useEffect(() => { 
    return () => {
      
    }
  }, [])
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
          <Typography variant="body1" className={classes.header_btn_2_quantity}>{countQuantityCart}</Typography>
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
    countQuantityCart: state.cartReducer.countQuantityCart
  }
}
export default connect(mapStateToProps,null)(Example)