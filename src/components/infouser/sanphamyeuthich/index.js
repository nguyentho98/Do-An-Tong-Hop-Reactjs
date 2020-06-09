import React from 'react'
import { Grid, Typography, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import { connect } from 'react-redux';
import { actAddToCart  } from '../../../actions/cartAction';
import {actDeleteProductToLove } from '../../../actions/loveAction';
function SanPhamYeuThich({dataLove,addCartSuceess,actAddToCart,addCartClose,actCountQuantityCart,dataCart,actDeleteProductToLove}) {
    const classes = useStyles();
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
    }))(TableRow);

    const StyledButton = withStyles((theme) => ({
      startIcon: {
        marginLeft:0,
        marginRight:0
      },
    }))(Button);
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: '#21beff',
          color: 'white',
          border: '1px solid #ddd',
        },
        body: {
          fontSize: 14,
          border: '1px solid #ddd',
        },
        
      }))(TableCell);


    const onClickAddCartSuccess = (item,quantity) => {
        addCartSuceess(item)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setTimeout(()=>addCartClose(),3000)
        actAddToCart(item,quantity)
        actCountQuantityCart(countQuantityCart())
    }
    const countQuantityCart  = () => {
      var temp=0;
      if(dataCart?.length > 0 ){
       for (let index = 0; index < dataCart.length; index++) {
         const element = dataCart[index];
         temp+=element.quantity;
       }
      }else{
          temp=0;
      }
      return temp;
    }
    const onDelete = (product) => {
      actDeleteProductToLove(product)  
    }
  
      
    return (
        <Grid className={classes.root}>
            <Typography variant="h5" className={classes.title}>Sản Phẩm Yêu Thích</Typography>
            <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
            <TableContainer component={Paper} className={classes.containerTable}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Hình ảnh</StyledTableCell>
                    <StyledTableCell>Tên sản phẩm</StyledTableCell>
                    <StyledTableCell >Tình trạng</StyledTableCell>
                    <StyledTableCell >Đơn giá</StyledTableCell>
                    <StyledTableCell>Thao Tác</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {dataLove.map((item) => (
                    <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">{item.product.name}</StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell>{item.fat}</StyledTableCell>
                    <StyledTableCell >{item.product.price}</StyledTableCell>
                    <StyledTableCell style={{textAlign:'center'}}>
                      <StyledButton
                        variant="contained"
                        className={classes.buttonADD}
                        startIcon={<ShoppingCartIcon />}
                        onClick={()=>onClickAddCartSuccess(item.product,1)}
                      >
                      </StyledButton>

                      <StyledButton
                        variant="contained"
                        className={classes.buttonDelete}
                        startIcon={<CloseIcon />}
                        onClick={()=>onDelete(item.product)}
                      >
                      </StyledButton>
                    </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataLove: state.loveReducer.dataLove,
    dataCart: state.cartReducer.dataCart,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCartSuceess: (item) => dispatch({ type: "addCart",item }),
    addCartClose: () => dispatch({ type: "addCartClose" }),
    actAddToCart: (payload,quantity) => {
        dispatch(actAddToCart(payload, quantity))
    },
    actCountQuantityCart: (payload) => dispatch({ type: "actCountQuantityCart" ,payload}),
    actDeleteProductToLove: (payload) => {
      dispatch(actDeleteProductToLove(payload))
  },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamYeuThich)