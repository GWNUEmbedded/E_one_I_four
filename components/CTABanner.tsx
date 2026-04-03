export default function CTABanner() {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-[60px]">
        <div className="relative rounded-3xl bg-[#161827] border border-[#00e5ff]/30 overflow-hidden px-16 py-14 flex items-center justify-between gap-8">
          {/* Background glow */}
          <div className="absolute top-0 left-1/3 w-[500px] h-full bg-[#8c33ff]/6 blur-[80px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[300px] h-full bg-[#00e5ff]/4 blur-[60px] pointer-events-none" />

          {/* Text */}
          <div className="relative">
            <h2 className="font-rajdhani font-bold text-[32px] text-white mb-3">
              지금 바로 무료로 시작하세요
            </h2>
            <p className="text-[#b3b8d9] text-[15px]">
              가입 없이도 3회 무료 분석 가능 · 30초 만에 결과 확인
            </p>
          </div>

          {/* Buttons */}
          <div className="relative flex gap-3 flex-shrink-0">
            <button className="btn-cyan px-6 py-3 bg-[#00e5ff] text-[#0a0b14] font-bold text-[14px] rounded-xl hover:bg-[#33ecff] transition-colors duration-200 whitespace-nowrap">
              무료 분석 시작 →
            </button>
            <button className="px-6 py-3 rounded-xl border border-[#2e3359] bg-[#161827] text-[#b3b8d9] font-medium text-[14px] hover:border-[#00e5ff]/40 hover:text-white transition-all duration-200 whitespace-nowrap">
              데모 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
