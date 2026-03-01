"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("zh-CN", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <h1 className="text-white text-2xl font-light mb-4">当前时间</h1>
      <div className="text-white text-8xl font-mono font-bold tracking-wider">
        {time}
      </div>
      <p className="text-white/60 text-sm mt-8">Auto-deployed by AI Pipeline</p>
    </div>
  );
}
