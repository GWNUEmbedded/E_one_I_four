const features = [
  {
    icon: "🔌",
    title: "공식 API 연동",
    desc: "Riot, Steam, Blizzard 등 공식 API를 통해 검증된 실제 플레이 데이터를 분석합니다.",
    color: "#00e5ff",
  },
  {
    icon: "🧠",
    title: "AI 딥러닝 분석",
    desc: "100만+ 게임 데이터로 훈련된 AI가 플레이 패턴을 다차원으로 분석합니다.",
    color: "#8c33ff",
  },
  {
    icon: "📊",
    title: "실시간 대시보드",
    desc: "매 게임마다 유형 변화를 추적하고 성장 곡선을 시각화해서 보여줍니다.",
    color: "#1aff99",
  },
  {
    icon: "🏆",
    title: "맞춤 성장 가이드",
    desc: "유형별 약점과 강점을 파악하고, 랭크업에 최적화된 전략을 추천합니다.",
    color: "#ffd91a",
  },
];

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="max-w-[1440px] mx-auto px-[60px]">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-rajdhani font-bold text-[36px] text-white mb-4">
            왜 GamerType인가요?
          </h2>
          <p className="text-[#b3b8d9] text-[16px] max-w-lg mx-auto">
            게임 API를 직접 연동해 실시간으로 가장 정확한 분석을 제공합니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="type-card relative rounded-2xl bg-[#161827] p-7 animate-fade-in-up"
              style={{
                border: `1px solid ${f.color}28`,
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{ backgroundColor: `${f.color}18` }}
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="font-rajdhani font-bold text-white text-[17px] mb-3">
                {f.title}
              </h3>

              {/* Desc */}
              <p className="text-[#b3b8d9] text-[13px] leading-relaxed">
                {f.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: f.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
