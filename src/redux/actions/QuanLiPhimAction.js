import { quanLiPhimService } from "../../services/QuanLiPhimService"
import { SET_DANH_SACH_PHIM } from "./type/QuanLiPhimType"

export const getDanhSachPhimAction = () => {
    return async dispatch => {
        try {
            const result = await quanLiPhimService.layDanhSachPhim()
            dispatch({
                type: SET_DANH_SACH_PHIM,
                data: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}