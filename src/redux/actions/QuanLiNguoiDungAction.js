
import { quanLiNguoiDungService } from "../../services/QuanLiNguoiDungService";
import { DANG_NHAP_ACTION, SET_THONG_TIN_TAI_KHOAN } from "./type/QuanLiNguoiDungType";
import {history} from '../../App'



export const dangNhapAction = (thongTinDangNhap) => {



    return async (dispatch) => {

       try {
            const result = await quanLiNguoiDungService.dangNhap(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }

            history.goBack()
            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
export const layThongTinTaiKhoanAction = () => {



    return async (dispatch) => {

       try {
            const result = await quanLiNguoiDungService.layThongTinTaiKhoan();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_TAI_KHOAN,
                    thongTinTaiKhoan: result.data.content
                })
            }

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}