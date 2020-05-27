import React,{useEffect} from 'react'
import { Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import { connect } from 'react-redux';
import { getOrders } from '../../../actions/ordersAction';
function LichSuDonHang({getOrders,dataOrders}) {
    const classes = useStyles();
    useEffect(() => {
      getOrders()
      return () => {
        
      }
    }, [getOrders])
    console.log(dataOrders);
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
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
          },
        },
      }))(TableRow);
      
    
      

    return (
        <Grid className={classes.root}>
            <Typography variant="h5" className={classes.title}>Lịch Sử Đơn Hàng</Typography>
            <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
            <TableContainer component={Paper} className={classes.containerTable}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Ngày tạo</StyledTableCell>
                    <StyledTableCell>Mã đơn hàng</StyledTableCell>
                    <StyledTableCell >Tên người nhận</StyledTableCell>
                    <StyledTableCell>Hành động</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {dataOrders?.map((row) => (
                    <StyledTableRow key={row.id}>
                       <StyledTableCell >{row.date}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                        {row.id}
                    </StyledTableCell>
                    <StyledTableCell >{row.customers}</StyledTableCell>
                    <StyledTableCell >1</StyledTableCell>
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
    dataOrders: state.ordersReducer.dataOrders
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOrders: () => {
      dispatch(getOrders())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LichSuDonHang)