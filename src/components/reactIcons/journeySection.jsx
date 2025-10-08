import { useRef } from "react";
import "./journeysection.css";
import AboutIcon from "../../components/assets/planting (1).png";
import ResidentIcon from "../../components/assets/residentialfhfg.png";
import VillaIcon from "../../components/assets/villa.png";
import FadeContent from "../../utils/FadeContent";
import VariableProximity from "../../utils/VariableProximity";
import MarqueeBanner from "../non-stop-slider/non-stop-slider";
import SolarOverview from "../vision-mision/vision-mision";
import AboutUSMISSION from "../about-us-mission/about-us-mission";
import Servicescards from "../../components/services-atm-cards/services-atm-cards"

const JourneySection = () => {
  const containerRef = useRef(null);
  return (
    <>
    <Servicescards />

      <MarqueeBanner />
    <section className="bg-white py-16 flex flex-col items-center">

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
          <h3 className="font-bold text-xl text-gray-900 mb-2">Client-Centric Excellence</h3>
          <p className="text-gray-500">
           Our foremost commitment is to our clients. We strive to
understand their unique needs and deliver unparalleled service, ensuring a seamless and
rewarding real estate journey.
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
          <h3 className="font-bold text-xl text-gray-900 mb-2">Community Building</h3>
          <p className="text-gray-500">
          We believe in the power of real estate to shape vibrant communities.
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
          <h3 className="font-bold text-xl text-gray-900 mb-2">Innovation and Adaptability</h3>
          <p className="text-gray-500">
           Embracing innovation is at the core of our mission. We
constantly seek new technologies and forward-thinking solutions to enhance our services.
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
          <h3 className="font-bold text-xl text-gray-900 mb-2">Ethical Practices</h3>
          <p className="text-gray-500">
           Integrity is the foundation of Samrudhi. Our mission is to uphold the
highest ethical standards in every aspect of our business.
          </p>
        </div>
      </div>

    </section>
    
    </>
  );
};

export default JourneySection;
