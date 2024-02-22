'use client'
import React, {useState} from "react"
import "@/stylesheet/venus.css";
import TextType from "@/functions/texttype";
import PassForm from "./passform";
const Venus: React.FC = () => {
    const text_lesson = "Hí em bé! Em bé cũng đã đến hành tinh cuối cùng gòi. Ở đây thì không có gì nhiều đâu nha, anh chỉ muốn dành cho em bé vài lời thôi nè. Trong thời gian qua, yêu em bé có những lúc vui vẻ, nhưng cũng có những lúc giận hờn lẫn nhau. Tuy nhiên cả 2 vẫn tiếp tục đi tiếp với nhau chứ không dừng lại. Đây thực sự là một điều cực kì tốt luôn. Anh bé cảm ơn Bống vì đã ở lại với anh, chấp nhận anh. Mặc dù anh còn nhiều khuyết điểm, là một người con trai tệ nhưng em vẫn luôn đồng hành cùng anh trong thời gian qua. Trong thời gian hơn 3 tháng yêu nhau, không ngắn cũng không dài, anh đã thực sự chắc chắn rằng muống cưới em bé, muốn cùng em bé đi đến hôn nhân và có một gia đình thật hạnh phúc. Anh sẽ cố gắng để hoàn thiện bản thân hơn, sẽ thay đổi để trở thành một con người tốt nhất để có thể qua nhà em bé chào hỏi bố mẹ nè. Tới đây thì anh cũng có chút quà nho nhỏ cho em bé nữa, nhớ mở quà nhoa :3."
    const [isOpen, setIsOpen] = useState(false);
    const closePassForm = () => {
        setIsOpen(false);
    }
    const openPassForm = () => {
        setIsOpen(true);
    }
    return (
        <div className="venus-planet">
            <div className="head-planet">
                <div className="name-planet">LOVE PLANET</div>
                <div className="sub-title">
                    <span></span>
                    Venus - Sao Kim
                    <span></span>
                </div>
            </div>
            <div className="text-planet">
                <TextType text={text_lesson}/>
            </div>
            <button onClick={openPassForm} className="btn-gift">
                <img src="./gift.png" alt="" />
                <div className="text">Mở quà</div>
            </button>
            {isOpen && (
                <div className="passform">
                    <PassForm onClose={closePassForm}/>
                </div>
            )}
        </div>
    )
}

export default Venus;