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
export default function LichSuGiaoDich() {
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
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    return (
        <Grid className={classes.root}>
            <Typography variant="h5" className={classes.title}>Lịch Sử Giao Dịch</Typography>
            <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
            <TableContainer component={Paper} className={classes.containerTable}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Ngày Tạo</StyledTableCell>
                    <StyledTableCell>Đơn hàng</StyledTableCell>
                    <StyledTableCell >Tên sản phẩm</StyledTableCell>
                    <StyledTableCell >Tổng Cộng</StyledTableCell>
                    <StyledTableCell>Hành Động</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell >{row.calories}</StyledTableCell>
                    <StyledTableCell>{row.fat}</StyledTableCell>
                    <StyledTableCell >{row.carbs}</StyledTableCell>
                    <StyledTableCell >{row.protein}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Grid>
    )
}
