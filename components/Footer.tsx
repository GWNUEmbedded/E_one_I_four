const footerLinks = ["서비스 소개", "개인정보처리방침", "이용약관", "문의하기"];
const socials = ["Twitter", "Discord", "GitHub"];

export default function Footer() {
  return (
    <footer className="border-t border-[#2e3359] bg-[#0a0b14]">
      <div className="max-w-[1440px] mx-auto px-[60px] py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-md flex items-center justify-center border border-[#00e5ff]/60 bg-[#00e5ff]/15">
              <span className="font-rajdhani font-bold text-[#00e5ff] text-xs">GT</span>
            </div>
            <span className="font-rajdhani font-bold text-white text-[15px]">GamerType</span>
          </div>
          <p className="text-[#444768] text-[13px]">
            © 2025 GamerType. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#666a8c] text-[13px] hover:text-[#b3b8d9] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s}
              href="#"
              className="text-[#444768] text-[12px] hover:text-[#00e5ff] transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
