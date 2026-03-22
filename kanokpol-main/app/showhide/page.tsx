"use client";
import { useState } from "react";

function ShowHidePage() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            {/* Header */}
            <div className="text-center mb-12 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    แสดง / ซ่อน
                </h1>
                <p className="text-xl text-slate-400">กด State เพื่อผิดการแสดงหรือซ่อน</p>
            </div>

            {/* Toggle Button */}
            <button 
                className={`px-10 py-4 text-2xl font-bold rounded-lg transition-all duration-300 shadow-lg mb-12 border-2 ${
                    isVisible
                        ? " from-violet-500 to-purple-500 border-violet-400 text-white shadow-violet-500/50"
                        : " from-slate-700 to-slate-600 border-slate-500 text-slate-200 shadow-slate-500/30"
                }`}
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? "0e0b่อน" : "แสดง"}
            </button>

            {/* Hidden Content */}
            {isVisible && (
                <div className="w-full max-w-2xl animate-fadeIn">
                    <div className=" from-violet-900 to-purple-900 rounded-xl p-8 border border-violet-500/50 shadow-2xl shadow-violet-500/30 text-center">
                        <p className="text-2xl text-violet-200 font-semibold">
                            ข้อความที่ซ่อนไว้ 🌟
                        </p>
                    </div>
                </div>
            )}

            {/* Back Link */}
            <div className="mt-12">
                <a href="/" className="text-blue-400 hover:text-blue-300 underline">
                    ← กลับไปหน้าแรก
                </a>
            </div>
        </div>
    )
};

export default ShowHidePage;