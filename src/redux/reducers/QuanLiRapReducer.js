import { SET_DANH_SACH_RAP } from "../actions/type/QuanLiRapType"

const initialState = {
    
    heThongRapChieu: []
}

const QuanLiRapReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DANH_SACH_RAP:
            
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state};

        default:
            return state
    }
}

export default QuanLiRapReducer
