import { baseService } from "./baseService";
export class QuanLiNguoiDungService  extends baseService{

    

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }

    layThongTinTaiKhoan = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    
  
}



export const quanLiNguoiDungService = new QuanLiNguoiDungService();