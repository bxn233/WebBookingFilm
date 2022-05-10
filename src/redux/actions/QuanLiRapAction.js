import { quanLiRapService } from "../../services/QuanLiRapService"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { SET_FILM_DETAIL } from "./type/QuanLiPhimType";
import { SET_DANH_SACH_RAP } from "./type/QuanLiRapType"

export const getDanhSachRapAction = () => {
    return async dispatch => {
        try{
            const result = await quanLiRapService.layDanhSachHeThongRap();

            console.log('result',result.data.content);
            if(result.status === 200) {
                dispatch({
                    type:SET_DANH_SACH_RAP,
                    heThongRapChieu:result.data.content
                })
            }


        }catch(errors) {
            console.log('errors',errors.response?.data)
        }

    }
}

export const getThongTinLichChieuPhim = (maPhim) => {
    return async dispatch => {
        try{
            const result = await quanLiRapService.layThongTinLichChieuPhim(maPhim);

            console.log('detail',result.data.content);
            if(result.status === 200) {
                dispatch({
                    type:SET_FILM_DETAIL,
                    filmDetail:result.data.content
                })
            }
            
        }catch(errors) {
            console.log('errors',errors.response?.data)
        }

    }
}