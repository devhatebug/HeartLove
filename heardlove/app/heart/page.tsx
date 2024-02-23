'use client';
import "../heart/heart.css";
import { useEffect, useRef } from 'react';
import TextType from "@/functions/texttype";
const HeartPage = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const settings = {
        particles: {
            length: 2000, // maximum amount of particles
            duration: 2, // particle duration in sec
            velocity: 100, // particle velocity in pixels/sec
            effect: -1.3, // play with this for a nice effect
            size: 13, // particle size in pixels
        },
        };

        // Point class
        class Point {
        x: number;
        y: number;

        constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        }

        clone() {
        return new Point(this.x, this.y);
        }

        length(length?: number) {
        if (typeof length === 'undefined') return Math.sqrt(this.x * this.x + this.y * this.y);
        this.normalize();
        this.x *= length;
        this.y *= length;
        return this;
        }

        normalize() {
        const length = this.length();
        this.x /= length as number;
        this.y /= length as number;
        return this;
        }
        }

        // Particle class
        class Particle {
        position: Point;
        velocity: Point;
        acceleration: Point;
        age: number;

        constructor() {
            this.position = new Point();
            this.velocity = new Point();
            this.acceleration = new Point();
            this.age = 0;
        }

        initialize(x: number, y: number, dx: number, dy: number) {
            this.position.x = x;
            this.position.y = y;
            this.velocity.x = dx;
            this.velocity.y = dy;
            this.acceleration.x = dx * settings.particles.effect;
            this.acceleration.y = dy * settings.particles.effect;
            this.age = 0;
        }

        update(deltaTime: number) {
            this.position.x += this.velocity.x * deltaTime;
            this.position.y += this.velocity.y * deltaTime;
            this.velocity.x += this.acceleration.x * deltaTime;
            this.velocity.y += this.acceleration.y * deltaTime;
            this.age += deltaTime;
        }

        draw(context: CanvasRenderingContext2D, image: HTMLImageElement) {
            function ease(t: number) {
            return (--t) * t * t + 1;
            }
            const size = image.width * ease(this.age / settings.particles.duration);
            context.globalAlpha = 1 - this.age / settings.particles.duration;
            context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
        }
        }

        // ParticlePool class
        class ParticlePool {
        particles: Particle[];
        firstActive: number;
        firstFree: number;
        duration: number;

        constructor(length: number) {
            this.particles = new Array(length).fill(null).map(() => new Particle());
            this.firstActive = 0;
            this.firstFree = 0;
            this.duration = settings.particles.duration;
        }

        add(x: number, y: number, dx: number, dy: number) {
            const { particles } = this;
            particles[this.firstFree].initialize(x, y, dx, dy);
            this.firstFree = (this.firstFree + 1) % particles.length;
            if (this.firstActive === this.firstFree) this.firstActive = (this.firstActive + 1) % particles.length;
        }

        update(deltaTime: number) {
            const { particles } = this;
            const { length } = particles;

            for (let i = this.firstActive; i !== this.firstFree; i = (i + 1) % length) {
            particles[i].update(deltaTime);
            }

            while (particles[this.firstActive].age >= this.duration && this.firstActive !== this.firstFree) {
            this.firstActive = (this.firstActive + 1) % length;
            }
        }

        draw(context: CanvasRenderingContext2D, image: HTMLImageElement) {
            const { particles } = this;
            const { length } = particles;

            for (let i = this.firstActive; i !== this.firstFree; i = (i + 1) % length) {
            particles[i].draw(context, image);
            }
        }
        }

        const particleRate = settings.particles.length / settings.particles.duration;

        const pointOnHeart = (t: number) => {
        return new Point(
            160 * Math.pow(Math.sin(t), 3),
            130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
        );
        };

        const createParticleImage = () => {
        const size = settings.particles.size;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        if (!context) return null;

        function to(t: number) {
            const point = pointOnHeart(t);
            point.x = size / 2 + (point.x * size) / 350;
            point.y = size / 2 - (point.y * size) / 350;
            return point;
        }

        context.beginPath();
        let t = -Math.PI;
        let point = to(t);
        context.moveTo(point.x, point.y);
        while (t < Math.PI) {
            t += 0.01;
            point = to(t);
            context.lineTo(point.x, point.y);
        }
        context.closePath();

        context.fillStyle = '#FF5CA4';
        context.fill();

        const image = new Image();
        image.src = canvas.toDataURL();
        return image;
        };

        const image = createParticleImage();
        if (!image) return;

        const particles = new ParticlePool(settings.particles.length);

        let time = performance.now() / 1000;

        const render = () => {
        requestAnimationFrame(render);

        const newTime = performance.now() / 1000;
        const deltaTime = newTime - time;
        time = newTime;

        context.clearRect(0, 0, canvas.width, canvas.height);

        const amount = particleRate * deltaTime;
        for (let i = 0; i < amount; i++) {
            const pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
            const dir = pos.clone().length(settings.particles.velocity);
            particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
        }

        particles.update(deltaTime);
        particles.draw(context, image);
        };

        const handleResize = () => {
        if (!canvas) return;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const timeoutId = setTimeout(() => {
        render();
        }, 10);

        return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        const audioElement = new Audio('./thang-dien.mp3');
        audioElement.play();
        return () => {
          audioElement.pause();
          audioElement.currentTime = 0;
        };
    }, []);

  return (
    <div className="box">
        <canvas ref={canvasRef} id="pinkboard"></canvas>
        <div className="text-love">
            <TextType text={"NGUYEN THU PHUONG"}/>
        </div>
    </div>
  );
};

export default HeartPage;
