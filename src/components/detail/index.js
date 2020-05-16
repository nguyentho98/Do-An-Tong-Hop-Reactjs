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
function Detail({ fetchDetail, item, match,addCartSuceess,actAddToCart,actAddToCartMuaNgay ,addCartClose}) {
    const classes = useStyles();
    const [sateQuantity, setSateQuantity] = useState(1)
    console.log(item);
    useEffect(() => {
        fetchDetail(match.params.id)   
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
    }
    const onClickAddCarts = (item) => {
        if(localStorage.getItem('USER')){
            actAddToCartMuaNgay(item)
            return history.push("/cart");
        }else{
            actAddToCartMuaNgay(item)
            return history.push("/login");
        }
       
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
                        {item.ProName}
                    </Link>
                </Breadcrumbs>
                <Grid className={classes.container_title_detail_product}>
                    <Typography className={classes.title_detail_product}>{item.ProName}</Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid md={6} item>
                        <Carousel showArrows={true}>
                            <div>
                                <img src={"http://localhost:1337" +item.ProPicture?.url } alt="xin chào" />
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
                            <NumberFormat className={classes.price} value={item.ProPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className={classes.price}>{value}</div>} />
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
                        Trò chơi nằm trong mạch truyện chính của series Grand Theft Auto, mạch truyện này được tính là từ khi bắt đầu nội dung của trò chơi Grand Theft Auto IV (2008), không liên hệ nội dung đến các phần trước Grand Theft Auto IV. Nằm trong tiểu bang hư cấu San Andreas, mô phỏng Nam California, câu chuyện nói về ba tên tội phạm và nỗ lực của họ trong việc thực hiện các cuộc tấn công trong thế giới ngầm bên cạnh là chống lại chính phủ và các thế lực khác. Trò chơi được thiết kế theo kiểu thế giới mở cho phép người chơi tự do đi khắp nơi, các vùng nông thôn, rừng núi, hoang mạc và thành phố hư cấu Los Santos, mô phỏng thành phố Los Angeles ngoài đời.
                        Trò chơi hỗ trợ chơi theo góc nhìn thứ nhất (FPS - First Person Shooter) và thứ ba (TPS - Third Person Shooter), di chuyển trong thế giới bằng cách điều hướng chân để đi bộ hoặc phương tiện giao thông. Người chơi điều khiển ba nhân vật chính xuyên suốt trò chơi và có thể chuyển đổi điều khiển qua lại giữa các nhân vật ở ngoài hoặc trong nhiệm vụ (một số phân đoạn trong nhiệm vụ buộc người chơi phải điều khiển một nhân vật nhất định hoặc phải chuyển đổi sang nhân vật khác). Câu chuyện chủ yếu xoay quanh những việc của tội phạm như trộm cướp, đánh nhau, liên hệ đến việc bắn súng và lái xe. Hệ thống cảnh sát trong trò chơi sẽ luôn cố gắng kiểm soát người chơi khi thực hiện những hành vi tội ác đến mức độ nào đó bằng cách bắt vào tù hoặc giết, số sao truy nã (tối đa là năm sao) càng cao thì mức độ nguy hiểm của cảnh sát đối với nhân vật càng tăng, tương tự như những phần Grand Theft Auto trước đó. Grand Theft Auto Online , chế độ chơi trực tiếp nhiều người chơi, cho phép lên đến 30 người chơi cùng khám phá thế giới, làm nhiệm vụ, tham gia các trò chơi như đánh nhau, đua xe,...
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
        item: state.detailReducer.detail
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
