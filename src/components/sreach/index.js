import React from 'react'
import { Grid, Container, Typography, TextField } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import Products from './../products/index';
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
const currencies1 = [
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
function valuetext(value) {
    return `${value}°C`;
  }
function Sreach({match}) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('0');
    const [value, setValue] = React.useState([0, 100]);

    const handleChange01 = (event, newValue) => {
      setValue(newValue);
    };
   
    const handleChange02 = (event) => {
      setCurrency(event.target.value);
    };
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_sreach}>
                <Grid className={classes.contenttitle}>
                    <Typography variant="h5" className={classes.title}>Tìm Kiếm Sản Phẩm</Typography> 
                </Grid>
                <Grid container spacing={4}> 
                    <Grid md="4" item>
                         <TextField id="outlined-basic" placeholder="Nhập từ khóa tìm kiếm" variant="outlined"  className={classes.inputSreach}/>
                    </Grid>
                    <Grid md="4" item>
                        <TextField
                            select
                            value={currency}
                            onChange={handleChange02}
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
                    </Grid>
                    <Grid md="4" item>
                        <TextField
                            select
                            value={currency}
                            onChange={handleChange02}
                            SelectProps={{
                                native: true,
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
                    </Grid>
                </Grid>
                <Grid container>
                   <Grid md="2"> 
                         <Typography>Thiết lập giá tiền</Typography>
                   </Grid>
                   <Grid md="10">
                        
                        <Slider
                                value={value}
                                onChange={handleChange01}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                            />
                    </Grid>
                       
                </Grid>
                <Products match={match}></Products>
            </Container>
        </Grid>
    )
}

export default connect(null, null)(Sreach)