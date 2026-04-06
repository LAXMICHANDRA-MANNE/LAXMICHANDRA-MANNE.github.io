import { securityProfile } from "../constants";
import TitleHeader from "../components/TitleHeader";

const SecurityProfileContainer = () => {
  return (
    <section id="security-profile" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Cybersecurity Profile & Proof of Execution"
          sub="Offensive security depth beside client-facing credibility"
        />

        <div className="security-testimonials-layout mt-16">
          <div className="security-panel">
            <div className="security-hero-card">
              <div className="security-orb security-orb-cyan" />
              <div className="security-orb security-orb-red" />
              <div className="relative z-10">
                <div className="hero-badge">{securityProfile.badge}</div>
                <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight max-w-4xl">
                  {securityProfile.title}
                </h2>
                <p className="mt-6 text-white-50 text-base md:text-lg max-w-3xl leading-8">
                  {securityProfile.intro}
                </p>

                <a
                  href={securityProfile.profileLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className="security-profile-link mt-8"
                >
                  <div className="security-profile-logo" aria-hidden="true">
                    <span>THM</span>
                  </div>
                  <div>
                    <p className="security-profile-label">
                      {securityProfile.profileLink.label}
                    </p>
                    <p className="security-profile-handle">
                      @{securityProfile.profileLink.handle}
                    </p>
                  </div>
                  <span className="security-profile-arrow">Open</span>
                </a>

                <div className="security-identity-grid mt-8">
                  {securityProfile.identityCards.map((item) => (
                    <div key={item} className="security-identity-card">
                      <span className="security-dot" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="security-metrics-grid mt-8">
              {securityProfile.metrics.map((metric) => (
                <article key={metric.label} className="security-metric-card">
                  <p className="security-metric-value">{metric.value}</p>
                  <p className="security-metric-label">{metric.label}</p>
                  <p className="security-metric-detail">{metric.detail}</p>
                </article>
              ))}
            </div>

            <div className="security-bottom-grid mt-8">
              <div className="security-skills-card">
                <div className="security-section-head">
                  <span className="security-kicker">Core technical skills</span>
                  <h3>Attack capability with engineering discipline.</h3>
                </div>

                <div className="mt-8 space-y-6">
                  {securityProfile.skillGroups.map((group) => (
                    <div key={group.title}>
                      <h4 className="security-subtitle">{group.title}</h4>
                      <div className="security-chip-wrap mt-4">
                        {group.items.map((item) => (
                          <span key={item} className="security-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="security-projects-card">
                <div className="security-section-head">
                  <span className="security-kicker">Projects & initiatives</span>
                  <h3>Current tracks, live execution, and applied systems work.</h3>
                </div>

                <div className="mt-8 space-y-4">
                  {securityProfile.projects.map((project) => (
                    <article key={project.title} className="security-project-card">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h4 className="security-subtitle">{project.title}</h4>
                        <span className="security-project-period">{project.period}</span>
                      </div>
                      <p className="mt-3 text-white-50 leading-7">
                        {project.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="philosophy" className="testimonial-panel flex flex-col gap-8">
            <div className="security-section-head items-start">
              <span className="security-kicker">Philosophy & Execution</span>
              <h3 className="text-left">Architected for offensive resilience.</h3>
            </div>

            <div className="flex-1 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-400/30 group">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">01. Threat-Modeled Design</h4>
                <p className="text-white-50 leading-relaxed text-[15px]">
                  Infrastructure is built assuming a hostile environment. Every service boundary is treated as a potential attack vector, enforcing strict isolation and zero-trust policies before deployment.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-400/30 group">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">02. Automated Enforcement</h4>
                <p className="text-white-50 leading-relaxed text-[15px]">
                  Scale requires automation. Security practices are baked directly into the pipeline—SAST, DAST, and configuration hardening execute dynamically alongside standard workflows.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-400/30 group">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">03. High-Fidelity Observability</h4>
                <p className="text-white-50 leading-relaxed text-[15px]">
                  Without visibility, incident response is blind. Deep instrumentation ensures anomalous behaviors, memory exploits, and unauthorized traversals trigger immediate alerts.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-400/30 group">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">04. Execution Over Templates</h4>
                <p className="text-white-50 leading-relaxed text-[15px]">
                  Standard templates harbor legacy vulnerabilities. Systems are developed ground-up with a bias towards modern, hardened frameworks for mission-critical execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityProfileContainer;
