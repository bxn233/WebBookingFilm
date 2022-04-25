import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


class QuanLiPhimService extends baseService {
    layDanhSachBanner = () => {
        return this.get('api/QuanLyPhim/LayDanhSachBanner')
    }

    layDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLiPhimService = new QuanLiPhimService()