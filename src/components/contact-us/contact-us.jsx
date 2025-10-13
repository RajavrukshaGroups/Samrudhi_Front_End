import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from '../navbar/navbar';
import Footer from '../../components/footer/index';
export default function ContactCard() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#b0f9ba] flex items-center justify-center py-10 pt-72">
      <div className="bg-[#224625] rounded-3xl shadow-xl p-10 flex flex-col md:flex-row md:items-center md:justify-between max-w-4xl w-full">
        {/* Left Section: Headline & Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-3xl font-bold mb-2">
            LET’S BUILD SOMETHING GREAT.
          </h2>
          <p className="text-white text-sm mb-7 opacity-90">
            Connect with us and start your sustainable journey.
          </p>
          <form className="bg-white rounded-xl p-5 shadow-lg flex flex-col gap-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none"
              />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none"
              />
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none resize-none h-24"
            />
            <button
              type="submit"
              className="bg-[#79915a] text-white py-2 rounded font-semibold hover:bg-[#5d7048] transition"
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
        {/* Right Section: Contact Info */}
        <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0 flex flex-col justify-center">
          <div className="flex items-center space-x-4 mb-5">
            <div className="bg-white rounded-full p-2">
              <FaMapMarkerAlt className="text-[#224625] text-xl" />
            </div>
            <div>
              <p className="text-xs text-[#b2bea5] font-medium m-0">OUR HUB:</p>
              <p className="text-white text-sm">
                Bengaloore, Eco-City, CA 90210
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-5">
            <div className="bg-white rounded-full p-2">
              <FaPhoneAlt className="text-[#224625] text-xl" />
            </div>
            <div>
              <p className="text-xs text-[#b2bea5] font-medium m-0">CALL US:</p>
              <p className="text-white text-sm">
                +1 (555) ECO-SOLV (326-7658)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-5">
            <div className="bg-white rounded-full p-2">
              <FaEnvelope className="text-[#224625] text-xl" />
            </div>
            <div>
              <p className="text-xs text-[#b2bea5] font-medium m-0">EMAIL US:</p>
              <p className="text-white text-sm">
                test@ssss.com
              </p>
            </div>
          </div>
          <div className="mt-5 text-[#b2bea5] text-xs">
            <b>OPERATING HOURS:</b>
            <br />
            Mon-Fri: 9am-5pm EST
          </div>
        </div>
      </div>
    </div>
    <Footer />
              </>
  );
}
