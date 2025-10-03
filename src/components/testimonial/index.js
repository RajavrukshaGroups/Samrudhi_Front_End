"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import PngLeaf from "../../components/assets/_Pngtree_leaf_logo_design_icon_vector_4400175-removebg-preview.png"
const testimonials = [
  {
    id: 1,
    name: "Suresh N",
    role: "Property Consultant",
    image: "https://img.freepik.com/premium-vector/boy-cartoon-style-isolated-white-background-smiling-man-office-worker-businessman-cartoon-character-vector-illustration_376167-193.jpg?w=360",
    text: "Our experience with Rajavruksha was outstanding. Their dedicated team ensured a smooth journey to our farm ownership.",
  },
  {
    id: 2,
    name: "Manasa V",
    role: "Real Estate Investor",
    image: "https://img.freepik.com/premium-vector/boy-cartoon-style-isolated-white-background-smiling-man-office-worker-businessman-cartoon-character-vector-illustration_376167-193.jpg?w=360",
    text: "Rajavruksha made our dream of owning a farm a reality. Their transparent dealings and commitment is outstanding and remarkable.",
  },
  {
    id: 3,
    name: "Roshan Kumar",
    role: "Land Surveyor",
    image: "https://img.freepik.com/premium-vector/boy-cartoon-style-isolated-white-background-smiling-man-office-worker-businessman-cartoon-character-vector-illustration_376167-193.jpg?w=360",
    text: "Exceptional service and integrity define Rajavruksha. The process of buying our farm was seamless, satisfying and gratifying.",
  },
  // {
  //   id: 4,
  //   name: "Smitha",
  //   role: "Property Manager",
  //   image: "https://img.freepik.com/premium-vector/boy-cartoon-style-isolated-white-background-smiling-man-office-worker-businessman-cartoon-character-vector-illustration_376167-193.jpg?w=360",
  //   text: "Choosing Rajavruksha for our farm investment was a wise decision. Professionalism and trustworthiness set them apart.",
  // },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative min-h overflow-hidden bg-gradient-to-br from-[#4a5240] via-[#3d4436] to-[#2d3329] py-20">
      {/* Decorative leaves */}
      <div className="pointer-events-none absolute right-10 top-10 h-32 w-32 opacity-40">
        <img src={PngLeaf} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-32 left-10 h-40 w-40 opacity-30">
        <img src={PngLeaf} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="pointer-events-none absolute left-1/3 top-1/3 h-24 w-24 opacity-25">
        <img src={PngLeaf} alt="" className="h-full w-full object-contain" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}

        <div className="mx-auto mb-16 max-w-4xl p-8 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-white">Hear From</p>
          <h2 className="mb-6 text-5xl font-bold text-[#d4a843] md:text-6xl">Our Happy Customers !</h2>
          {/* <p className="text-base leading-relaxed text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p> */}
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mb-12 grid max-w-7xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex flex-col rounded-3xl border-2 border-white/20 bg-black/20 p-8 backdrop-blur-sm"
            >
              {/* Avatar */}
              <div className="absolute -top-10 left-8">
                <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white/30 bg-gray-600">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-12 flex flex-1 flex-col">
                <p className="mb-8 flex-1 text-sm leading-relaxed text-white/90">{testimonial.text}</p>
                {/* Author */}
                <div>
                  <h3 className="mb-1 text-xl font-bold text-[#d4a843]">{testimonial.name}</h3>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="flex h-14 w-14 items-center   justify-center rounded-full border-2 border-white/30 bg-transparent text-white transition-colors hover:border-white/50 hover:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-transparent text-white transition-colors hover:border-white/50 hover:bg-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}



// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import testimonial1 from "../../img/testimonial-1.png";
// import testimonial2 from "../../img/testimonial-2.png";
// import testimonial3 from "../../img/testimonial-3.png";
// import icon from "../../img/gridicons_quote.svg";

// import "./style.css";
// import { InfiniteMovingCardsDemo } from "../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo";

// class Testimonial extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }

//   render() {
//     var settings = {
//       dots: true,
//       arrows: false,
//       speed: 1200,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2500,
//       fade: false,
//       responsive: [
//         {
//           breakpoint: 1030,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 850,
//           settings: {
//             slidesToShow: 2,
//           },
//         },
//         {
//           breakpoint: 700,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//           },
//         },
//       ],
//     };
//     const customerFeedback = [
//       {
//         name: "Smitha",
//         telling:
//           "Choosing Rajavruksha for our farm investment was a wise decision. Professionalism and trustworthiness set them apart.",
//         proffession: "Property Manager",
//       },
//       {
//         name: "Suresh N",
//         telling:
//           "Our experience with Rajavruksha was outstanding. Their dedicated team ensured a smooth journey to our farm ownership.",
//         proffession: "Property Consultant",
//       },
//       {
//         name: "Manasa V",
//         telling:
//           "Rajavruksha made our dream of owning a farm a reality. Their transparent dealings and commitment stood out.",
//         proffession: "Real Estate Investor",
//       },
//       {
//         name: "Roshan Kumar",
//         telling:
//           "Exceptional service and integrity define Rajavruksha. The process of buying our farm was seamless and gratifying.",
//         proffession: "Land Surveyor",
//       },
//     ];

//     return (
//       <div className="testimonial-area new-test pb-5" data-aos="fade-up">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="site-heading">
//                 <h3 className="testimonial-subtitle">Hear From</h3>
//                 <h2 className="testimonial-title">Our Happy Customers !</h2>
//               </div>
//               <InfiniteMovingCardsDemo />
//             </div>
//           </div>
          
//         </div>
//       </div>
//     );
//   }
// }

// export default Testimonial;
