
import { quanLiPhimService } from "../../services/QuanLiPhimService"
import { SET_CAROUSEL } from "./type/CarouselType"

export const getCarouselAction = () => {
    return async dispatch => {
        try {
            const result = await quanLiPhimService.layDanhSachBanner()
            console.log('result', result)
            dispatch({
                type: SET_CAROUSEL,
                data: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }
}