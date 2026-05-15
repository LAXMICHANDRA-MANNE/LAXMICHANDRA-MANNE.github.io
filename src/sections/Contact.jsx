import { Suspense, lazy, useEffect, useRef, useState } from "react";

import TitleHeader from "../components/TitleHeader";

const ContactExperience = lazy(() =>
  import("../components/models/contact/ContactExperience")
);

const Contact = () => {
  const sectionRef = useRef(null);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || showScene) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowScene(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [showScene]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 min-h-96">
              <div className="w-full flex flex-col gap-7 text-center justify-center h-full">
                <p className="text-xl md:text-2xl font-semibold text-white">
                  Please reach out to <a href="mailto:xrstarter@gmail.com" className="text-[#cd7c2e] hover:underline">xrstarter@gmail.com</a>
                </p>
                <p className="text-lg text-white/80">
                  Feel free to text there! 💬
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {showScene ? (
                <Suspense fallback={null}>
                  <ContactExperience />
                </Suspense>
              ) : (
                <div className="flex h-full min-h-96 items-center justify-center px-6 text-center text-white/80">
                  3D preview loads when this section enters the viewport.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
