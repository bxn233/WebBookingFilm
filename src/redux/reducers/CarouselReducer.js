import { SET_CAROUSEL } from "../actions/type/CarouselType"


const stateDefault = {
    bannerList: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "./img/banner_1.jpg"
        },
        {
            "maBanner": 2,
            "maPhim": 9875,
            "hinhAnh": "./img/banner_2.jpg"
        },
        {
            "maBanner": 3,
            "maPhim": 6654,
            "hinhAnh": "./img/banner_3.jpg"
        },
        {
            "maBanner": 4,
            "maPhim": 7894,
            "hinhAnh": "./img/banner_4.jpg"
        }
    ]
}

const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CAROUSEL:
            return {...state, bannerList: action.data}
        default:
            return state
    }
}

export default CarouselReducer

