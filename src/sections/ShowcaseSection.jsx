import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const elements = gsap.utils.toArray(".bento-item");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=40",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="flex-center md:mt-40 mt-20 section-padding xl:px-0 relative z-10">
      <div className="w-full h-full md:px-10 px-5 max-w-[1400px] mx-auto">
        <TitleHeader
          title="Cybersecurity & Infrastructure"
          sub="🛡️ Professional Machinery"
        />

        {/* Bento Grid Layout */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">

          {/* Intro Box - Span 8 */}
          <div className="bento-item md:col-span-8 bg-[#0a0a0f] border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-[#4B83F3]/30 transition-all duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Standard templates fail. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                I build fortified systems.
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-4">
                <span className="flex-center size-10 rounded-2xl bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20 shrink-0 font-bold font-mono">01</span>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">Academic & Offensive Focus</h4>
                  <p className="text-sm text-white/50 leading-relaxed">CS & Engineering student at Vardhaman College. Deep, rigorous foundation in penetration testing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex-center size-10 rounded-2xl bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20 shrink-0 font-bold font-mono">02</span>
                <div>
                  <h4 className="font-semibold text-lg text-white mb-2">Top 1% Global Rank</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Rank #6500 on TryHackMe. Infrastructure built up to the stringent standards of top-tier analysts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Box - Span 4 */}
          <div className="bento-item md:col-span-4 bg-[#0a0a0f] border border-white/5 rounded-[32px] p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 flex flex-col">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-20 translate-x-10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="p-2 border border-white/10 rounded-xl bg-white/5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </span>
              Core Arsenal
            </h3>
            
            <div className="flex flex-wrap gap-2.5 mt-auto mb-6 relative z-10">
              {['C++', 'Python', 'Svelte', 'Redis', 'MongoDB', 'n8n'].map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-[15px] text-white/40 leading-relaxed relative z-10 border-t border-white/10 pt-6 mt-auto">
              Custom architecture engineered from the ground up prioritizing speed, scale, and zero-day resistance.
            </p>
          </div>

          {/* Divider */}
          <div className="bento-item md:col-span-12 mt-8 mb-2 flex items-center gap-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></span>
              <h2 className="text-lg uppercase tracking-[0.2em] font-semibold text-white/50">Vulnerability Research</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
          </div>

          {/* Bug Bounty Cards - 3 spans of 4 */}
          {[
            {
              target: "dev.diagnosticwale.in",
              vulns: ["SQLi", "IDOR", "CORS"],
              severity: "CRIT",
              style: "text-red-400 bg-red-500/10 border-red-500/20",
              hoverStyle: "group-hover:border-red-500/50"
            },
            {
              target: "campustrack.in",
              vulns: ["IDOR", "Data Exposure"],
              severity: "HIGH",
              style: "text-orange-400 bg-orange-500/10 border-orange-500/20",
              hoverStyle: "group-hover:border-orange-500/50"
            },
            {
              target: "College Infra + Dozzle",
              vulns: ["Misconfigs", "Exposure"],
              severity: "CRIT",
              style: "text-red-400 bg-red-500/10 border-red-500/20",
              hoverStyle: "group-hover:border-red-500/50"
            }
          ].map((bug, i) => (
            <div key={i} className={`bento-item md:col-span-4 bg-[#0a0a0f] border border-white/5 rounded-[28px] p-8 group transition-all duration-300 ${bug.hoverStyle}`}>
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <span className={`px-3 py-1 text-xs font-bold tracking-widest rounded-lg border ${bug.style}`}>
                  {bug.severity}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-4 font-mono truncate">{bug.target}</h3>
              <div className="flex flex-wrap gap-2">
                {bug.vulns.map(v => (
                  <span key={v} className="text-xs text-white/50 bg-black/50 px-2.5 py-1.5 rounded-lg border border-white/10">{v}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Divider */}
          <div className="bento-item md:col-span-12 mt-8 mb-2 flex items-center gap-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
            <h2 className="text-lg uppercase tracking-[0.2em] font-semibold text-white/50">Infrastructure Features</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
          </div>

          {/* Core Features - Row 1 */}
          {[
            {
              title: "Real-Time UI",
              desc: "Svelte frontend. <0.5s loads. Zero visual spinners.",
              icon: "⚡", span: "md:col-span-4"
            },
            {
              title: "10k-User Backend",
              desc: "Redis + MongoDB. Handles peak traffic effortlessly.",
              icon: "🗄️", span: "md:col-span-4"
            },
            {
              title: "Autopilot Pipelines",
              desc: "n8n automation syncing endpoints instantaneously.",
              icon: "⚙️", span: "md:col-span-4"
            }
          ].map((feature, i) => (
            <div key={feature.title} className={`bento-item ${feature.span} bg-[#0a0a0f] border border-white/5 rounded-[28px] p-8 flex flex-col justify-between hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group`}>
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex-center text-2xl border border-white/10 mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 origin-left">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-[15px] text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
            </div>
          ))}

          {/* Core Features - Row 2 */}
          {[
            {
              title: "Smart Logistics",
              desc: "1-tap mobile booking to Google Calendar.",
              icon: "📅", span: "md:col-span-3"
            },
            {
              title: "Local SEO Push",
              desc: "Precise algorithmic targeting within a 5km radius.",
              icon: "📍", span: "md:col-span-3"
            },
            {
              title: "Offline Bridge",
              desc: "QR code pipelines for actual physical foot traffic.",
              icon: "🌉", span: "md:col-span-3"
            },
            {
              title: "Demand Alerts",
              desc: "Customer-driven feature & inventory logging.",
              icon: "🔔", span: "md:col-span-3"
            }
          ].map((feature, i) => (
            <div key={feature.title} className={`bento-item ${feature.span} bg-[#0a0a0f] border border-white/5 rounded-[28px] p-6 lg:p-8 flex flex-col justify-between hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 group`}>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex-center text-xl border border-white/10 mb-6 group-hover:scale-110 transition-all duration-300 origin-left">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
            </div>
          ))}

          {/* The Deal - Span 12 */}
          <div className="bento-item md:col-span-12 mt-10 bg-[#0a0a0f] border border-blue-500/20 rounded-[32px] p-2 relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.1)] group">
            {/* Inner dashed glowing border effect */}
            <div className="w-full h-full border border-blue-500/30 border-dashed rounded-[28px] p-8 md:p-14 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-blue-900/10 to-transparent">
              <div className="absolute top-0 right-0 w-[800px] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
              
              <div className="max-w-3xl relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                  <span className="size-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Enterprise Action Plan
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">100-Success</span><br/>Story Protocol
                </h2>
                <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
                  Standard build cost waived. I am expanding my high-performance portfolio globally. Lock in your enterprise digital presence before your direct competitor takes the slot.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full bg-emerald-500/10 flex-center border border-emerald-500/20"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white/80 font-medium">Enterprise Scope</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-6 rounded-full bg-emerald-500/10 flex-center border border-emerald-500/20"><svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span className="text-white/80 font-medium">Standard Cost Waived</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#050508] border border-white/10 rounded-3xl p-8 shrink-0 text-center relative w-full md:w-auto min-w-[320px] group-hover:border-blue-500/30 transition-colors">
                <div className="absolute -top-4 -right-4 size-8 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
                <div className="absolute -top-4 -right-4 size-8 bg-emerald-500 rounded-full border border-white/20 flex-center">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-6">One-Time Setup Fee</p>
                
                <div className="flex justify-center items-start gap-1 pb-2">
                  <span className="text-4xl text-white/50 font-medium mt-1">$</span>
                  <span className="text-8xl font-bold text-white tracking-tighter">60</span>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
                
                <a href="#contact" className="block w-full py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-blue-50 hover:scale-[1.02] transition-all transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Claim Territory
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
