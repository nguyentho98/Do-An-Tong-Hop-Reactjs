import React from 'react'
import { Grid,Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import product1 from '../../utils/images/product1.jpg';
import product2 from '../../utils/images/product2.jpg';
import product3 from '../../utils/images/product3.jpg';
import product4 from '../../utils/images/product4.jpg';
import product9 from '../../utils/images/product9.jpg';
import product6 from '../../utils/images/product6.jpg';
import product7 from '../../utils/images/product7.jpg';
import product8 from '../../utils/images/product8.jpg';
const dataProducts=[
   {
    img:product1,
    name:'Grand Theft Auto V - GTA V',
    price:459000,
    status:1,
   },
   {
    img:product2,
    name:'ARK: Survival Evolved',
    price:459000,
    status:1,
   },
   {
    img:product4,
    name:'Battle.net Code 20$',
    price:459000,
    status:1,
   },
   {
    img:product6,
    name:'Minecraft Windows 10 Edition ',
    price:459000,
    status:1,
   },
   {
    img:product7,
    name:"PlayerUnknown's Battlegrounds PUBG CDKEY",
    price:459000,
    status:1,
   },
   {
    img:product8,
    name:'Battlefield 1',
    price:459000,
    status:1,
   },
   {
    img:product9,
    name:'Overwatch Standard Edition',
    price:459000,
    status:1,
   },
   {
    img:product3,
    name:'Left 4 Dead 2',
    price:459000,
    status:1,
   },

]
export default function Products() {
    const classes = useStyles();
        return (
         <Grid>
             <Container maxWidth="md" className={classes.container_product}>
                 
                 <Grid className={classes.list_title}>
                    <Typography component="h3" variant="h5" className={classes.title}>Sản phẩm nổi bật</Typography>
                 </Grid>
                <Grid container spacing={3}>
                {dataProducts.map((options) => ( 
                    <Grid md={3} item>
                        <Card className={classes.card_root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={options.img}
                                title="Contemplative Reptile"
                                className={classes.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom   className={classes.text_name}>
                                            {options.name}
                                    </Typography>
                                    <Typography gutterBottom  className={classes.text_price}>
                                            {options.price}đ
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                          
                               
                                <Grid className={classes.grid_cart}>
                                    <ShoppingCartIcon className={classes.btn_iconcart} />
                                   
                                    <Grid  className={classes.btn_cart}>
                                        Mua ngay
                                    </Grid>

                                </Grid>
                                
                           
                        </Card>
                    </Grid>
                ))}
                </Grid>   
                <Grid className={classes.text_load_sp}>
                    Tải thêm sản phẩm
                </Grid> 
                <hr className={classes.duongke}></hr>
             </Container>
         </Grid>
        )
}
