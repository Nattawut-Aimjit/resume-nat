import React from 'react';
import { journeyData } from '../data/journey';
import { 
  Trophy, 
  Briefcase, 
  Code, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Award,
  Medal
} from 'lucide-react';

const Achievements = () => {
  const experiences = [
    {
      title: "DORMHUB — Dormitory Search System",
      role: "Lead Web Developer",
      project: "Web-based Dormitory Search & Real-Time Location Platform",
      period: "2023 – 2025",
      tag: "Major Project",
      tagStyle: "bg-gradient-to-r from-[#FFDD63] to-[#FFA242] text-[#181A20]",
      border: "border-[#FFDD63] hover:border-[#FFA242]",
      iconBg: "bg-gradient-to-br from-[#FF202B] to-[#FFA242] text-white",
      icon: <Code size={22} />,
      points: [
        "Developed a web application using HTML, CSS, PHP, and JavaScript for searching and listing dormitories.",
        "Implemented dormitory search and real-time location features to help users find suitable accommodations.",
        "Created a feature for dormitory owners to add and manage their dormitory information and room listings."
      ]
    },
    {
      title: "E-Commerce Basic System",
      role: "Backend & Web Developer",
      project: "Online Storefront with Automated Order Verification",
      period: "2023 – 2025",
      tag: "Web System",
      tagStyle: "bg-[#87FEBC]/30 text-[#181A20] border border-[#87FEBC]",
      border: "border-[#87FEBC] hover:border-[#181A20]",
      iconBg: "bg-[#87FEBC] text-[#181A20]",
      icon: <Briefcase size={22} />,
      points: [
        "Built responsive shopping cart features and comprehensive backend management modules.",
        "Improved order accuracy through an automated verification system that validates customer transactions.",
        "Engineered database tables for catalog items, customer orders, and transaction integrity."
      ]
    },
    {
      title: "Academic Background & Professional Ethics",
      role: "Computer Science Undergraduate (GPA: 3.10)",
      project: "Phetchaburi Rajabhat University & Khaoyoiwittaya School",
      period: "2020 – 2027",
      tag: "Education & Ethics",
      tagStyle: "bg-[#A0E8E8]/40 text-[#181A20] border border-[#A0E8E8]",
      border: "border-[#A0E8E8] hover:border-[#FFA242]",
      iconBg: "bg-[#A0E8E8] text-[#181A20]",
      icon: <Trophy size={22} />,
      points: [
        "Graduated from Khaoyoiwittaya School (Science-Math) with GPA 3.50; currently earning B.Sc. in CS at PBRU with GPA 3.10.",
        "Equipped with strong problem-solving skills, creativity, punctuality, and proven teamwork capabilities.",
        "Ready to start immediately for full-time or internship web development and software engineering positions."
      ]
    }
  ];

  const yearColors = [
    { badge: "bg-[#FF202B]/10 text-[#FF202B] border-[#FF202B]/20", dot: "bg-[#FF202B]" },
    { badge: "bg-[#FFA242]/15 text-[#FFA242] border-[#FFA242]/30", dot: "bg-[#FFA242]" },
    { badge: "bg-[#A0E8E8]/30 text-[#181A20] border-[#A0E8E8]", dot: "bg-[#A0E8E8]" },
    { badge: "bg-[#87FEBC]/30 text-[#181A20] border-[#87FEBC]", dot: "bg-[#87FEBC]" },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 max-w-6xl mx-auto border-t border-[#E8E6DC] overflow-visible">
      
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#FFA242]/20 rounded-full filter blur-3xl pointer-events-none animate-float-slow -z-10"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF202B]/10 text-[#FF202B] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Medal size={13} />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-[#181A20]">
            Experience & Milestones
          </h2>
        </div>
        <p className="text-sm text-[#5E6272] max-w-md font-medium">
          Key competitive achievements, university roles, and the 4-year Computer Science learning curve.
        </p>
      </div>

      {/* Main Experience Cards */}
      <div className="space-y-6 mb-20">
        {experiences.map((item, index) => (
          <div 
            key={index}
            className={`bg-white rounded-3xl border-2 border-[#E8E6DC] ${item.border} p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className={`p-3.5 rounded-2xl ${item.iconBg} shadow-sm shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full shadow-sm ${item.tagStyle}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#5E6272] flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-0.5 rounded-md border border-[#E8E6DC]">
                      <Calendar size={12} className="text-[#FFA242]" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#181A20]">
                    {item.title}
                  </h3>
                  <div className="text-sm font-bold text-[#FFA242] mt-0.5">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-[#5E6272] mb-4 bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#E8E6DC] inline-block font-semibold">
              Project Focus: <span className="text-[#181A20] font-bold">{item.project}</span>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-[#E8E6DC]">
              {item.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#181A20] leading-relaxed">
                  <CheckCircle2 size={16} className="text-[#87FEBC] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Timeline / Journey Progression */}
      <div>
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFA242]/10 text-[#FFA242] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Academic Trajectory</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#181A20]">
            University Curriculum & Progression
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {journeyData.map((phase, idx) => {
            const colors = yearColors[idx % yearColors.length];

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border-2 border-[#E8E6DC] hover:border-[#FFA242] p-5 shadow-sm hover:shadow-card transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                      {phase.year}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#5E6272]">PBRU CS</span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#181A20] mb-3">
                    {phase.title}
                  </h4>

                  <ul className="space-y-2 text-xs text-[#5E6272] font-medium">
                    {phase.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${colors.dot} shrink-0`}></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Achievements;
