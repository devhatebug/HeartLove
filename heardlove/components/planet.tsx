'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import "@/stylesheet/planet.css";
import URL_LINK from "@/database/planet.json";
import TextType from "@/functions/texttype";
const Planet = () => {
    const data = URL_LINK;
    const [order, setOrder] = useState(0);
    const preOrder = () => {
        if (order > 0 && order <= 3 ) {
            setOrder(order - 1)
        };
        if (order === 0) {
            setOrder(3)
        }
    };
    const nextOrder = () => {
        if (order >= 0 && order < 3) {
            setOrder(order + 1);
        }
        if (order === 3) {
            setOrder(0)
        }
    }
    const [className, setClassName] = useState("")
    useEffect(() => {
        order === 0 && setClassName("jupiter");
        order === 1 && setClassName("mars");
        order === 2 && setClassName("mercury");
        order === 3 && setClassName("venus");
    }, [order]);

    // show popup item planet
    const [isOpen, setIsOpen] = useState(false);
    const [sm, setSm] = useState(false);
    const [sh, setSh] = useState(false);
    const [st, setSt] = useState(false);
    const [sk, setSk] = useState(false);
    const handleOpenPopup = () => {
        setTimeout(() => {
            setIsOpen(true);
        },1)
        order === 0 && setSm(true);
        order === 1 && setSh(true);
        order === 2 && setSt(true);
        order === 3 && setSk(true);
    }

    const handleClosePopup = () => {
        setTimeout(() => {
            setIsOpen(false);
        },1);
        setSm(false);
        setSh(false);
        setSt(false);
        setSk(false);
    }

    return (
        <div className="planet">
            {data.map((dt,id) => {
                if (order ===  id ) {
                    return (
                        <div key={id} className="item-planet">
                            <div className="head-item">
                                <button onClick={preOrder} className="preBtn">&#8918;</button>
                                <div className="image-item">
                                    <img 
                                        className={className}
                                        src={dt.image} 
                                        alt={dt.name} 
                                    />
                                </div>
                                <button onClick={nextOrder} className="nextBtn">&#8919;</button>
                            </div>
                            <div className="container-item">
                                <div className="title-planet">{dt.name.toUpperCase()}</div>
                                <div className="note-planet">
                                    <TextType text={dt.ne.toUpperCase()}/>
                                </div>
                                <div className="description-planet">
                                    {dt.description}
                                </div>
                                <div className="mean-planet">
                                    <TextType text={dt.mean}/>
                                </div>
                            </div>
                            <button onClick={handleOpenPopup} className="btn-travel">
                                    Xem hành tinh
                            </button>
                        </div>
                    )
                }
            })}
           {sm && (
                <div className="memory-planet planet-item">
                    <div className={`container-planet ${isOpen ? 'visible' : ''}`}>
                        <div className="btn-change">
                            <button className="btn-gohome">
                                <Link href="./">Home</Link>
                            </button>
                            <button onClick={handleClosePopup} className="btn-close">Close</button>
                        </div>
                    </div>
                </div>
           )}
           {sh && (
                <div className="mars-planet planet-item">
                    <div className={`container-planet ${isOpen ? 'visible' : ''}`}>
                        <div className="btn-change">
                            <button className="btn-gohome">
                                <Link href="./">Home</Link>
                            </button>
                            <button onClick={handleClosePopup} className="btn-close">Close</button>
                        </div>
                    </div>
                </div>
           )}
           {st && (
                <div className="mercury-planet planet-item">
                    <div className={`container-planet ${isOpen ? 'visible' : ''}`}>
                        <div className="btn-change">
                            <button className="btn-gohome">
                                <Link href="./">Home</Link>
                            </button>
                            <button onClick={handleClosePopup} className="btn-close">Close</button>
                        </div>
                    </div>
                </div>
           )}
           {sk && (
                <div className="venus-planet planet-item">
                    <div className={`container-planet ${isOpen ? 'visible' : ''}`}>
                        <div className="btn-change">
                            <button className="btn-gohome">
                                <Link href="./">Home</Link>
                            </button>
                            <button onClick={handleClosePopup} className="btn-close">Close</button>
                        </div>
                    </div>
                </div>
           )}
        </div>
    )
};

export default Planet;