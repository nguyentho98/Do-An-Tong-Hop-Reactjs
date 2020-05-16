import React from 'react'
import { Grid, Container, InputLabel  ,FormGroup,Link,TextField } from '@material-ui/core';
import useStyles from './styles';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const currencies = [
    {
      value: '0',
      label: 'Chọn mệnh giá thẻ',
    },
    {
        value: '20000',
        label: '20000 (Nhận được 15000 trong tài khoản)',
    },
    {
      value: '50000',
      label: '50000 (Nhận được 37500 trong tài khoản)',
    },
    {
        value: '100000',
        label: '100000 (Nhận được 75000 trong tài khoản)',
    },
    {
        value: '200000',
        label: '200000 (Nhận được 150000 trong tài khoản)',
    },
    {
        value: '500000',
        label: '500000 (Nhận được 375000 trong tài khoản)',
    },
   
]
 function ViewNapViettel({loggedIn}) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('0');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const ContentView  = () => {
        if(loggedIn){
            return(
                <Grid className={classes.root}>
                    <Container maxWidth="md" className={classes.container_viewnapviettel}>
                    <Grid>
                            <InputLabel className={classes.inputLabel} htmlFor="my-input">Số seri thẻ :</InputLabel> 
                            <TextField
                                select
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                            
                                className={classes.inputSelect}
                                variant="outlined"
                                >
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                            </TextField>
                            <FormGroup className={classes.formGroup}>
                                <InputLabel className={classes.inputLabel} htmlFor="my-input">Số seri thẻ :</InputLabel> 
                                <TextField id="outlined-basic" placeholder="Vui lòng nhập số seri thẻ" variant="outlined" />
                            </FormGroup >
                            <FormGroup className={classes.formGroup}>
                                <InputLabel className={classes.inputLabel} htmlFor="my-input">Mã thẻ: </InputLabel> 
                                <TextField id="outlined-basic" placeholder="Vui lòng nhập mã thẻ" variant="outlined" />
                            </FormGroup >
                        </Grid>
                        <Grid >
                            <Grid className={classes.btn_title_text}>
                                Nạp thẻ
                            </Grid>
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
        <ContentView></ContentView>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        loggedIn: state.loginReducer.loggedIn
    }
}
export default connect(mapStateToProps, null)(ViewNapViettel)