import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

   
  const handleCaseStudyClick = () => {
    // Will open case study link (external website)
    window.open("https://medium.com/@nkosilesego8/case-study-redesigning-capitecs-login-experience-50e0aad65ffd", "_blank");
  };

  const handleHotiloProjectClick = () => {
    // Will navigate to project page
    window.open("http://localhost:5173/", "_blank");
  };

  const handleKasiConnectClick = () => {
    // Will navigate to  project page  
    
    window.open("https://www.canva.com/design/DAG0r7eYmTk/35Ww9CuSqnsY_vJiIyGI2w/edit?utm_content=DAG0r7eYmTk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", "_blank");
  };


  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Case Study" />
            </div>
            <div className="text-content">
              <h2>
                Case Study
              </h2>
              <p className="text-white-50 md:text-xl">
                A case study
              </p>
              <div>
              
               {/* See Project Button */}
                 <button 
                onClick={handleCaseStudyClick}
                className="mt-6 cta-wrapper"
              >
                <div className="cta-button group group flex items-center justify-between gap-4 px-6 py-4 min-w-[180px]">
                  <div className="bg-circle" />
                  <p className="text">Read Case Study</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
              </div>
            
               
            </div>
            
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Accommodation Booking App"
                />
              </div>
              <h2>Hotilo – Stay Your Way</h2>
              <p className="text-white-50 md:text-xl">
                An accommodation booking app built with React.js, Tailwind CSS, and Clerk authentication. Frontend developed to deliver smooth user experiences.
              </p>
              <div>
               {/* See Project Button */}
               <button 
               onClick={handleHotiloProjectClick}
                className="mt-4 cta-wrapper"
               >
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      See Project
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                </div>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Kasi Connect" />
              </div>
              <h2>Kasi Connect – Hidden Gems Nearby</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
<button 
                onClick={handleKasiConnectClick}
                className="mt-4 cta-wrapper"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">See Project</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;