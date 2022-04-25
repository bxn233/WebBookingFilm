import {combineReducers, createStore, applyMiddleware} from 'redux'
import CarouselReducer from './CarouselReducer';
import QuanLiPhimReducer from './QuanLiPhimReducer';
import QuanLiRapReducer from './QuanLiRapReducer';
import QuanLiNguoiDungReducer from './QuanLiNguoiDungReducer';
import QuanLiDatVeReducer from './QuanLiDatVeReducer';
import LoadingReducer from './LoadingReducer';
import thunk from 'redux-thunk'




const rootReducer = combineReducers({
    CarouselReducer,
    QuanLiPhimReducer,
    QuanLiRapReducer,
    QuanLiNguoiDungReducer,
    QuanLiDatVeReducer,
    LoadingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
