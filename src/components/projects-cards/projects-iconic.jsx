// SolarPage.jsx
import React from "react";
import PrjectPage from "../../components/assets/residential.png";
import ProjectCardContainer from "../../components/projects-cards/projects-container";
import ProjectCard from "./projects-cards";
import "./project.css";
import ProjectImage from "../../components/assets/project_one.jpg"
import ProjectImagetwo from "../../components/assets/project_two.jpg"

export default function PojectIconic() {
  return (
    <>
      <div class="min-h- bg-[#277056] py-12 px-4 lg:px-20">
        <div class="max-w-7xl mx-auto">
          {/* Main Content Area - Single Column Layout */}
          <div class="bg-[#277056] rounded-2xl p-8 shadow-md">
            <h2 class="text-6xl font-semibold text-white mb-8 text-center">Our Projects</h2>

            {/* Projects Grid - 3 cards in a row */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Project Card 1 */}
            <div class="project-card group relative overflow-hidden rounded-xl cursor-pointer h-full flex flex-col">
  {/* Background image container with logo overlay */}
  <div 
    class="project-image-container h-56 overflow-hidden rounded-t-xl flex-shrink-0 relative flex items-center justify-center"
    style={{
      backgroundImage: 'url(https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Dark overlay for better contrast */}
    <div class="absolute inset-0 bg-black/40"></div>
    
    {/* Logo */}
    <img
      src="https://rajavrukshagroup.in/static/media/Sylvan-official-logo.03abfc0da66b2119cfef.png"
      alt="Sylvan Retreat"
      class="relative z-10 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
    />
    
    {/* Gradient overlay at bottom */}
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
  </div>
  
  {/* Content section */}
  <div class="project-content bg-white p-5 rounded-b-xl flex-grow flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <span class="font-semibold text-gray-900 text-lg">Sylvan Retreat</span>
      </div>
      <svg class="h-5 w-5 text-gray-500 group-hover:text-green-700 transition-colors flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
  
  {/* Hover Overlay */}
  <div class="absolute inset-0 bg-green-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-20">
    <span class="text-white font-semibold text-xl">View Project</span>
  </div>
</div>

              {/* Project Card 2 */}
                <div class="project-card group relative overflow-hidden rounded-xl cursor-pointer h-full flex flex-col">
  {/* Background image container with logo overlay */}
  <div 
    class="project-image-container h-56 overflow-hidden rounded-t-xl flex-shrink-0 relative flex items-center justify-center"
    style={{
      backgroundImage: `url(${ProjectImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Dark overlay for better contrast */}
    <div class="absolute inset-0 bg-black/40"></div>
    
    {/* Logo */}
    <img
      src="https://rajavrukshagroup.in/static/media/Plumeria_new_logo.45a27dbbb49aa8903d0b.png"
      alt="Sylvan Retreat"
      class="relative z-10 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
    />
    
    {/* Gradient overlay at bottom */}
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
  </div>
  
  {/* Content section */}
  <div class="project-content bg-white p-5 rounded-b-xl flex-grow flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <span class="font-semibold text-gray-900 text-lg">Aarika</span>
      </div>
      <svg class="h-5 w-5 text-gray-500 group-hover:text-green-700 transition-colors flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
  
  {/* Hover Overlay */}
  <div class="absolute inset-0 bg-green-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-20">
    <span class="text-white font-semibold text-xl">View Project</span>
  </div>
</div>

              {/* Project Card 3 */}
              <div class="project-card group relative overflow-hidden rounded-xl cursor-pointer h-full flex flex-col">
  {/* Background image container with logo overlay */}
  <div 
    class="project-image-container h-56 overflow-hidden rounded-t-xl flex-shrink-0 relative flex items-center justify-center"
    style={{
      backgroundImage: `url(${ProjectImagetwo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Dark overlay for better contrast */}
    <div class="absolute inset-0 bg-black/40"></div>
    
    {/* Logo */}
    <img
      src="https://digitaleliteservices.in/assets/DHS.png"
      alt="Sylvan Retreat"
      class="relative z-10 w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
    />
    
    {/* Gradient overlay at bottom */}
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
  </div>
  
  {/* Content section */}
  <div class="project-content bg-white p-5 rounded-b-xl flex-grow flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center mr-3 flex-shrink-0">
          <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <span class="font-semibold text-gray-900 text-lg">DHS Projects</span>
      </div>
      <svg class="h-5 w-5 text-gray-500 group-hover:text-green-700 transition-colors flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
  
  {/* Hover Overlay */}
  <div class="absolute inset-0 bg-green-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-20">
    <span class="text-white font-semibold text-xl">View Project</span>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// SolarPage.jsx
// import React from "react";
// import PrjectPage from "../../components/assets/residential.png"
// import ProjectCardContainer from "../../components/projects-cards/projects-container"
// import ProjectCard from "./projects-cards";
// export default function PojectIconic() {
//   return (
//     <>
//     <div className="min-h- bg-[#277056] py-12 px-4 lg:px-20">
//       <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
//         {/* Left Section */}
//         <div className="flex-1">
//           <img
//             src="https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // replace with actual image URL
//             alt="Solar Panels"
//             className="w-full h-72 object-cover rounded-xl mb-8"
//           />
        
//         </div>

//         {/* Right Sidebar */}
//         <div className="flex flex-col gap-8 lg:w-[350px]">
//           {/* Our Solution Card */}
          
//           <div className="bg-[#f7f8f2] rounded-2xl p-7 shadow-md">
            
//             <h2 className="text-xl font-semibold text-green-900 mb-4 ">Our Projects</h2>
            
//             <div className="space-y-3">
//               {[
//                   "Sylvan Retreat",
//                   "Aarika",
//                   "DHS Projects",
//                 ].map((item, idx) => (
//                     <button
//                     key={item}
//                     className="w-full flex justify-between items-center bg-white rounded-lg px-4 py-2 text-gray-900 shadow hover:bg-gray-100 focus:outline-none transition"
//                     >
//                   {item}
//                   <img src="https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
//                   <svg className="h-5 w-5 text-gray-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               ))}
//             </div>        
//           </div>       
//           {/* Contact Card */}
//         </div>


//       </div>
//     </div>
    
//               </>
//   );
// }
