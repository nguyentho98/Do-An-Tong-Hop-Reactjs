import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography, Avatar, Button ,Link} from '@material-ui/core';
import { NavLink } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { actRemoveProductToCart,actUpdateProductToCart,fetchDataMaGG,actSubThongTinUser,actThongTinUser } from '../../actions/cartAction';
import { connect } from 'react-redux';
import { history } from './../../reducers/history';
import { checkUserThanhToan } from '../../actions/userAction';
import { postOrders } from '../../actions/ordersAction';
function Carts({ dataCart,
     actRemoveProductToCart, 
     actUpdateProductToCart,
     actFetchDataMaGG,
     dataMaGG,
     user,
     actSubThongTinUser,
     actcheckUserThanhToan,
     actCountQuantityCart,
     actPostOrders,
     loggedIn,
     checkUserThanhToan}) {
    const classes = useStyles();
    const [sateQuantity, setSateQuantity] = useState(1) // số lượng sản phẩm
    const [sateMagGiamGia, setSateMagGiamGia] = useState(0) // 0 là ko hiện gì, 1 là có mã giảm giá , 2 là mã giảm giá ko tồn tại
    const [sateViewBtnThanhToan, setSateViewBtnThanhToan] = useState(false) 
    const [sateTemp, setSateTemp] = useState([]) // kết quả tìm kiếm của mã giảm giá
    const [searchMaGiamGia, setSearchMaGiamGia] = useState("");// mã giảm giá
    const [open, setOpen] = useState(false); // status diglog
    const surplus=JSON.parse(localStorage.getItem('USER'))// số dư trong tài khoản
    useEffect(() => {
        window.scrollTo(0, 0)
        actFetchDataMaGG()
        actCountQuantityCart(countQuantityCart())
    }, [])
    const handleChange = event => {
        setSearchMaGiamGia(event.target.value);
      };
    const RowCarts = () => {
        if (dataCart.length > 0) {
            return (
                dataCart.map((item, key) =>
                    <Grid container className={classes.thanhtoan_carts_item}>
                        <Grid md={3}>
                            <Avatar alt="Remy Sharp" src={"http://doanekko.com:8080/public/upload/" + item.product.picture} className={classes.image}></Avatar>
                        </Grid>
                        <Grid md={5}>
                            <Typography component="h3" variant="h5" className={classes.text_name}>{item.product.name}</Typography>
                            <Typography className={classes.text_stats}>Tình trạng: <span className={classes.text_stats_sub_01}>Còn hàng</span></Typography>
                            <Typography className={classes.text_delete} onClick={() => onDelete(item.product)} variant="overline">Xoá</Typography>
                        </Grid>
                        <Grid md={2}>
                            <Typography className={classes.text_price}>{item.product.price} VNĐ</Typography>
                        </Grid>
                        <Grid md={2}>
                            <Button variant="contained" color="" className={classes.btn_remove}
                                onClick={() => onUpdateQuantity(item.product, item.quantity - 1)}
                            >-</Button>
                            <Typography variant="contained" className={classes.text_soluong}>{showQuantity(item.quantity)}</Typography>
                            <Button variant="contained" color="" className={classes.btn_add}
                                onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}
                            >+</Button>
                        </Grid>
                    </Grid>
                ))
        } else {
            return (
                <div style={{ textAlign: 'center', marginTop: 10, width: '100%' }}>
                    <Typography variant="body1">Chưa có sản phẩm nào ! bạn quay lại trang chủ nha </Typography>
                </div>
            )
        }
    }
    const showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity
            }
        }
        return total;
    }
    const onDelete = (product) => {
        actCountQuantityCart(countQuantityCart())
        actRemoveProductToCart(product)  
    }
    const onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            setSateQuantity(quantity)
            actUpdateProductToCart(product, quantity)
            actCountQuantityCart(countQuantityCart())
        }
    }
    const showQuantity = (a) => {
        if (a > 0) {
            return a
        } else {
            return sateQuantity
        }
    }
    const showTongTien = (cart) => {
        var total = 0;
        if(sateTemp.length>0){
            if (cart.length > 0) {
                for (let i = 0; i < cart.length; i++) {
                    total += cart[i].product.price * cart[i].quantity
                }
            }
            total=total-sateTemp[0].money
        }else{
            if (cart.length > 0) {
                for (let i = 0; i < cart.length; i++) {
                    total += cart[i].product.price * cart[i].quantity
                }
            } 
        }
        return total;
    }
    const onClickSearchMaGG  = () => {
        var temp =  dataMaGG.filter(item => item.code === searchMaGiamGia)  
        setSateTemp(temp)
        if(temp.length>0){
            setSateMagGiamGia(1)
        }else{
            setSateMagGiamGia(2)
        }    
    }
    const ViewMaGiamGia  = () => {
        if(sateMagGiamGia===1){
        return <Grid style={{textAlign:'center',marginBottom: 14}}>Số tiền đc giảm của {sateTemp[0].money}</Grid>
        }else if(sateMagGiamGia===2){
            return <Grid style={{textAlign:'center',marginBottom: 14}}>Mã giảm giá không tồn tại</Grid>
        }else{
            return <Grid></Grid>
        }
    }
    const checkSoDu  = (cart) => {
        var total = 0;
        var surplus=user ? user.money : 0;
        var sotiencannap=0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity
            }
            if(total>surplus){
                setSateViewBtnThanhToan(false)
                sotiencannap=total-surplus
            }else{
                setSateViewBtnThanhToan(true)
                sotiencannap=surplus-total
            }
        } 
        return sotiencannap;
    }
    const onClickThanhToan  = () => {
        const order={}
        order.total=showTongTien(dataCart);
        order.payments=0;
        order.CusID=5;
        order.DisID=1;
        order.status=1;
        if(checkUserThanhToan){
            actPostOrders(order)
        }else{
            actSubThongTinUser()
            actThongTinUser()
            history.push("/info");
        }   
    }
    
    const ViewBtnThanhToan  = ({item}) => {
        if(sateViewBtnThanhToan){
            return (
                <div>
                     <Grid className={classes.list_title_01}>
                        <Typography style={{ color: '#8e9098' }}>Số dư còn lại sau khi thanh toán </Typography>
                        <Typography className={classes.title_text}>{checkSoDu(item)}</Typography>
                    </Grid>
                    <Grid className={classes.btn_thanhtoan} onClick={()=>onClickThanhToan()}>
                        <Link className={classes.btn_thanhtoan_text}>
                            Thanh Toán
                        </Link>
                    </Grid>
                </div>
            )
        }else{
            return(
                <div>
                    <Grid className={classes.list_title_01}>
                    <Typography className={classes.title_naptien}>SỐ TIỀN CẦN NẠP THÊM</Typography>
                    <Typography style={{ color: 'red', marginLeft: "auto" }}>{checkSoDu(item)} </Typography>
                    </Grid>
                    <Grid className={classes.btn_napthemtien}>
                        <NavLink to="/phuongthucthanhtoan" className={classes.btn_napthemtien_text}>
                            Nạp Thêm Tiền
                        </NavLink>
                    </Grid>
                </div>
            )
        }
    }
    const ViewBtnThanhToanChuaLogin  = () => {
        if(loggedIn){
            return <Grid></Grid>
        }else{
            return (
                <NavLink to="/login" className={classes.btn_title_text}>
                    Thanh Toán
                </NavLink>     
            )
        }
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
    return (
        <Grid>
            <Container maxWidth="md" className={classes.container_carts}>
                <Grid className={classes.list_title}>
                    <Typography component="h3" variant="h5" className={classes.title}>Giỏ Hàng </Typography>
                    <span style={{ fontSize: 13, marginLeft: 5 }}> (2 sản phẩm) </span>
                    <NavLink to="/" className={classes.btn_title_text}>
                        Tiếp tục mua hàng
                    </NavLink>
                </Grid>
                <hr className={classes.duongke}></hr>
                <Grid className={classes.thanhtoan_container}>
                    <div style={{borderTop: '1px solid #dddddd'}}></div>
                    <Grid container className={classes.thanhtoan_carts}>
                        <RowCarts></RowCarts>
                    </Grid>
                    <Grid container spacing={3} className={classes.thanhtoan_action}>
                        <Grid md={6} item className={classes.thanhtoan_action_left}>
                            <Grid className={classes.border}>
                                <Grid className={classes.div_title} >
                                    <Typography className={classes.title_text_02}>MÃ GIẢM GIÁ</Typography>
                                </Grid>
                                <Grid className={classes.search}>
                                   
                                    <InputBase
                                        placeholder="Nhập mã giảm giá..."
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' } }
                                        value={searchMaGiamGia}
                                        onChange={handleChange}  
                                    />
                                    <IconButton className={classes.iconButton} aria-label="search" onClick={()=>onClickSearchMaGG()}>
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <ViewMaGiamGia></ViewMaGiamGia>
                                
                            </Grid>
                        </Grid>
                        <Grid md={6} item className={classes.thanhtoan_action_right}>
                            <Grid className={classes.border}>
                                <Grid className={classes.div_title}  >
                                    <Typography className={classes.title_text_02}>THÔNG TIN THANH TOÁN</Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography style={{ color: '#8e9098' }}>Thành tiền sản phẩm</Typography>
                                    <Typography className={classes.title_text}>{showTotalAmount(dataCart)} </Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography className={classes.title}>TỔNG TIỀN</Typography>
                                    <Typography style={{ color: 'red', marginLeft: "auto" }}>{showTongTien(dataCart)} </Typography>
                                </Grid>
                                <Grid className={classes.list_title_01}>
                                    <Typography style={{ color: '#8e9098' }}>Số dư hiện tại</Typography>
                                    <Typography className={classes.title_text}>{user?user.money:0} </Typography>
                                </Grid>
                                <ViewBtnThanhToan item={dataCart}></ViewBtnThanhToan>
                                

                            </Grid>
                        </Grid>
                        <Grid md={12}>
                            <hr className={classes.duongke}></hr>
                            <Grid className={classes.list_title}>
                                <Link to="/" style={{ border: '1px solid #DDD', textDecoration: 'none', color: 'black', padding: 5, borderRadius: 4 }}>
                                    Tiếp tục mua hàng
                                </Link>
                               <ViewBtnThanhToanChuaLogin></ViewBtnThanhToanChuaLogin>      
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
               
            </Container>
        </Grid>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        dataCart: state.cartReducer.dataCart,
        dataMaGG: state.cartReducer.dataMaGG,
        user: state.loginReducer.user,
        checkUserThanhToan: state.userReducer.checkUserThanhToan,
        loggedIn: state.loginReducer.loggedIn
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actRemoveProductToCart: (payload) => {
            dispatch(actRemoveProductToCart(payload))
        },
        actUpdateProductToCart: (product, quantity) => {
            dispatch(actUpdateProductToCart(product, quantity))
        },
        actFetchDataMaGG: () => {
            dispatch(fetchDataMaGG())
        },
        actSubThongTinUser:() => {
            dispatch(actSubThongTinUser())
        },
        actThongTinUser:() => {
            dispatch(actThongTinUser())
        },
        actCheckUserThanhToan:() => {
            dispatch(checkUserThanhToan())
        },
        actPostOrders:(order) => {
            dispatch(postOrders(order))
        },
        actCountQuantityCart: (payload) => dispatch({ type: "actCountQuantityCart" ,payload}),
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carts)