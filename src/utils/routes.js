import React from 'react'

import Login from '../components/login/index';
import Register from '../components/register/index';
import DetailContainer from '../containers/DetailContainer';
import SearchContainer from '../containers/SearchContainer';
import HomePage from './../containers/HomePage';
import CartContainer from './../containers/CartContainer';
import PTTTContainer from './../containers/PTTTContainer';
import CSBHContainer from './../containers/CSBHContainer';
import InfoUserContainer from './../containers/InfoUserContainer';
import HDMHContainer from './../containers/HDMHContainer';

const routes=[
    {
        path:'/',
        exact:true,
        main: () => <HomePage/>
    },
    {
        path:'/login',
        exact:false,
        main: () => <Login />
    },
    {
        path:'/register',
        exact:false,
        main: () => <Register />
    },
    {
        path:'/product/:id',
        exact:false,
        main: ({match}) => <DetailContainer match={match}/>
    },
    {
        path:'/info',
        exact:false,
        main: () => <InfoUserContainer/>
    },
    {
        path:'/search/:category_id',
        exact:false,
        main: ({match}) => <SearchContainer match={match}/>
    },
    {
        path:'/cart',
        exact:false,
        main: () => <CartContainer />
    },
    {
        path:'/phuongthucthanhtoan',
        exact:false,
        main: () => <PTTTContainer/>
    },
    {
        path:'/chinhsachbaohanh',
        exact:false,
        main: () => <CSBHContainer />
    },
    {
        path:'/huongdanmuahang',
        exact:false,
        main: () => <HDMHContainer />
    }

]
export default routes
