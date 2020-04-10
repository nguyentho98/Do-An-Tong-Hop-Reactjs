import React from 'react'
import { Grid,Avatar,Container } from '@material-ui/core';
import useStyles from './styles';
import anh6 from '../../utils/images/trader1.png';
import anh7 from '../../utils/images/trader2.png';
import anh8 from '../../utils/images/trader3.png';
export default function QuickView() {
    const classes = useStyles();
        return (
         <Grid>
             <Container maxWidth="md" className={classes.container_quickview}>
                <Grid container>
                    <Grid md={4}>
                        <Avatar alt="Remy Sharp" src={anh6} className={classes.image}></Avatar>
                    </Grid>
                    <Grid md={4}>
                        <Avatar alt="Remy Sharp" src={anh7} className={classes.image}></Avatar>
                    </Grid>
                    <Grid md={4}>
                        <Avatar alt="Remy Sharp" src={anh8} className={classes.image}></Avatar>
                    </Grid>
                </Grid>  
                <hr className={classes.duongke}></hr>  
             </Container>
         </Grid>
        )
}
