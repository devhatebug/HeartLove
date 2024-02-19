'use client'
import { useEffect } from "react";
export default function startStar() {
    useEffect(() => {
        const layerCount: number = 5;
        const starCount: number = 100;
        const maxTime: number = 30;
        const universe: HTMLElement | null = document.getElementById("universe");
        const w: Window = window;
        const d: Document = document;
        const e: HTMLElement | null = d.documentElement;
        const g: HTMLBodyElement | null = d.getElementsByTagName("body")[0];
        const width: number = w.innerWidth || (e ? e.clientWidth : 0) || (g ? g.clientWidth : 0);
        const height: number = w.innerHeight || (e ? e.clientHeight : 0) || (g ? g.clientHeight : 0);
    
        if (universe) {
          for (let i: number = 0; i < starCount; ++i) {
            const ypos: number = Math.round(Math.random() * height);
            const star: HTMLDivElement = document.createElement("div");
            const speed: number = 1000 * (Math.random() * maxTime + 1);
            star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
            star.style.backgroundColor = "white";
    
            universe.appendChild(star);
            star.animate(
              [
                { transform: `translate3d(${width}px, ${ypos}px, 0)` },
                { transform: `translate3d(-${Math.random() * 256}px, ${ypos}px, 0)` }
              ],
              {
                delay: Math.random() * -speed,
                duration: speed,
                iterations: 1000
              }
            );
          }
        }
      }, []);
    
      return null;
}