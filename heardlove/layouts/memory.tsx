'use client'
import React from "react"
import "@/stylesheet/memory.css";
import URL_LINK from "@/database/memory.json";
const Memory = () => {
    const data = URL_LINK;
    return (
        <div className="memory-planet">
            <div className="head-planet">
                <div className="name-planet">MEMORY PLANET</div>
                <div className="sub-title">
                    <span></span>
                    Jupiter - Sao Mộc
                    <span></span>
                </div>
            </div>
            <div className="explain-planet">
                Bên dưới là những kỉ niệm tuyệt đẹp của chúng mình từ lúc quen nhau tới giờ đóa nhoa em bé :3
            </div>
            <div className="time-line-planet">
                <ul className="list-timeline">
                    {data.map((dt,id) => (
                        <li key={id} className="item-timeline">
                            <div className="line-pattern">
                            </div>
                            <div className="container">
                                <div className="time-location">
                                    <div className="time">{dt.time}</div>
                                    &#10148;
                                    <div className="location">{dt.location}</div>
                                </div>
                                <div className="name-timeline">{dt.name}</div>
                                <div className="description-timeline">{dt.description}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Memory;