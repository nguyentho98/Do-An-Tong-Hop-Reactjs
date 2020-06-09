import React from 'react'
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
function SanPhamYeuThich({dataLove}) {
    const classes = useStyles();
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
                {dataLove.map((row) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">{row.product.name}</StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell>{row.fat}</StyledTableCell>
                    <StyledTableCell >{row.product.price}</StyledTableCell>
                    <StyledTableCell >Thêm</StyledTableCell>
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
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   
  }
}
export default connect(mapStateToProps, null)(SanPhamYeuThich)