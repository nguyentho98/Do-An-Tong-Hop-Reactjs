import React, { useEffect,useState } from 'react'
import { Grid, Container, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import icon1 from '../../utils/images/icon1.png';
import icon2 from '../../utils/images/icon2.png';
import icon3 from '../../utils/images/icon3.png';
import { Carousel } from 'react-responsive-carousel';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { fetchDetail } from '../../actions/detailAction';
import { actUpdateProductToCart } from './../../actions/cartAction';
import { actAddToCart } from '../../actions/cartAction';
import { NavLink } from 'react-router-dom';
import { history } from './../../reducers/history';
function Detail({ fetchDetail, item, match,addCartSuceess,actAddToCart,actAddToCartMuaNgay ,addCartClose,actCountQuantityCart, dataCart}) {
    const classes = useStyles();
    const [sateQuantity, setSateQuantity] = useState(1)
    console.log(item);
    useEffect(() => {
        fetchDetail(match.params.id)  
        actCountQuantityCart(countQuantityCart()) 
    }, [])
    const onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            setSateQuantity(quantity)
           
        }
    }
   
    const onClickAddCartSuccess = (item,quantity) => {
        addCartSuceess(item)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setTimeout(()=>addCartClose(),3000)
        actAddToCart(item,quantity)
        actCountQuantityCart(countQuantityCart())
    }
    const onClickAddCarts = (item) => {
        if(localStorage.getItem('USER')){
            actAddToCartMuaNgay(item)
            actCountQuantityCart(countQuantityCart())
            return history.push("/cart");
        }else{
            actAddToCartMuaNgay(item)
            actCountQuantityCart(countQuantityCart())
            return history.push("/login");
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
        item !== undefined &&
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_detail}>
                <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: 5 }}>
                    <Link color="inherit" href="/" >
                        <HomeIcon className={classes.icon} />
                    </Link>
                    <Link color="inherit" href="/" >
                        {item.name}
                    </Link>
                </Breadcrumbs>
                <Grid className={classes.container_title_detail_product}>
                    <Typography className={classes.title_detail_product}>{item.name}</Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid md={6} item>
                        <Carousel showArrows={true}>
                            <div>
                                <img src={"http://doanekko.com:8080/public/upload/" +item.picture } alt="xin chào" />
                            </div>
                        </Carousel>
                    </Grid>
                    <Grid md={6} item>
                        <Grid container className={classes.info_detail}>
                            <Grid item md={4} className={classes.info_detail_item}>
                                <Grid className={classes.div_icon_img}>
                                    <Avatar src={icon1} className={classes.icon_img}></Avatar>
                                </Grid>
                                <Grid className={classes.text_wrap}>
                                    <Typography className={classes.text_wrap1}>Mã sản phẩm</Typography>
                                    <Typography className={classes.text_wrap2} style={{ fontSize: 12, fontWeight: 'blod' }}>{item.id}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={4} className={classes.info_detail_item}>
                                <Grid className={classes.div_icon_img}>
                                    <Avatar src={icon2} className={classes.icon_img}></Avatar>
                                </Grid>
                                <Grid className={classes.text_wrap}>
                                    <Typography className={classes.text_wrap1}>Tình trạng</Typography>
                                    <Typography className={classes.text_wrap2} style={{ color: '#53af2e' }}>Còn hàng</Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={4} className={classes.info_detail_item}>
                                <Grid className={classes.div_icon_img}>
                                    <Avatar src={icon3} className={classes.icon_img}></Avatar>
                                </Grid>
                                <Grid className={classes.text_wrap}>
                                    <Typography className={classes.text_wrap1}>Link gốc</Typography>
                                    <Link style={{ color: '#337ab7' }}>Sản phẩm</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.price_text}>GIÁ SẢN PHẨM</Grid>
                        <Grid className={classes.price_new}>
                            <NumberFormat className={classes.price} value={item.price} displayType={'text'} thousandSeparator={true}  renderText={value => <div className={classes.price}>{value}</div>} /> 
                        </Grid>
                        <hr style={{ margin: '10px auto', borderTop: '1px solid #ccc' }}></hr>
                        <Grid>
                            <Grid className={classes.quantity_text}>Số lượng :</Grid>
                            <Button variant="contained" color="" className={classes.btn_remove} onClick={() => onUpdateQuantity(item, sateQuantity - 1)}>-</Button>
                            <Typography variant="contained" className={classes.text_soluong}>{sateQuantity}</Typography>
                            <Button variant="contained" color="" className={classes.btn_add} onClick={() => onUpdateQuantity(item, sateQuantity + 1)}>+</Button>
                            <Link className={classes.btn_muangay}>   
                                <Button
                                    variant="contained"
                                    className={classes.buttonMuaNgay}
                                    onClick={() => onClickAddCarts(item)}
                                >
                                    Mua ngay
                                </Button>
                            </Link>
                         
                            <Button
                                variant="contained"
                                className={classes.buttonADD}
                                startIcon={<ShoppingCartIcon />}
                                onClick={()=>onClickAddCartSuccess(item,sateQuantity)}
                            >
                                Thêm vào giỏ
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                <hr style={{ border: '0.5px solid #aaa4a4', marginTop: 20, marginBottom: 20 }}></hr>
                <Grid>
                    <Typography className={classes.chitietsanpham}>Chi Tiết Sản Phẩm</Typography>
                    <Typography variant="body2" gutterBottom>
                        {item.info}
                     </Typography>
                </Grid>
                <hr style={{ border: '0.5px solid #aaa4a4', marginTop: 20, marginBottom: 20 }}></hr>
                <Grid>
                    <Typography className={classes.chitietsanpham}>Đánh Giá Sản Phẩm</Typography>

                </Grid>
            </Container>

        </Grid>

    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        item: state.detailReducer.detail,
        dataCart: state.cartReducer.dataCart,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchDetail: (id) => {
            dispatch(fetchDetail(id))
        },
        addCartSuceess: (item) => dispatch({ type: "addCart",item }),
        addCartClose: () => dispatch({ type: "addCartClose" }),
        actAddToCart: (payload,quantity) => {
            dispatch(actAddToCart(payload, quantity))
        },
        actAddToCartMuaNgay: (payload,quantity) => {
            dispatch(actAddToCart(payload, 1))
        },
        actCountQuantityCart: (payload) => dispatch({ type: "actCountQuantityCart" ,payload}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
