
import React from "react";
import { useLocation } from "react-router-dom"; // import useLocation hook
import Logo from "../../components/assets/Samrudhi.png";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-16 py-8 z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <img
            src={Logo}
            width="330"
            height="130"
            className="brightness-125 contrast-150 drop-shadow-2xl"
            alt="brand_logo"
            style={{
              filter:
                "brightness(1.3) contrast(1.6) drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex items-center gap-3 h-16 rounded-full bg-black/20 px-6 ">
        <a
          href="/"
          className={`font-medium px-4 py-2 transition hover:text-yellow-300 rounded-full ${
            isActive("/")
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`font-medium px-4 py-2 transition hover:text-yellow-300 rounded-full ${
            isActive("/about")
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          About
        </a>
        <a
          href="/projects"
          className={`font-medium px-4 py-2 transition hover:text-yellow-300 rounded-full ${
            isActive("/projects")
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Projects
        </a>
      </nav>
      

      {/* Contact button */}
      <a
        href="/contact"
        className="bg-yellow-300 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 transition flex items-center gap-2"
      >
        Get In Touch
        <span className="ml-1">→</span>
      </a>
    </header>
  );
};

export default Navbar;



// import React from "react";
// import Logo from "../../components/assets/Samrudhi.png";

// const Navbar = () => {
//   return (
//     <header className="absolute top-0 left-0 w-full flex items-center justify-between px-16 py-8 z-10">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <div className="relative">
//           <img
//             src={Logo}
//             width="330"
//             height="130"
//             className="brightness-125 contrast-150 drop-shadow-2xl"
//             alt="brand_logo"
//             style={{
//               filter:
//                 "brightness(1.3) contrast(1.6) drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
//             }}
//           />
//         </div>
//       </div>

//       {/* Nav items */}
//       <nav className="flex items-center gap-3 h-16 rounded-full bg-black/20 px-6 ">
//         <a
//           href="/"
//           className="text-black bg-white rounded-full font-medium px-4 py-2 transition hover:text-yellow-300"
//         >
//           Home
//         </a>
//         <a
//           href="/about"
//           className="text-white font-medium px-4 py-2 transition hover:text-yellow-300"
//         >
//           About
//         </a>
//         {/* <div className="relative group">
//           <button className="text-white font-medium px-4 py-2 transition hover:text-yellow-300">
//             Pages ▾
//           </button>
//         </div>
//         <div className="relative group">
//           <button className="text-white font-medium px-4 py-2 transition hover:text-yellow-300">
//             Blog ▾
//           </button>
//         </div> */}
//       </nav>

//       {/* Contact button */}
//       <a
//         href="/"
//         className="bg-yellow-300 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 transition flex items-center gap-2"
//       >
//         Get In Touch
//         <span className="ml-1">→</span>
//       </a>
//     </header>
//   );
// };

// export default Navbar;
