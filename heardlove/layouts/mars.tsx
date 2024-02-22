"use client"
import React from "react";
import "@/stylesheet/mars.css";
import URL_LINK from "@/database/mars.json";
const Mars = () => {
    const data = URL_LINK;
    return (
        <div className="mars-planet">
            <div className="head-planet">
                <div className="name-planet">DATA PLANET</div>
                <div className="sub-title">
                    <span></span>
                    Mars - Sao Hỏa
                    <span></span>
                </div>
            </div>
            <div className="explain-planet">
                Bên dưới là những hình ảnh về chúng ta, những món quà hay kỉ niệm đóa :3
            </div>
            <div className="list-image">
                {data.map((dt,id) => (
                    <div key={id} className="item-image">
                        <img src={dt.link} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mars;