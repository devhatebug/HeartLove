'use client'
import React from "react";
import "../stylesheet/hiComponent.css";
import Link from "next/link";
import TextType from "@/functions/texttype";

export default function HiLayout () {
    const textDes = "Em bé đã sẵn sàng chưa nè. Nếu sẵn sàng rồi thì bắt đầu khám phá vũ trụ này thôi. Chúc bé khám phá vũ trụ này vui vẻ nhoa :3";

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
                    <TextType text={textDes} />
                </div>
                <button className="btn-discover">
                    <Link href={"./kham-pha"}>
                        KHÁM PHÁ NGAY
                    </Link>
                </button>
            </div>
        </div>
    )
}