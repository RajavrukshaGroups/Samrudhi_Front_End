import { useRef } from "react";
import "./journeysection.css";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villa.png";
import FadeContent from "../../utils/FadeContent";
import VariableProximity from "../../utils/VariableProximity";

const JourneySection = () => {
  const containerRef = useRef(null);
  return (
    <section className="bg-white py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full mb-10 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Why you should<br />work with us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-5">
          Aptent imperdiet lobortis iaculis ultrices euismod odio pulvinar penatibus. Convallis sagittis taciti facilisis inceptos semper ultrices. Nullam ante erat vehicula dictum iaculis cursus. Bibendum pharetra vehicula egestas elementum curabitur.
        </p>
      </div>
      <div className="flex gap-6 justify-center w-full max-w-6xl mt-4">
        {/* Card 1 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Thumbs Up Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 11V19a2 2 0 002 2h7a2 2 0 002-2v-7.2c0-.7-.4-1.3-1-1.6l-6-3.2a2 2 0 00-2.8 1.8z"/>
              <path d="M2 11h5v10H2z"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Expertise You Can Trust</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Lightning Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8L21 10h-8l1-8z"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Innovative Technology</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Sun Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Commitment to Sustainability</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
        {/* Card 4 */}
        <div className="flex-1 bg-amber-50 border border-yellow-200 rounded-xl p-7 flex flex-col items-start min-w-[250px] max-w-sm">
          <div className="mb-4">
            {/* Solar/Eco Icon (SVG) */}
            <svg width="32" height="32" fill="none" stroke="#3AA47E" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-2">Eco-Friendly Solar System</h3>
          <p className="text-gray-500">
            Inceptos amet litora, ex primis urna fusce. Taciti vestibulum praesent consectetur aliquet lacus at semper mattis augue.
          </p>
        </div>
      </div>
    </section>
    // <section className="journey-section">
    //   <FadeContent
    //     blur={true}
    //     duration={1000}
    //     easing="ease-out"
    //     initialOpacity={0}
    //   >
    //     <h2 data-aos="fade-right" data-aos-delay="200">
    //       Your Journey Begins Here
    //     </h2>
    //   </FadeContent>
    //   <p className="intro-text" data-aos="fade-right" data-aos-delay="200">
    //     We guide you in selecting the best property that aligns with your vision
    //     and goals. With our extensive knowledge and unwavering commitment, we’ll
    //     ensure you make an informed decision that paves the way for a thriving
    //     and prosperous future.
    //   </p>

    //   <div className="journey-container">
    //     <div className="journey-card" data-aos="fade-left" data-aos-delay="200">
    //       <div className="icon-wrapper">
    //         <img src={AboutIcon} alt="Managed Farmland Icon" />
    //       </div>
    //       <div className="text-wrapper">
    //         <FadeContent
    //           blur={true}
    //           duration={1000}
    //           easing="ease-out"
    //           initialOpacity={0}
    //         >
    //           <h3>
    //             <div ref={containerRef} style={{ position: "relative" }}>
    //               <VariableProximity
    //                 label={"Managed Farmland"}
    //                 className={
    //                   "variable-proximity-demo variable-proximity-underline underline-text"
    //                 }
    //                 fromFontVariationSettings="'wght' 550, 'opsz' 9"
    //                 toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //                 containerRef={containerRef}
    //                 radius={100}
    //                 falloff="linear"
    //               />
    //             </div>
    //           </h3>
    //         </FadeContent>
    //         <p>
    //           <VariableProximity
    //             label={
    //               "Our expert team orchestrates sustainable, traditional & organic practices, nurturing each unit for maximum yield. Dedication and expertise converge in managing farmland for enduring prosperity."
    //             }
    //             className={"variable-proximity-demo"}
    //             fromFontVariationSettings="'wght' 400, 'opsz' 9"
    //             toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //             containerRef={containerRef}
    //             radius={100}
    //             falloff="linear"
    //           />
    //         </p>
    //       </div>
    //     </div>

    //     <div className="journey-card" data-aos="fade-left" data-aos-delay="350">
    //       <div className="res-icon">
    //         <img src={ResidentIcon} alt="Residential Icon" />
    //       </div>
    //       <div className="text-wrapper mb-4">
    //         <FadeContent
    //           blur={true}
    //           duration={1000}
    //           easing="ease-out"
    //           initialOpacity={0}
    //         >
    //           <h3>
    //             <div ref={containerRef} style={{ position: "relative" }}>
    //               <VariableProximity
    //                 label={"Residential Projects"}
    //                 className={
    //                   "variable-proximity-demo variable-proximity-underline underline-text"
    //                 }
    //                 fromFontVariationSettings="'wght' 550, 'opsz' 9"
    //                 toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //                 containerRef={containerRef}
    //                 radius={100}
    //                 falloff="linear"
    //               />
    //             </div>
    //           </h3>
    //         </FadeContent>
    //         <p>
    //           <VariableProximity
    //             label={
    //               "An experienced team dedicated to crafting dream homes, blending expertise and vision for impeccable residential projects that resonate with comfort and luxury."
    //             }
    //             className={"variable-proximity-demo"}
    //             fromFontVariationSettings="'wght' 400, 'opsz' 9"
    //             toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //             containerRef={containerRef}
    //             radius={100}
    //             falloff="linear"
    //           />
    //         </p>
    //       </div>
    //     </div>

    //     <div className="journey-card" data-aos="fade-left" data-aos-delay="500">
    //       <div className="icon-wrapper">
    //         <img src={VillaIcon} alt="Row Villa Projects Icon" />
    //       </div>
    //       <div className="text-wrapper">
    //         <FadeContent
    //           blur={true}
    //           duration={1000}
    //           easing="ease-out"
    //           initialOpacity={0}
    //         >
    //           <h3>
    //             <div ref={containerRef} style={{ position: "relative" }}>
    //               <VariableProximity
    //                 label={"Row Villa Projects"}
    //                 className={
    //                   "variable-proximity-demo variable-proximity-underline underline-text"
    //                 }
    //                 fromFontVariationSettings="'wght' 550, 'opsz' 9"
    //                 toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //                 containerRef={containerRef}
    //                 radius={100}
    //                 falloff="linear"
    //               />
    //             </div>
    //           </h3>
    //         </FadeContent>
    //         <p>
    //           <VariableProximity
    //             label={
    //               "Experience the allure of spacious elegance in our Row Villa project, where every residence is a testament to bespoke design,offering a harmonious blend of lavishness, style, and personalized living."
    //             }
    //             className={"variable-proximity-demo"}
    //             fromFontVariationSettings="'wght' 400, 'opsz' 9"
    //             toFontVariationSettings="'wght' 1000, 'opsz' 40"
    //             containerRef={containerRef}
    //             radius={100}
    //             falloff="linear"
    //           />
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default JourneySection;
