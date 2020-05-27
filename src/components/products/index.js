import React, { useEffect,useState } from 'react'
import { Grid, Container, Link } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import {  NavLink ,Redirect} from "react-router-dom";
import { getLimitDataProduct ,actProductLimit,getAllDataProduct} from '../../actions/productAction';
import { actAddToCart } from '../../actions/cartAction';
import { connect } from 'react-redux'
import { history } from './../../reducers/history';


function Products({limitData,allData,actCountQuantityCart,viewLoadMore,dataCart,getAllDataProduct, page,getLimitDataProduct, addCartSuceess, actAddToCart ,addCartClose,limit,actProductLimit}) {
    const classes = useStyles();
        useEffect(() => {
            actCountQuantityCart(countQuantityCart())
        }, [limitData])
    
    const onClickAddCartSuccess = (item) => {
        addCartSuceess(item)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        actAddToCart(item)
        setTimeout(()=>addCartClose(),3000)
        actCountQuantityCart(countQuantityCart())
    }
    const onClickAddCarts = (item) => {
        actAddToCart(item)
        
        if(localStorage.getItem('USER')){
            actCountQuantityCart(countQuantityCart())
            return history.push("/cart");
            
        }else{
            actCountQuantityCart(countQuantityCart())
            return history.push("/login");
           
        }
    }
    const onClickGetProductLimit  = () => {
        actProductLimit()
        // actloadMore()
    }
    // const actloadMore  = () => {
    //     if(limit > obj){
    //         viewLoadMore()
    //     }
    // }
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
    const ViewProducts = () =>
        limitData.map((items, key) => (
           
            <Grid md={3} item key={key}>
                
                <Card className={classes.card_root}>
                    <Grid className={classes.cardaction}>
                        <NavLink to={`product/${items.id}`} style={{textDecoration:'none',color:'black'}}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={"http://doanekko.com:8080/public/upload/" + items.picture}
                            title="Contemplative Reptile"
                            className={classes.img}
                        />
                        <CardContent className={classes.cardcontent}>
                            <Typography gutterBottom className={classes.text_name}>
                                {items.name}
                            </Typography>
                            <Typography gutterBottom className={classes.text_price}>
                                {items.price}đ
                                </Typography>
                        </CardContent>
                        </NavLink>
                    </Grid>
                        <Grid className={classes.grid_cart}>
                            <ShoppingCartIcon onClick={(a) => onClickAddCartSuccess(items)} className={classes.btn_iconcart} />
                            <Link href=""  className={classes.btn_cart} onClick={() => onClickAddCarts(items)} >
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
                { <Grid className={classes.text_load_sp} onClick={()=>onClickGetProductLimit()}>
                 Tải thêm sản phẩm
                </Grid>}
                <hr className={classes.duongke}></hr>
            </Container>
        </Grid>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartSuccess: state.productReducer.cartSuccess,
        loadMore: state.productReducer.loadMore,
        dataCart: state.cartReducer.dataCart,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actProductLimit: () => dispatch(actProductLimit()),
        addCartSuceess: (item) => dispatch({ type: "addCart",item }),
        addCartClose: () => dispatch({ type: "addCartClose" }),
        viewLoadMore: () => dispatch({ type: "viewLoadMore" }),
        actCountQuantityCart: (payload) => dispatch({ type: "actCountQuantityCart" ,payload}),
        actAddToCart: (payload) => {
            dispatch(actAddToCart(payload, 1))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)