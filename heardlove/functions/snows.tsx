'use client'
import { useEffect } from "react";
import { TweenMax, Linear } from 'gsap';
export default function starSnow() {
    useEffect(() => {
        const MAX_SNOW = 200;
        const MAX_SNOW_SIZE = 7;
        const MAX_SNOW_SPEED = 1;
    
        function snowStart() {
          createSnows();
        }
    
        function createSnows() {
          const container = document.getElementById("snow-animation-container");
          if (container) {
            for (let i = 0; i < MAX_SNOW; i++) {
              const appendItem = getRandomItem(i);
              container.appendChild(appendItem);
              const animateItem = document.querySelector(".snow" + i) as HTMLElement; 
              const randomTime = Math.random() * MAX_SNOW_SPEED;
              goAnimate(animateItem, i, randomTime);
              goAnimate2(animateItem);
            }
          };
        }
    
        function goAnimate(item: HTMLElement, id: number, randomTime: number) {
          TweenMax.to(item, randomTime, { css: { marginTop: "+=100" }, ease: Linear.easeNone, onComplete: function () {
            const topPosition = parseInt(getComputedStyle(item).marginTop || "0", 10);
            if (topPosition > window.innerHeight) {
              changePosition(item);
              randomTime = Math.random() * MAX_SNOW_SPEED;
              goAnimate(item, id, randomTime);
            } else {
              goAnimate(item, id, randomTime);
            }
          }});
        }
    
        function goAnimate2(item: HTMLElement) {
          const directionTime = 1 + Math.floor(Math.random() * 5);
          const randomDirection = 1 + Math.floor(Math.random() * 4);
          const delayTime = 1 + Math.floor(Math.random() * 3);
    
          if (randomDirection == 1) {
            TweenMax.to(item, directionTime, { css: { marginLeft: "+=100" }, ease: Linear.easeOut, onComplete: function () {
              TweenMax.to(item, directionTime, { css: { marginLeft: "-=100" }, delay: delayTime, ease: Linear.easeOut, onComplete: function () {
                goAnimate2(item);
              }});
            }});
          } else if (randomDirection == 2) {
            TweenMax.to(item, directionTime, { css: { marginLeft: "-=100" }, ease: Linear.easeOut, onComplete: function () {
              TweenMax.to(item, directionTime, { css: { marginLeft: "+=100" }, delay: delayTime, ease: Linear.easeOut, onComplete: function () {
                goAnimate2(item);
              }});
            }});
          } else if (randomDirection == 3) {
            TweenMax.to(item, directionTime, { css: { marginLeft: "+=100" }, ease: Linear.easeOut, onComplete: function () {
              goAnimate2(item);
            }});
          } else if (randomDirection == 4) {
            TweenMax.to(item, directionTime, { css: { marginLeft: "-=100" }, ease: Linear.easeOut, onComplete: function () {
              goAnimate2(item);
            }});
          }
        }
    
        function changePosition(item: HTMLElement) {
          const _width = Math.floor(Math.random() * MAX_SNOW_SIZE);
          const _height = _width;
          const _blur = Math.floor(Math.random() * 5 + 2);
          const _left = Math.floor(Math.random() * (window.innerWidth - _width));
          const _top = -window.innerHeight + Math.floor(Math.random() * (window.innerHeight - _height));
    
          item.style.width = `${_width}px`;
          item.style.height = `${_height}px`;
          item.style.marginLeft = `${_left}px`;
          item.style.marginTop = `${_top}px`;
          item.style.webkitFilter = `blur(${_blur}px)`;
          item.style.filter = `blur(${_blur}px)`;
        }
    
        function getRandomItem(id: number) {
          const _width = Math.floor(Math.random() * MAX_SNOW_SIZE);
          const _height = _width;
          const _blur = Math.floor(Math.random() * 5 + 2);
          const _left = Math.floor(Math.random() * (window.innerWidth - _width));
          const _top = -window.innerHeight + Math.floor(Math.random() * (window.innerHeight - _height));
          const _id = id;
    
          const item = document.createElement('div');
          item.className = `snow${_id}`;
          item.style.position = 'absolute';
          item.style.marginLeft = `${_left}px`;
          item.style.marginTop = `${_top}px`;
          item.style.width = `${_width}px`;
          item.style.height = `${_height}px`;
          item.style.borderRadius = '50%';
          item.style.backgroundColor = 'white';
          item.style.webkitFilter = `blur(${_blur}px)`;
          item.style.filter = `blur(${_blur}px)`;
    
          return item;
        }
    
        snowStart();
      }, []);
}