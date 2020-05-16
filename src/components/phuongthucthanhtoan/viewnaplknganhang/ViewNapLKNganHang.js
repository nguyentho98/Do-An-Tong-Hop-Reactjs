import React from 'react'
import { Grid, Container, InputLabel ,FormGroup,InputBase } from '@material-ui/core';
import useStyles from './styles';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function ViewNapLKNganHang({loggedIn}) {
    const classes = useStyles();
    const ContentView  = () => {
        if(loggedIn){
            return(
                <Grid className={classes.root}>
                    <Container maxWidth="md" className={classes.container_viewnaplknganhang}>
                        <Grid>
                            
                        </Grid>
                    </Container>
                </Grid>
            )
        }else{
           return(
            <Grid>
                 <NavLink to="/login" className={classes.btn_title_text}>
                        Đăng Nhập
                </NavLink>
            </Grid>
           )
        }
    }
    return (
       <ContentView/>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    }
}
export default connect(mapStateToProps, null)(ViewNapLKNganHang)