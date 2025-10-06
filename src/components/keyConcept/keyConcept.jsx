// import Image from "next/image"
import AboutImg from "../../components/assets/aboutusimage.jpg";

const  KeyConcept=()=> {
  const features = [
    {
      number: "01.",
      title: "Integrity and Transparency",
      subtitle: "for Surround",
    },
    {
      number: "02.",
      title: "Client-Centric Approach",
      subtitle: "and amenities",
    },
    {
      number: "03.",
      title: "Excellence in Execution",
      subtitle: "Vinings communities",
    },
    {
      number: "04.",
      title: "Innovation and Adaptability",
      subtitle: "stunning views",
    },
    {
      number: "05.",
      title: "Collaboration and Teamwork",
      subtitle: "inspired architecture",
    },
    {
      number: "06.",
      title: "Community Engagement",
      subtitle: "court",
    },
    {
      number: "07.",
      title: "Sustainability and Responsibility",
      subtitle: "court",
    },
    {
      number: "08.",
      title: "Continuous Improvement",
      subtitle: "court",
    },
  ]
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4a5240] via-[#3d4436] to-[#2d3329] ">
      <div className="grid lg:grid-cols-2 min-h-">
        {/* Left Section */}
        <div className="relative flex items-center justify-center p-8 lg:p-16">
          {/* Vertical "FEATURES" text */}
          <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs tracking-[0.3em] text-gray-400 [writing-mode:vertical-lr] rotate-180">
                FEATURES
              </span>
              <div className="w-px h-16 bg-orange-500" />
            </div>
          </div>

          <div className="max-w-2xl w-full ml-8 lg:ml-12">
            {/* Heading */}
            <h1 className="project-subtitle-keyConcept  text-4xl lg:text-5xl xl:text-6xl font-light  mb-12 lg:mb-16 leading-tight">
              Empowering Values for a Better Future
            </h1>

            {/* Features Grid */}
            <div className=" bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="group cursor-pointer transition-all duration-300 hover:translate-x-2">
                    <div className="space-y-3">
                      <span className="text-orange-500 text-sm font-medium tracking-wide transition-all duration-300 group-hover:text-orange-600 group-hover:scale-110 inline-block">
                        {feature.number}
                      </span>
                      <div className="transition-all duration-300 group-hover:translate-x-1">
                        <h3 className="text-bla font-medium text-base leading-snug">{feature.title}</h3>
                        {/* <p className="text-gray-900 font-medium text-base leading-snug">{feature.subtitle}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative h-[400px] lg:h-auto overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 ">
            <img
              src={'https://images.pexels.com/photos/20580717/pexels-photo-20580717/free-photo-of-ivory-cottage-and-green-bushes-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
              alt="Modern living space with balcony featuring two people relaxing "
              fill
              className="object-cover object-center pr-11 border-r pt-5"
              priority
            />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-teal-900/0 transition-all duration-500 group-hover:bg-teal-900/10" />
        </div>
      </div>
    </main>
  )
}
export default KeyConcept