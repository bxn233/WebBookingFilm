import { baseService } from "./baseService";


class QuanLiDatVeService extends baseService {

    layDanhSachPhongVe = (maPhongVe) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maPhongVe}`)
    }

    datVe = (thongTinVe) => {
        return this.post('api/QuanLyDatVe/DatVe', thongTinVe)
    }
}

export const quanLiDatVeService = new QuanLiDatVeService()