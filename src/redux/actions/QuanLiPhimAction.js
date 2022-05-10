import { quanLiPhimService } from "../../services/QuanLiPhimService"
import { SET_DANH_SACH_PHIM } from "./type/QuanLiPhimType"

export const getDanhSachPhimAction = () => {
    return async dispatch => {
        try {
            const result = await quanLiPhimService.layDanhSachPhim()
            console.log('danhSAchPhimAction', result.data.content)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                data: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}