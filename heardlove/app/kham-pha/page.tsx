'use client';
import React from "react";
import "../kham-pha/khampha.css"
import startStar from "@/functions/stars";
import Planet from "@/components/planet";

export default function KhamPha() {
    startStar();
    return (
        <div className="kham-pha">
           <div id="universe"></div>
           <Planet />
        </div>
    )
}