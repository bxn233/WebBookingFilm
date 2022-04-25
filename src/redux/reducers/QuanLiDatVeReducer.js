import { DAT_GHE, RESET_GHE_DANG_DAT, SET_CHI_TIET_PHONG_VE } from "../actions/type/QuanLiDatVeType"

const initialState = {
    chiTietPhongVe: {
        thongTinPhim: {
            maLichChieu: '',
            tenCumRap: '',
            tenRap: '',
            diaChi: '',
            tenPhim: '',
            hinhAnh: '',
            ngayChieu: '',
            gioChieu: ''
        },
        danhSachGhe: []
    },
    
    danhSachGheDangDat: [],
    danhSachGheNguoiKhacDat: []
}

const QuanLiDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case DAT_GHE: {
            //Cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];

            let index = danhSachGheCapNhat?.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if(index!==-1) {
                //Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xoá đi
                danhSachGheCapNhat.splice(index,1);
               
            }else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return {...state,danhSachGheDangDat:danhSachGheCapNhat}
        }
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe=action.chiTietPhongVe
            return {...state}
        }

        case RESET_GHE_DANG_DAT: {
            return {...state, danhSachGheDangDat: []}
        }
        default:
            return { ...state }
    }
}

export default QuanLiDatVeReducer