"use client";
import { useState } from "react";

function LightPage() {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          บทเรียนที่ 1
        </h1>
        <p className="text-xl text-slate-400">State ของการเปิด / ปิด หลอดไฟ</p>
      </div>

      {/* Bulb Status Display */}
      <div className="mb-12">
        <div className={`text-8xl transition-all duration-500 ${
          isLightOn ? "text-yellow-300 drop-shadow-[0_0_30px_rgba(253,224,71,0.8)]" : "text-slate-500"
        }`}>
          💡
        </div>
      </div>

      {/* Status Text */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          <span className={`${
            isLightOn 
              ? "bg-linear-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent" 
              : "text-slate-400"
          }`}>
            สถานะของหลอดไฟ: {isLightOn ? "เปิด" : "ปิด"}
          </span>
        </h2>
      </div>

      {/* Button */}
      <button
        type="button"
        className={`px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 border-2 ${
          isLightOn
            ? "bg-linear-to-r from-yellow-500 to-orange-500 border-yellow-400 text-slate-900 shadow-lg shadow-yellow-500/50"
            : "bg-linear-to-r from-slate-700 to-slate-600 border-slate-500 text-slate-200 shadow-lg shadow-slate-500/30"
        }`}
        onClick={() => setIsLightOn(!isLightOn)}
      >
        {isLightOn ? "ปิดหลอดไฟ" : "เปิดหลอดไฟ"}
      </button>

      {/* Back Link */}
      <div className="mt-12">
        <a href="/" className="text-blue-400 hover:text-blue-300 underline">
          ← กลับไปหน้าแรก
        </a>
      </div>
    </div>
  );
}

export default LightPage;