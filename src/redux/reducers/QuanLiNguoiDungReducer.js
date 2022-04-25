import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION, SET_THONG_TIN_TAI_KHOAN } from "../actions/type/QuanLiNguoiDungType"

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const initialState = {
    userLogin: user,
    thongTinTaiKhoan: {}

}

const QuanLiNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THONG_TIN_TAI_KHOAN: {
            state.thongTinTaiKhoan = action.thongTinTaiKhoan
            return {...state}
        }
        case DANG_NHAP_ACTION:
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
            return { ...state, userLogin: thongTinDangNhap }
        default:
            return state
    }
}

export default QuanLiNguoiDungReducer