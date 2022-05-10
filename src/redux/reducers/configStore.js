import {combineReducers, createStore, applyMiddleware} from 'redux'
import CarouselReducer from './CarouselReducer';
import QuanLiPhimReducer from './QuanLiPhimReducer';
import QuanLiRapReducer from './QuanLiRapReducer';
import QuanLiNguoiDungReducer from './QuanLiNguoiDungReducer';
import QuanLiDatVeReducer from './QuanLiDatVeReducer';
import LoadingReducer from './LoadingReducer';
import TrailerReducer from './TrailerReducer';
import NavigationReducer from './NavigationReducer';
import thunk from 'redux-thunk'
import { useEffect } from 'react';




const rootReducer = combineReducers({
    CarouselReducer,
    QuanLiPhimReducer,
    QuanLiRapReducer,
    QuanLiNguoiDungReducer,
    QuanLiDatVeReducer,
    LoadingReducer,
    TrailerReducer,
    NavigationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store

