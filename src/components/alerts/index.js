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
const Alerts = ({ cartSuccess, addCartSuccess, addCartClose }) => {
  const classes = useStyles();


  return (
    <Container maxWidth="md" className={classes.root}>
      <Collapse in={cartSuccess}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                addCartClose();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Bạn đã thêm vào giỏ hàng thành công !
              </Alert>
      </Collapse>
    </Container>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    cartSuccess: state.productReducer.cartSuccess
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCartSuccess: () => {
      dispatch({ type: "addCart" })
    },
    addCartClose: () => {
      dispatch({ type: "addCartClose" })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alerts)
