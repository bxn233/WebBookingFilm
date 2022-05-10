import React from "react";
import { NavLink } from "react-router-dom";
import ListQuestion from "./ListQuestion";

const question = [
    {
        question: 'Có thể mua vé xem phim những rạp nào trên MHB Cinema?',
        answer: 'Hiện tại bạn có thể đặt vé tại rạp phim cũng như xem lịch chiếu phim các rạp sau: CGV Cinemas, Lotte Cinema, Galaxy Cinema, BHD Star, Mega GS, Dcine, Cinestar.'
    },
    {
        question: 'Lợi ích của việc mua vé xem phim trên MBO Cinema?',
        answer: 'Nhanh chóng, trực quan không cần ra mua vé trực tiếp tại rạp. Tiết kiệm thời gian và tiện lợi. Có nhiều chương trình khuyến mãi với giá vé vô cùng hấp dẫn.'
    },
    {
        question: 'Có thể mua vé xem phim kèm bắp nước hay không?',
        answer: 'Hiện tại MBO Cinema có hỗ trợ mua bắp nước các cụm rạp CGV Cinemas, Lotte Cinema, BHD Star, Dcine ngay khi đặt vé. Nếu bạn muốn tăng size, đổi mùi vị bắp nước chỉ cần đến quầy và trả thêm tiền cho thu ngân. Bắp nước đã mua không hỗ trợ đổi trả.'
    },
    {
        question: 'Mua vé xem phim tại MBO Cinema có đắt hơn mua trực tiếp tại rạp không?',
        answer: 'Giá vé xem phim trên MBO Cinema không thu thêm phí dịch vụ và bán bằng giá tại rạp, nhưng luôn có CTKM vào các ngày trong tuần và cuối tuần để MBO Cinema-er có thể mua với giá vé luôn tốt hơn khi mua trực tiếp tại rạp.'
    },
    {
        question: 'Vé xem phim có được đổi trả, hoàn hủy không?',
        answer: 'Các vé xem phim khi tra cứu lịch chiếu phim tại MBO Cinema hiện tại không hỗ trợ đổi trả hay hoàn hủy vé.'
    }
]

export default function Question() {;
  return (
    <div className="container flex pb-16">
      <div className="w-5/12">
        <h2
          className="lg:text-3xl text-2xl font-bold text-pink-700"
          style={{ color: "rgb(192, 182, 135)" }}
        >
          Bạn hỏi, MBO Cinema trả lời
        </h2>
        <p className="text-base text-white">
          Không tìm thấy câu hỏi của bạn. Vui lòng xem thêm{" "}
          <NavLink
            to="/"
            className="hover:underline underline"
            style={{ color: "rgb(192, 182, 135)" }}
          >
            Tại đây
          </NavLink>
        </p>
      </div>
      <div className="w-7/12">
          {question.flatMap((q,i) => {
              return <ListQuestion question={q} key={i} />
          })}
          
      </div>
    </div>
  );
}
