import React,{useEffect} from 'react'
import { Grid, Container, Typography, TextField,Button } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import Products from '../products/index';
import { withStyles } from '@material-ui/core/styles';
import { fetchSearch } from '../../actions/searchAction';
const currencies = [
    {
      value: '0',
      label: 'Tất cả danh mục',
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
      label: 'Mặc định',
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

const CusSlider = withStyles((theme) => ({
    thumb:{
        width:18,
        height:18,
    },
    track:{
        height:8,
    },
    rail:{
        height:8,
    },
    root:{
        color:'#8392e7'
    }
}))(Slider);

function Search({match,fetchSearch,dataSearch,page,limit}) {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('0');
    const [currency1, setCurrency1] = React.useState('0');
    const [value, setValue] = React.useState([0, 100]);
    useEffect(() => {
        fetchSearch(match.params.category_id,page,limit)
    }, [match.params.category_id,page])
    const handleChange01 = (event, newValue) => {
      setValue(newValue);
    };
   
    const handleChange02 = (event) => {
      setCurrency(event.target.value);
    };
    const handleChange03 = (event) => {
      setCurrency1(event.target.value);
    };
    return (
        <Grid className={classes.root}>
            <Container maxWidth="md" className={classes.container_sreach}>
                <Grid className={classes.contenttitle}>
                    <Typography variant="h5" className={classes.title}>Tìm Kiếm Sản Phẩm</Typography> 
                </Grid>
                <Grid container spacing={4}> 
                    <Grid md="4" item>
                         <TextField id="outlined-basic" placeholder="Nhập từ khóa tìm kiếm..." variant="outlined"  className={classes.inputSreach}/>
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
                            value={currency1}
                            onChange={handleChange03}
                            SelectProps={{
                                native: true,
                            }}
                            
                            className={classes.inputSelect}
                            variant="outlined"
                            >
                        {currencies1.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container className={classes.contentThietLapGia}>
                   <Grid md="2"> 
                         <Typography className={classes.tittleThietLapGia}>Thiết lập giá tiền</Typography>
                   </Grid>
                   <Grid md="10"  className={classes.contentSlider}>
                        <Typography className={classes.min}>{value[0]}</Typography>
                        <CusSlider
                                value={value}
                                onChange={handleChange01}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valuetext}
                                className={classes.slider}
                            />
                        <Typography className={classes.max}>{value[1]}</Typography>
                        <Button
                            variant="contained"
                            className={classes.buttonFilter}
                            startIcon={<i className="fa fa-filter" style={{fontSize:'16px'}} aria-hidden="true"></i>}  
                        >
                        Lọc
                        </Button>
                    </Grid>
                       
                </Grid>
                <Products match={match} limitData={dataSearch}></Products>
            </Container>
        </Grid>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        dataSearch: state.searchReducer.dataSearch,
        page: state.productReducer.page,
        limit: state.productReducer.limit,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchSearch: (category_id,page,limit) => {
            dispatch(fetchSearch(category_id,page,limit))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
