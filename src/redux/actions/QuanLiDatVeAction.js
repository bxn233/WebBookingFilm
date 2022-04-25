import { quanLiDatVeService } from "../../services/QuanLiDatVeService"
import { layThongTinTaiKhoanAction } from "./QuanLiNguoiDungAction"
import { RESET_GHE_DANG_DAT, SET_CHI_TIET_PHONG_VE } from "./type/QuanLiDatVeType"
import { history } from "../../App"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction"
export const getChiTietPhongVe = (maPhongVe) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLiDatVeService.layDanhSachPhongVe(maPhongVe)
            dispatch({
                type: SET_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data.content
            })
            dispatch(hideLoadingAction)
        } catch (error) {
            dispatch(hideLoadingAction)
            console.log(error)
        }
    }
}

export const datVeAction = (thongTinVe) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLiDatVeService.datVe(thongTinVe)
            console.log('thongTinPhongVe', result.data.content)
            if (result.data.statusCode === 200) {
                await dispatch(getChiTietPhongVe(thongTinVe.maLichChieu))
                await dispatch({
                    type: RESET_GHE_DANG_DAT
                })
                await dispatch(layThongTinTaiKhoanAction())
            }
            dispatch(hideLoadingAction)
        } catch(error) {
            dispatch(hideLoadingAction)
            console.log(error)
        }
    }
}