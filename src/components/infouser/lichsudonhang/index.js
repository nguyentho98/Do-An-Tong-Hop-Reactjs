import React,{useEffect} from 'react'
import { Grid, Typography,Button, Link, Avatar} from '@material-ui/core';
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
import moment from 'moment';
import { getOrderDetail ,actStateViewOrderDetail} from '../../../actions/ordersAction';
function LichSuDonHang({dataOrders,stateViewOrder,dataOrderDetail,getOrderDetail,actStateViewOrderDetail,seenOrderDetail,orderDetail}) {
    const classes = useStyles();
    const user=JSON.parse(localStorage.getItem('USER'))
    const onClickXemChiTiet  = (row) => {
      getOrderDetail(row.id)
      actStateViewOrderDetail()
      seenOrderDetail(row)
    }  
    useEffect(() => {
      return () => {
        actStateViewOrderDetail()
      }
    }, [])
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
      const Row  = () => 
            dataOrders.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell >{moment(row.created_at).format("DD MMM YYYY")}</StyledTableCell>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell >{row.total}</StyledTableCell>
              <StyledTableCell style={{textAlign:'center'}}>
                  <Button
                    variant="contained"
                    className={classes.buttonDetail}
                    onClick={()=>onClickXemChiTiet(row)}
                    >
                    Xem chi tiết
                  </Button>
              </StyledTableCell>
              </StyledTableRow>
          ))
          const RowCarts = () => {
                return (
                    dataOrderDetail.map((item, key) =>
                        <Grid container className={classes.thanhtoan_carts_item}>
                            <Grid md={3}>
                            
                                <Avatar alt="Remy Sharp" src={"http://doanekko.com:8080/public/upload/"+item.product.picture} className={classes.image}></Avatar>
                            </Grid>
                            <Grid md={5}>
                                <Typography component="h3" variant="h5" className={classes.text_name}>{item.id}</Typography>
                                <Typography style={{paddingLeft:10,fontWeight:700}}>Key Game</Typography>
                                <Typography style={{paddingLeft:10}}>DIVINE-KUCOEV8U9R6T63O</Typography>
                                <Typography style={{paddingLeft:10}}>DIVINE-KUCOEV8U9R6T63O</Typography>
                                <Typography style={{paddingLeft:10}}>DIVINE-KUCOEV8U9R6T63O</Typography>
                            </Grid>
                            <Grid md={2}>
                                <Typography> Số lượng: 1</Typography>
                            </Grid>
                            <Grid md={2}>
                            <Typography>340000 VNĐ</Typography>
                            </Grid>
                        </Grid>
                   )) 
               
        }
      const ViewOrder  = () => {
        if(stateViewOrder){
          return(
            <div>
              <Typography variant="h5" className={classes.title}>Lịch Sử Đơn Hàng</Typography>
              <hr style={{ margin: '10px auto', borderTop: '1px solid #eee' }}></hr>
              <TableContainer component={Paper} className={classes.containerTable}>
              <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell>Ngày tạo</StyledTableCell>
                      <StyledTableCell>Mã đơn hàng</StyledTableCell>
                      <StyledTableCell >Tổng tiền</StyledTableCell>
                      <StyledTableCell>Hành động</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                      <Row></Row>
                  </TableBody>
              </Table>
              </TableContainer>
            </div>
          )
        }else{
          return(
          <Grid className={classes.thanhtoan_container}>
              <div style={{borderTop: '1px solid #dddddd'}}></div>
              <Grid container className={classes.thanhtoan_carts}>
                  <RowCarts></RowCarts>
              </Grid>
              <Grid container spacing={3} className={classes.thanhtoan_action}>
                  <Grid md={6} item className={classes.thanhtoan_action_left}>
                      <Grid className={classes.border}>
                          <Grid className={classes.div_title} >
                              <Typography className={classes.title_text_02}>Thông tin đơn hàng</Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                              <Typography style={{ color: '#8e9098' }}>Mã đơn hàng: </Typography>
                              <Typography className={classes.title_text1}>{orderDetail.id} </Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                              <Typography style={{ color: '#8e9098' }}>Ngày tạo: </Typography>
                              <Typography className={classes.title_text1}>{moment(orderDetail.created_at).format("DD MMM YYYY")} </Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                              <Typography style={{ color: '#8e9098' }}>Email nhận key: </Typography>
                              <Typography className={classes.title_text1}>{orderDetail.customer.email}    </Typography>
                          </Grid>
                          
                      </Grid>
                  </Grid>
                  <Grid md={6} item className={classes.thanhtoan_action_right}>
                      <Grid className={classes.border}>
                          <Grid className={classes.div_title}  >
                              <Typography className={classes.title_text_02}>THÔNG TIN THANH TOÁN</Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                              <Typography style={{ color: '#8e9098' }}>Thành tiền sản phẩm</Typography>
                              <Typography className={classes.title_text}>0 </Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                         <Typography style={{ color: '#8e9098' }}>Mã giảm giá: </Typography>
                              <Typography className={classes.title_text}>{orderDetail.discount.code} </Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                              <Typography className={classes.title1}>TỔNG TIỀN</Typography>
                              <Typography style={{ color: 'red', marginLeft: "auto" }}>{orderDetail.total} </Typography>
                          </Grid>
                          <Grid className={classes.list_title_01}>
                              <Typography style={{ color: '#8e9098' }}>Số dư khi thanh toán</Typography>
                              <Typography className={classes.title_text}>0 </Typography>
                          </Grid>
                          
                          

                      </Grid>
                  </Grid>
                  <Grid md={12}>
                      <hr className={classes.duongke}></hr>
                      <Grid className={classes.list_title}>
                          <Link onClick={()=>actStateViewOrderDetail()} style={{textDecoration: 'none', color: 'black', padding: 5, borderRadius: 4 }}>
                                Quay lại
                          </Link>
                        
                      </Grid>
                  </Grid>
              </Grid>
          </Grid>
          )
        }
      }  
    return (
        <Grid className={classes.root}>
           <ViewOrder></ViewOrder>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataOrders: state.ordersReducer.dataOrders,
    dataOrderDetail: state.ordersReducer.dataOrderDetail,
    stateViewOrder: state.ordersReducer.stateViewOrder
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOrderDetail: (id) => {
      dispatch(getOrderDetail(id))
    },
    actStateViewOrderDetail: ()=>{
      dispatch(actStateViewOrderDetail())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LichSuDonHang)