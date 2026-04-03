import { securityProfile, testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
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

          <div id="testimonials" className="testimonial-panel">
            <div className="security-section-head items-start">
              <span className="security-kicker">Testimonials</span>
              <h3 className="text-left">Trusted delivery backed by real outcomes.</h3>
            </div>

            <div className="mt-8">
              {testimonials.map((testimonial, index) => (
                <GlowCard card={testimonial} key={index} index={index}>
                  <div className="flex items-center gap-3">
                    <div>
                      <img src={testimonial.imgPath} alt="" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-white-50">{testimonial.mentions}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
