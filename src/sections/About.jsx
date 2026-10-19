import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Compass, 
  Layers, 
  Terminal, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Code2,
  Smartphone,
  Cpu,
  Database
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      title: "Web Application Development",
      desc: "Skilled in crafting structured, responsive web applications using HTML5, CSS3, PHP, and Vanilla JavaScript.",
      accent: "from-[#FF202B]/10 to-[#FFA242]/10 border-[#FF202B]/30 hover:border-[#FF202B]",
      dot: "bg-[#FF202B]",
      icon: <Code2 size={18} className="text-[#FF202B]" />
    },
    {
      title: "Real-Time Location & Search",
      desc: "Implemented interactive search and real-time location mapping in systems like DormHub to help users find accommodations.",
      accent: "from-[#FFA242]/10 to-[#FFDD63]/10 border-[#FFA242]/30 hover:border-[#FFA242]",
      dot: "bg-[#FFA242]",
      icon: <Compass size={18} className="text-[#FFA242]" />
    },
    {
      title: "E-Commerce & Verification Modules",
      desc: "Developed shopping cart flows, admin management back-offices, and automated verification systems for order accuracy.",
      accent: "from-[#A0E8E8]/15 to-[#87FEBC]/15 border-[#A0E8E8]/40 hover:border-[#A0E8E8]",
      dot: "bg-[#A0E8E8]",
      icon: <Layers size={18} className="text-[#181A20]" />
    },
    {
      title: "Relational Databases & Work Ethic",
      desc: "Architecting MySQL relational data schemas, driven by high responsibility, punctuality, and strong teamwork capabilities.",
      accent: "from-[#87FEBC]/15 to-white border-[#87FEBC]/40 hover:border-[#87FEBC]",
      dot: "bg-[#87FEBC]",
      icon: <Database size={18} className="text-[#181A20]" />
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC] overflow-visible">
      
      {/* Decorative Floating Color Blob */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[#FFDD63]/25 rounded-full filter blur-3xl pointer-events-none animate-float-reverse -z-10"></div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF202B]/10 text-[#FF202B] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#181A20]">
            About Me
          </h2>
        </div>
        <p className="text-sm text-[#5E6272] max-w-md font-medium">
          A dedicated undergraduate combining theoretical computer science with practical software engineering.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Bio Card (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border-2 border-[#E8E6DC] p-6 sm:p-8 shadow-card space-y-5 relative overflow-hidden">
            
            {/* Top Colored Highlight Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF202B] via-[#FFA242] to-[#87FEBC]"></div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#181A20]">
              Turning ideas into practical, high-efficiency web systems.
            </h3>
            
            <p className="text-[#5E6272] leading-relaxed text-sm sm:text-base">
              I am a Web Developer skilled in <strong className="text-[#181A20]">HTML, CSS, PHP, and JavaScript</strong>, with strong problem-solving and teamwork capabilities. I build practical web systems with a focus on improving operational efficiency.
            </p>

            <p className="text-[#5E6272] leading-relaxed text-sm sm:text-base">
              From engineering the <strong className="text-[#181A20]">DormHub</strong> dormitory search platform with real-time location features to designing <strong className="text-[#181A20]">E-Commerce systems</strong> with automated verification, I am responsible, punctual, and ready to start immediately.
            </p>

            {/* University & Degree Box */}
            <div className="pt-3 border-t border-[#E8E6DC] space-y-3">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-white border border-[#E8E6DC]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF202B] to-[#FFA242] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#181A20]">
                      Bachelor of Computer Science (B.Sc.)
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#FF202B] bg-[#FF202B]/10 px-2.5 py-0.5 rounded-full border border-[#FF202B]/20">
                      GPA 3.10 • Grad 2027
                    </span>
                  </div>
                  <p className="text-xs text-[#5E6272] mt-0.5 font-medium">
                    Phetchaburi Rajabhat University (2023 – 2027)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-white border border-[#E8E6DC]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#87FEBC] to-[#A0E8E8] text-[#181A20] flex items-center justify-center shrink-0 shadow-sm font-bold">
                  ★
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-[#181A20]">
                      Khaoyoiwittaya School (Science-Math)
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#181A20] bg-[#87FEBC]/30 px-2.5 py-0.5 rounded-full border border-[#87FEBC]">
                      GPA 3.50 (2020 – 2022)
                    </span>
                  </div>
                  <p className="text-xs text-[#5E6272] mt-0.5 font-medium">
                    Khao Yoi District, Phetchaburi Province
                  </p>
                </div>
              </div>
            </div>

            {/* Internship Banner */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-[#87FEBC]/25 to-[#A0E8E8]/20 border border-[#87FEBC]/60 text-[#181A20]">
              <div className="p-2 bg-white rounded-xl shadow-sm text-[#181A20]">
                <Calendar size={18} />
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                <span className="font-extrabold text-[#181A20]">Status:</span> Ready to start immediately • Web Developer & Software Opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Right Core Domains Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="text-xs font-mono uppercase tracking-wider text-[#FF202B] mb-2 font-bold flex items-center gap-2">
            <span>Primary Focus Areas</span>
            <span className="h-px flex-1 bg-[#E8E6DC]"></span>
          </div>

          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-gradient-to-r ${item.accent} bg-white rounded-2xl border-2 p-4 sm:p-4.5 shadow-sm hover:shadow-card hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white shadow-sm shrink-0 border border-[#E8E6DC]/60">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181A20] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5E6272] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
