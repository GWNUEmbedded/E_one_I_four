"use client";
import { useState } from "react";

const stats = [
  { val: "2.4M+", label: "분석된 게이머" },
  { val: "47개",  label: "지원 게임" },
  { val: "98.2%", label: "분석 정확도" },
  { val: "0.8s",  label: "평균 분석 시간" },
];

const platforms = ["🎮 PC", "🎯 Console", "📱 Mobile"];

const resultBars = [
  { label: "전략 지수", val: 92, color: "#00e5ff" },
  { label: "반응 속도", val: 78, color: "#8c33ff" },
  { label: "팀플레이",  val: 88, color: "#1aff99" },
  { label: "창의성",    val: 65, color: "#ffd91a" },
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("🎮 PC");

  return (
    <section className="relative min-h-screen pt-[72px] grid-bg overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-1/4 w-[700px] h-[500px] rounded-full bg-[#8c33ff]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-28 left-1/3 w-[550px] h-[400px] rounded-full bg-[#00e5ff]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-[60px] pt-16 pb-20 flex gap-12 items-start">
        {/* Left content */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/8 mb-8 animate-fade-in">
            <span className="text-[#00e5ff] text-xs font-semibold tracking-wider">
              ⚡ Game API 기반 정밀 분석 엔진
            </span>
          </div>

          {/* Title */}
          <h1 className="font-rajdhani font-bold leading-[1.05] mb-6 animate-fade-in-up delay-100">
            <span className="block text-[56px] lg:text-[64px] text-white">
              당신의 게이머 유형을
            </span>
            <span className="block text-[56px] lg:text-[64px] text-[#00e5ff] text-glow-cyan">
              AI가 분석해드립니다
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#b3b8d9] text-lg leading-relaxed mb-10 max-w-[680px] animate-fade-in-up delay-200">
            전적, 플레이 스타일, 승부욕, 소통 방식까지 — 수천 개의 매치 데이터를 기반으로
            당신만의 게이머 DNA를 분석하고 숨겨진 강점을 발견하세요.
          </p>

          {/* Search Box */}
          <div className="relative flex items-center gap-0 mb-4 animate-fade-in-up delay-300">
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="소환사명 또는 게이머 태그를 입력하세요..."
                className="w-full h-[66px] bg-[#111224] border border-[#2e3359] rounded-l-xl px-5 text-[15px] text-white placeholder-[#666a8c] outline-none focus:border-[#00e5ff]/60 transition-colors duration-200"
              />
            </div>
            <button className="btn-cyan h-[66px] px-7 bg-[#00e5ff] text-[#0a0b14] font-bold text-sm rounded-r-xl whitespace-nowrap hover:bg-[#33ecff] transition-colors duration-200">
              분석 시작
            </button>
          </div>

          {/* Platform chips */}
          <div className="flex gap-3 mb-12 animate-fade-in-up delay-400">
            {platforms.map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-4 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 ${
                  platform === p
                    ? "border-[#00e5ff]/60 bg-[#00e5ff]/15 text-[#00e5ff]"
                    : "border-[#2e3359] bg-[#111224] text-[#b3b8d9] hover:border-[#00e5ff]/30"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 animate-fade-in-up delay-500">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-rajdhani font-bold text-[28px] text-[#00e5ff] leading-none mb-1">
                  {s.val}
                </div>
                <div className="text-[#666a8c] text-[13px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Result Card */}
        <div className="hidden lg:block w-[440px] flex-shrink-0 animate-slide-in-right delay-300">
          <div className="relative rounded-2xl border border-[#2e3359] bg-[#161827] overflow-hidden">
            {/* Top accent bar */}
            <div className="h-[5px] w-full bg-[#00e5ff]" />

            <div className="p-8">
              <p className="text-[#666a8c] text-xs font-medium mb-2 tracking-wider uppercase">
                분석 결과 미리보기
              </p>
              <h2 className="font-rajdhani font-bold text-[26px] text-white mb-4">
                전략적 지휘관
              </h2>

              {/* Tags */}
              <div className="flex gap-3 mb-8">
                <span className="px-3 py-1 rounded-full bg-[#00e5ff]/15 text-[#00e5ff] text-xs font-semibold">전략형</span>
                <span className="px-3 py-1 rounded-full bg-[#8c33ff]/15 text-[#8c33ff] text-xs font-semibold">리더십</span>
              </div>

              {/* Stat bars */}
              <div className="space-y-5 mb-8">
                {resultBars.map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#b3b8d9] text-[13px] font-medium">{b.label}</span>
                      <span className="text-[13px] font-bold" style={{ color: b.color }}>{b.val}</span>
                    </div>
                    <div className="h-[6px] rounded-full bg-[#2e3359]">
                      <div
                        className="h-full rounded-full stat-bar"
                        style={{
                          "--bar-width": `${b.val}%`,
                          backgroundColor: b.color,
                          opacity: 0.85,
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Role chips */}
              <div className="mb-5">
                <p className="text-[#666a8c] text-xs font-medium mb-3 tracking-wider uppercase">추천 역할</p>
                <div className="flex gap-2 flex-wrap">
                  {["IGL / 콜러", "서포터", "엔트리 프래거"].map((role) => (
                    <span key={role} className="px-3 py-1.5 rounded-lg bg-[#111224] text-white text-xs font-medium">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <p className="text-[#444768] text-[11px]">
                최근 분석: 3분 전 · 데이터 출처: Riot API
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
