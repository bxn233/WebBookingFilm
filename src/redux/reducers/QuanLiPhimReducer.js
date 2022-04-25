import { SET_DANH_SACH_PHIM, SET_DANH_SACH_PHIM_DANG_CHIEU, SET_DANH_SACH_PHIM_SAP_CHIEU, SET_FILM_DETAIL } from '../actions/type/QuanLiPhimType'

const initialState = {
    danhSachPhim: [],
    danhSachPhimDefault: [],
    dangChieu: true,
    sapChieu: false,
    filmDetail: {}
}

const QuanLiPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM:
            state.danhSachPhim = action.data.filter(phim => phim.dangChieu === true)
            state.danhSachPhimDefault = action.data
            return { ...state }
        case SET_DANH_SACH_PHIM_DANG_CHIEU:
            state.danhSachPhim = state.danhSachPhimDefault.filter(phim => phim.dangChieu === true)
            if (state.danhSachPhim) {
                state.dangChieu = state.danhSachPhim[0].dangChieu
                console.log('DC', state.dangChieu)
                state.sapChieu = state.danhSachPhim[0].sapChieu
                console.log('SC', state.sapChieu)
            }
            return { ...state }
        case SET_DANH_SACH_PHIM_SAP_CHIEU:
            state.danhSachPhim = state.danhSachPhimDefault.filter(phim => phim.sapChieu === true)
            if (state.danhSachPhim) {
                state.dangChieu = state.danhSachPhim[0].dangChieu
                console.log('DC', state.dangChieu)
                state.sapChieu = state.danhSachPhim[0].sapChieu
                console.log('SC', state.sapChieu)
            }
            return { ...state }
        case SET_FILM_DETAIL:
            state.filmDetail = action.filmDetail
            console.log('filmDetailReducer',state.filmDetail)
            return {...state}
        default:
            return { ...state }
    }
}

export default QuanLiPhimReducer
