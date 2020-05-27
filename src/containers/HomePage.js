import React,{useEffect} from 'react';
import Headers from '../components/headers/';
import Home from '../components/homepage';
import QuickView from '../components/quickview';
import Products from '../components/products';
import Footer from '../components/footer';
import Linhtinh from '../components/linhtinh';
import Alerts from '../components/alerts';
import { connect } from 'react-redux';
import { getAllDataProduct,getLimitDataProduct } from '../actions/productAction';
function HomePage ({match,limitDataProduct,allDataProduct,limit,page,getLimitDataProduct,getAllDataProduct})  {
  useEffect(() => {
    getLimitDataProduct(page,limit)
    getAllDataProduct()
  }, [page])
  return (
        <div>
            <Headers></Headers>
            <Alerts></Alerts>
            <Home></Home>
            <QuickView></QuickView>
            <Products limitData={limitDataProduct} allData={allDataProduct}></Products>
            <Linhtinh></Linhtinh>
            <Footer></Footer>
        </div>  
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
      limitDataProduct: state.productReducer.limitDataProduct,
      allDataProduct: state.productReducer.allDataProduct,
      limit: state.productReducer.limit,
      page: state.productReducer.page,
  }
}
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLimitDataProduct: (page,limit) => dispatch(getLimitDataProduct(page,limit)),
        getAllDataProduct: () => dispatch(getAllDataProduct()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)