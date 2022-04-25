import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";



class QuanLiRapService extends baseService {

    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
    
}

export const quanLiRapService = new QuanLiRapService()