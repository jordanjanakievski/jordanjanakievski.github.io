"use client";

import React, { useEffect, useRef } from "react";

export function HeroSection() {
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const width = window.innerWidth - 3;
  //   const height = window.innerHeight - 3;
  //   canvas.width = width;
  //   canvas.height = height;

  //   let speed = 1;
  //   let boids = [];
  //   let totalBoids = 50;

  //   const init = function() {
  //     for (let i = 0; i < totalBoids; i++) {
  //       boids.push({
  //         x: Math.random() * width,
  //         y: Math.random() * height,
  //         v: {
  //           x: Math.random() * 2 - 1,
  //           y: Math.random() * 2 - 1
  //         },
  //         c: 'rgb(' + Math.floor(0 * 255) + ',' + Math.floor(0 * 255) + ',' + Math.floor(0 * 255) + ')'
  //       });
  //     }
  //   };

  //   const calculateDistance = function(v1, v2) {
  //     let x = Math.abs(v1.x - v2.x);
  //     let y = Math.abs(v1.y - v2.y);
  //     return Math.sqrt((x * x) + (y * y));
  //   };

  //   const checkWallCollisions = function(index) {
  //     if (boids[index].x > width) {
  //       boids[index].x = 0;
  //     } else if (boids[index].x < 0) {
  //       boids[index].x = width;
  //     }

  //     if (boids[index].y > height) {
  //       boids[index].y = 0;
  //     } else if (boids[index].y < 0) {
  //       boids[index].y = height;
  //     }
  //   };

  //   const addForce = function(index, force) {
  //     boids[index].v.x += force.x;
  //     boids[index].v.y += force.y;

  //     let magnitude = calculateDistance({ x: 0, y: 0 }, { x: boids[index].v.x, y: boids[index].v.y });

  //     boids[index].v.x = boids[index].v.x / magnitude;
  //     boids[index].v.y = boids[index].v.y / magnitude;
  //   };

  //   const applyForces = function(index) {
  //     let percievedCenter = { x: 0, y: 0 };
  //     let flockCenter = { x: 0, y: 0 };
  //     let percievedVelocity = { x: 0, y: 0 };
  //     let count = 0;

  //     for (let i = 0; i < boids.length; i++) {
  //       if (i !== index) {
  //         let dist = calculateDistance(boids[index], boids[i]);
  //         if (dist > 0 && dist < 60) {
  //           count++;
  //           percievedCenter.x += boids[i].x;
  //           percievedCenter.y += boids[i].y;
  //           percievedVelocity.x += boids[i].v.x;
  //           percievedVelocity.y += boids[i].v.y;

  //           if (calculateDistance(boids[i], boids[index]) < 15) {
  //             flockCenter.x -= (boids[i].x - boids[index].x);
  //             flockCenter.y -= (boids[i].y - boids[index].y);
  //           }
  //         }
  //       }
  //     }

  //     if (count > 0) {
  //       percievedCenter.x = percievedCenter.x / count;
  //       percievedCenter.y = percievedCenter.y / count;
  //       percievedCenter.x = (percievedCenter.x - boids[index].x) / 400;
  //       percievedCenter.y = (percievedCenter.y - boids[index].y) / 400;
  //       percievedVelocity.x = percievedVelocity.x / count;
  //       percievedVelocity.y = percievedVelocity.y / count;
  //       flockCenter.x /= count;
  //       flockCenter.y /= count;
  //     }

  //     addForce(index, percievedCenter);
  //     addForce(index, percievedVelocity);
  //     addForce(index, flockCenter);
  //   };

  //   const render = function() {
  //     for (let i = 0; i < boids.length; i++) {
  //       ctx.beginPath();
  //       ctx.fillStyle = boids[i].c;
  //       let oldx = boids[i].x, oldy = boids[i].y;
  //       let dx = boids[i].v.x * speed, dy = boids[i].v.y * speed;
  //       boids[i].x += dx;
  //       boids[i].y += dy;
  //       applyForces(i);
  //       ctx.moveTo(oldx + (dx >> 1), oldy + (dy >> 1));
  //       ctx.lineTo(oldx - dy, oldy + dx);
  //       ctx.lineTo(boids[i].x, boids[i].y);
  //       ctx.lineTo(oldx + dy, oldy - dx);
  //       ctx.lineTo(oldx + (dx >> 1), oldy + (dy >> 1));
  //       ctx.stroke();
  //       ctx.fill();
  //       checkWallCollisions(i);
  //     }
  //   };

  //   const clearCanvas = function() {
  //     ctx.clearRect(0, 0, width, height);
  //   };

  //   const draw = function() {
  //     clearCanvas();
  //     window.requestAnimationFrame(render);
  //   };

  //   init();
  //   const intervalId = setInterval(() => {
  //     draw();
  //   }, 3);

  //   // Clean up function
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[75vh]">
      <h1 className="font-heading text-3xl font-extrabold tracking-tight 2xs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
        Jordan Janakievski
      </h1>
      {/* <canvas id='c' /> */}
    </div>
  );
}
