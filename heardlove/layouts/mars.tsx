"use client"
import React from "react";
import "@/stylesheet/mars.css";

const Mars = () => {
    return (
        <div className="mars-planet">
            <div className="head-planet">
                <div className="name-planet">DATA PLANET</div>
                <div className="sub-title">
                    <span></span>
                    Mars - Sao Mộc
                    <span></span>
                </div>
            </div>
            <div className="explain-planet">
                Bên dưới là những hình ảnh về chúng ta, những món quà hay kỉ niệm đóa :3
            </div>
            <div className="list-image"></div>
        </div>
    )
}

export default Mars;