import React, { useEffect } from 'react'
import { Grid, Container, Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import {  NavLink ,Redirect} from "react-router-dom";
import { fetchDataProduct } from '../../actions/ProductAction';
import { actAddToCart } from '../../actions/CartAction';
import { connect } from 'react-redux'
import { history } from './../../reducers/history';

function Products({ appDataDT, fetchDataProduct, addCartSuceess, actAddToCart ,match}) {
    const classes = useStyles();
    
    useEffect(() => {
        fetchDataProduct()
    }, [])

    const onClickAddCartSuccess = (item) => {
        addCartSuceess()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        actAddToCart(item)
    }
    const onClickAddCarts = (item) => {
        // actAddToCart(item)
        console.log("xin chào");
        if(localStorage.getItem('USER')){
            console.log("xin chào1");
            return history.push("/cart");
        }else{
            console.log("xin chào2");
            return history.push("/login");
        }
    }
    const ViewProducts = () =>
        appDataDT.map((items, key) => (
           
            <Grid md={3} item key={key}>
                
                <Card className={classes.card_root}>
                    <Grid className={classes.cardaction}>
                        <NavLink to={`product/${items.id}`} style={{textDecoration:'none',color:'black'}}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={"http://localhost:1337" + items.ProPicture.url}
                            title="Contemplative Reptile"
                            className={classes.img}
                        />
                        <CardContent className={classes.cardcontent}>
                            <Typography gutterBottom className={classes.text_name}>
                                {items.ProName}
                            </Typography>
                            <Typography gutterBottom className={classes.text_price}>
                                {items.ProPrice}đ
                                </Typography>
                        </CardContent>
                        </NavLink>
                    </Grid>
                        <Grid className={classes.grid_cart}>
                            <ShoppingCartIcon onClick={(a) => onClickAddCartSuccess(items)} className={classes.btn_iconcart} />
                            <Link  className={classes.btn_cart} onClick={() => onClickAddCarts(items)} >
                                Mua ngay
                            </Link>
                        </Grid>
                </Card>
            </Grid>
           
        ))
    return (
        <Grid>
            <Container maxWidth="md" className={classes.container_product}>

                <Grid className={classes.list_title}>
                    <Typography component="h3" variant="h5" className={classes.title}>Sản phẩm nổi bật</Typography>
                </Grid>
                <Grid container spacing={3}>
                    <ViewProducts></ViewProducts>
                </Grid>
                <Grid className={classes.text_load_sp}>
                    Tải thêm sản phẩm
                </Grid>
                <hr className={classes.duongke}></hr>
            </Container>
        </Grid>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        appDataDT: state.productReducer.dataProduct,
        cartSuccess: state.productReducer.cartSuccess,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchDataProduct: () => dispatch(fetchDataProduct()),
        addCartSuceess: () => dispatch({ type: "addCart" }),
        actAddToCart: (payload) => {
            dispatch(actAddToCart(payload, 1))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)