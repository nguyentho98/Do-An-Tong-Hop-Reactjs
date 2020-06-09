import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: 0,
      marginTop: 90,
      paddingTop: 20,

    },
  }),
);
const Alerts = ({ statusSuccess,addCartClose,item }) => {
  const classes = useStyles();

  const surplus=JSON.parse(localStorage.getItem('USER'))

 
  return (
    <Container maxWidth="md" className={classes.root}>
      <Collapse in={statusSuccess}>
        <Alert
          action={
            <IconButton
              aria-label="close"
             
              severity="error"
              size="small"
              onClick={() => {
                addCartClose();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Thành công: Bạn đã thêm <span style={{color:'#337ab7 '}}>{item.name} </span>vào giỏ hàng !
               </Alert>
      </Collapse>
    </Container>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    statusSuccess: state.productReducer.statusSuccess,
    item: state.productReducer.item
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCartClose: () => {
      dispatch({ type: "addCartClose" })
    },
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alerts)
