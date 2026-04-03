"use client";
import { useState } from "react";

const navLinks = ["홈", "분석하기", "유형 탐색", "랭킹", "가이드"];

export default function Navbar() {
  const [active, setActive] = useState("홈");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#111224]/95 backdrop-blur-md border-b border-[#2e3359]">
      <div className="max-w-[1440px] mx-auto px-[60px] h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-[#00e5ff]/60 bg-[#00e5ff]/15">
            <span className="font-rajdhani font-bold text-[#00e5ff] text-sm leading-none">GT</span>
          </div>
          <span className="font-rajdhani font-bold text-white text-lg tracking-wide">GamerType</span>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link
                    ? "text-[#00e5ff]"
                    : "text-[#b3b8d9] hover:text-white"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="btn-cyan px-4 py-2 rounded-lg text-[#00e5ff] text-sm font-semibold border border-[#00e5ff]/50 bg-[#00e5ff]/12 hover:bg-[#00e5ff]/20 transition-all duration-200">
          무료 시작
        </button>
      </div>
    </nav>
  );
}
