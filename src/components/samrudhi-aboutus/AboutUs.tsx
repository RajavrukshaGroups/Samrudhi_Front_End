import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import aboutBg from "../../components/assets/background_images.jpg";
import Navbar from "../navbar/navbar";

const AboutUs = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <Navbar />
    <div className="p-20 bg-[#E5E7EB] " style={{ backgroundImage: `url(${aboutBg})` }}></div>
    <main
      className="relative min-h-screen  flex items-center justify-center p-6 md:p-12 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${aboutBg})` }}
      >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      {/* ✅ Previous Page Button */}
    

      {/* Content */}
      <article
        className={`
          relative max-w-4xl w-full bg-card/95 backdrop-blur-md
          border-2 border-accent/30 rounded-2xl p-8 md:p-12 lg:p-16
          shadow-2xl transition-all duration-1000
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.3)]
          hover:border-accent/50 hover:scale-[1.02]
          animate-float
          `}
      >
        <div className="space-y-6">
          <h1 className="text-4xl text-green-900 md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up ">
            About Us
          </h1>

          <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
              At Samrudhi, we are driven by a vision: to create exceptional spaces that inspire, endure, and
              elevate the way people live and invest. We are committed to shaping inspired living through
              visionary developments and bespoke real estate solutions.
            </p>

            <p>
              As both a property developer and a full-spectrum real estate service provider, we seamlessly
              integrate superior construction standards with curated living and investment opportunity. We
              unite architectural excellence with strategic insight to deliver projects of enduring value.
            </p>

            <p className="text-lg md:text-xl font-medium text-primary/90 pt-4">
              Our expertise spans strategic acquisitions, asset optimization, and bespoke advisory
              services—delivered with discretion, rigor, and an uncompromising commitment to excellence.
            </p>
          </div>

              

          <div className="pt-8 border-t border-accent/20 mt-8">
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-accent rounded-full animate-pulse" />
              <p className="text-sm font-semibold tracking-wider text-accent uppercase">
                Shaping Inspired Living
              </p>
              <div className="h-1 w-12 bg-accent rounded-full animate-pulse" />
            </div>
          </div>
  
        </div>
         <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="absolute top-6 left-6 px-4 py-2 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 z-10"
      >
        ← Previous Page
      </button>
    
      </article>
    </main>
          </>
  );
};

export default AboutUs;



// import { useEffect, useState } from "react";
// import aboutBg from "../../components/assets/about-bg.jpg";
// import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

// const AboutUs = () => {
//   const [isVisible, setIsVisible] = useState(false);
//     const navigate = useNavigate(); // ✅ Initialize navigation

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <main 
//       className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-cover bg-center bg-fixed"
//       style={{ backgroundImage: `url(${aboutBg})` }}
//     >
//       <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
      
//       <article 
//         className={`
//           relative max-w-4xl w-full bg-card/95 backdrop-blur-md
//           border-2 border-accent/30 rounded-2xl p-8 md:p-12 lg:p-16
//           shadow-2xl transition-all duration-1000
//           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//           hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.3)]
//           hover:border-accent/50 hover:scale-[1.02]
//           animate-float
//         `}
//       >
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 animate-fade-in-up">
//             About Us
//           </h1>
          
//           <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed animate-fade-in-up [animation-delay:200ms]">
//             <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
//               At Samrudhi, we are driven by a vision: to create exceptional spaces that inspire, endure, and
//               elevate the way people live and invest. We are committed to shaping inspired living through
//               visionary developments and bespoke real estate solutions.
//             </p>
            
//             <p>
//               As both a property developer and a full-spectrum real estate service provider, we seamlessly 
//               integrate superior construction standards with curated living and investment opportunity. We 
//               unite architectural excellence with strategic insight to deliver projects of enduring value.
//             </p>
            
//             <p className="text-lg md:text-xl font-medium text-primary/90 pt-4">
//               Our expertise spans strategic acquisitions, asset optimization, and bespoke advisory 
//               services—delivered with discretion, rigor, and an uncompromising commitment to excellence.
//             </p>
//           </div>

//           <div className="pt-8 border-t border-accent/20 mt-8">
//             <div className="flex items-center justify-center gap-2">
//               <div className="h-1 w-12 bg-accent rounded-full animate-pulse" />
//               <p className="text-sm font-semibold tracking-wider text-accent uppercase">
//                 Shaping Inspired Living
//               </p>
//               <div className="h-1 w-12 bg-accent rounded-full animate-pulse" />
//             </div>
//           </div>
//         </div>
//       </article>
//     </main>
//   );
// };

// export default AboutUs;
