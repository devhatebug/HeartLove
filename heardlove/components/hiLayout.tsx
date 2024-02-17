'use client'
import React from "react";
import "../stylesheet/hiComponent.css";
export default function HiLayout () {
    return (
        <div className="hi-layout">
            <div className="text-head">
                HELLO! 
                <div className="visible">
                    <ul>
                        <li>WELCOME TO UNIVERSE OF LOVE <span>&#10084;</span></li>
                        <li>Ở ĐÂY LÀ MỘT VŨ TRỤ TÌNH YÊU <span>&#10084;</span></li>
                        <li>WELCOME TO UNIVERSE OF LOVE <span>&#10084;</span></li>
                        <li>Ở ĐÂY LÀ MỘT VŨ TRỤ TÌNH YÊU <span>&#10084;</span></li>
                        <li>WELCOME TO UNIVERSE OF LOVE <span>&#10084;</span></li>
                        <li>Ở ĐÂY LÀ MỘT VŨ TRỤ TÌNH YÊU <span>&#10084;</span></li>
                        <li>WELCOME TO UNIVERSE OF LOVE <span>&#10084;</span></li>
                    </ul>
                </div>
            </div>
            <div className="text-title">
                CHÀO MỪNG EM BÉ ĐẾN VỚI VỤ TRỤ TÌNH YÊU DO ANH <span className="text-teal-500">BẮP</span> TẠO RA :3. CHÚC EM BÉ CÓ MỘT NGÀY TỐT LÀNH. NHỚ KHÁM PHÁ VŨ TRỤ NÀY THẬT KĨ NHOA <span>&#10084;</span>
            </div>
            <div className="layout-continue">
                <div className="text-description">
                    Em bé đã sẵn sàng chưa nè. Nếu sẵn sàng rồi thì bắt đầu khám phá vũ trụ này thôi. Chúc bé khám phá vũ trụ này vui vẻ nhoa :3
                </div>
                <button className="btn-discover">KHÁM PHÁ NGAY</button>
            </div>
        </div>
    )
}