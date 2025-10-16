import React from "react";
import CommitmentImg from "../../components/assets/commitmentsimage.jpg"

export default function TrustSection() {
  return (
    // <section className="bg-gradient-to-r from-green-100 to-emerald-300 py-16 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 pl-56">
      <section className="bg-gradient-to-r from-white to-white py-16 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 pl-4 sm:pl-6 md:pl-20 lg:pl-56">
      {/* Left: Headings & Features */}
      <div className="flex-1 w-full max-w-xl">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-gray-900 mb-5">
          Our Commitment to Excellence
        </h2>
        <div className="mt-8 space-y-6 lg:space-y-10">
          {/* Feature */}
          <div>
            <div className="flex flex-col sm:flex-row items-baseline sm:gap-2 gap-1">
              <span className="text-gray-400 font-semibold text-lg">01</span>
              <span className="font-bold text-xl sm:text-2xl text-gray-900">
                Ethical Practices and Compliance
              </span>
            </div>
            <p className="text-gray-500 text-sm sm:text-base ml-0 sm:ml-10 max-w-lg">
              We adhere strictly to industry regulations and ethical standards, ensuring all transactions are conducted fairly and transparently. This commitment helps in building a reputable brand that clients and partners trust, reducing legal risks, and setting a positive example for the entire team
            </p>
          </div>

          {/* Feature */}
          <div>
            <div className="flex flex-col sm:flex-row items-baseline sm:gap-2 gap-1">
              <span className="text-gray-400 font-semibold text-lg">02</span>
              <span className="font-bold text-xl sm:text-2xl text-gray-900">
                Continuous Professional Development
              </span>
            </div>
            <p className="text-gray-500 text-sm sm:text-base ml-0 sm:ml-10 max-w-lg">
              Recognizing the dynamic nature of the real estate industry, we invest in ongoing training and development for our team. This ensures that our professionals are equipped with the latest knowledge and skills to serve our clients effectively
            </p>
          </div>

          {/* Feature */}
          <div>
            <div className="flex flex-col sm:flex-row items-baseline sm:gap-2 gap-1">
              <span className="text-gray-400 font-semibold text-lg">03</span>
              <span className="font-bold text-xl sm:text-2xl text-gray-900">
                Advanced Technology Integration
              </span>
            </div>
            <p className="text-gray-500 text-sm sm:text-base ml-0 sm:ml-10 max-w-lg">
              We leverage state-of-the-art technology to streamline operations, enhance client interactions, and manage projects efficiently. Our team is trained on the latest tools to maintain a competitive edge in the market.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Image and Stats */}
      <div className="flex-1 w-full flex justify-center items-center relative mt-10 lg:mt-0">
        <div className="rounded-3xl bg-gradient-to-tr from-gray-300/50 via-emerald-100/40 to-amber-100/80 p-2 lg:p-4 relative max-w-[320px] w-full">
          <img
            src={CommitmentImg}
            alt="Team Member"
            className="rounded-2xl w-full h-auto max-h-[700px] object-cover object-top"
          />

          {/* Floating Stats only show on large screens */}
          <div className="hidden lg:flex absolute -left-16 top-16 bg-white rounded-xl shadow-md px-4 py-1 flex items-center border border-gray-100">
            <span className="text-green-600 font-bold text-sm">Enhance client interactions</span>
          </div>
          <div className="hidden lg:flex absolute right-[-60px] top-32 bg-white rounded-xl shadow-md px-4 py-1 flex items-center border border-gray-100">
            <span className="text-green-600 font-bold text-sm">Advanced technology solutions</span>
          </div>
          <div className="hidden lg:flex absolute left-1/2 -bottom-6 -translate-x-1/2 bg-white rounded-xl shadow-md px-4 py-1 flex items-center border border-gray-100">
            <span className="text-green-600 font-bold text-sm">Competitive market edge</span>
          </div>

          {/* Mobile: place floating stats vertically below image */}
          <div className="lg:hidden flex flex-col gap-3 mt-4">
            <div className="bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 flex items-center justify-center text-center">
              <span className="text-green-600 font-bold text-sm">Enhance client interactions</span>
            </div>
            <div className="bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 flex items-center justify-center text-center">
              <span className="text-green-600 font-bold text-sm">Advanced technology solutions</span>
            </div>
            <div className="bg-white rounded-xl shadow-md px-4 py-2 border border-gray-100 flex items-center justify-center text-center">
              <span className="text-green-600 font-bold text-sm">Competitive market edge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
