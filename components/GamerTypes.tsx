const types = [
  {
    icon: "⚔️",
    name: "공격형 돌격수",
    desc: "빠른 판단과 과감한 플레이. 팀의 선봉장.",
    color: "#ff4066",
    tag: "공격",
    pct: 82,
  },
  {
    icon: "🛡️",
    name: "전략적 지휘관",
    desc: "냉철한 분석으로 팀을 이끄는 리더.",
    color: "#00e5ff",
    tag: "전략",
    pct: 74,
  },
  {
    icon: "🎯",
    name: "정밀 저격수",
    desc: "극한의 집중력과 정확성의 소유자.",
    color: "#ffd91a",
    tag: "정밀",
    pct: 68,
  },
  {
    icon: "🌿",
    name: "협력형 서포터",
    desc: "팀원을 살리고 승리를 설계하는 縁.",
    color: "#1aff99",
    tag: "서포트",
    pct: 88,
  },
  {
    icon: "🔮",
    name: "창의적 플레이어",
    desc: "예측불가 창의력으로 판을 바꾼다.",
    color: "#8c33ff",
    tag: "창의",
    pct: 61,
  },
  {
    icon: "⚡",
    name: "반응형 어댑터",
    desc: "상황 변화에 가장 빠르게 적응한다.",
    color: "#ff8c1a",
    tag: "적응",
    pct: 77,
  },
];

function TypeCard({ type, index }: { type: typeof types[0]; index: number }) {
  return (
    <div
      className="type-card relative rounded-2xl bg-[#161827] overflow-hidden cursor-pointer group animate-fade-in-up"
      style={{
        border: `1.5px solid ${type.color}33`,
        animationDelay: `${0.1 + index * 0.08}s`,
        animationFillMode: "both",
      }}
    >
      {/* Top accent bar */}
      <div className="h-[4px] w-full" style={{ backgroundColor: type.color }} />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 60px ${type.color}10` }}
      />

      <div className="p-6">
        {/* Icon + Name */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ backgroundColor: `${type.color}20` }}
          >
            {type.icon}
          </div>
          <div>
            <h3 className="font-rajdhani font-bold text-white text-[16px] leading-tight mb-1.5">
              {type.name}
            </h3>
            <span
              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
              style={{ backgroundColor: `${type.color}20`, color: type.color }}
            >
              {type.tag}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#b3b8d9] text-[13px] leading-relaxed mb-6">
          {type.desc}
        </p>

        {/* Progress bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#444768] text-[11px]">플레이어 분포</span>
          <span className="text-[11px] font-semibold" style={{ color: type.color }}>
            {type.pct}%
          </span>
        </div>
        <div className="h-[5px] rounded-full bg-[#2e3359]">
          <div
            className="h-full rounded-full stat-bar"
            style={{
              "--bar-width": `${type.pct}%`,
              backgroundColor: type.color,
              opacity: 0.7,
            } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
}

export default function GamerTypes() {
  return (
    <section className="relative py-24 bg-[#111224]/40">
      <div className="max-w-[1440px] mx-auto px-[60px]">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-rajdhani font-bold text-[36px] text-white mb-4">
            6가지 게이머 유형
          </h2>
          <p className="text-[#b3b8d9] text-[16px] max-w-lg mx-auto">
            당신은 어떤 유형인가요? AI가 플레이 데이터로 정확히 분류해드립니다.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, i) => (
            <TypeCard key={type.name} type={type} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
