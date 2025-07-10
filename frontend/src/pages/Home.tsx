import blastoise from "../assets/blas.png"; // Replace with your actual image path
import logo from "../assets/logos/masterdex-logo.png"; // Replace with your actual image path
import icon1 from "../assets/masterdex_icon_1_notext.png"
import icon2 from "../assets/masterdex_icon_2_notext.png"
import icon3 from "../assets/masterdex_icon_3_notext.png"
import icon4 from "../assets/icon4.webp"
import icon5 from "../assets/icon4.jpg"
import { Link } from "react-router-dom"

// Define prop types for FeatureCard
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  button: string;
}

// Reusable FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, button }) => {
  return (
    <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
      <img src={icon} alt={title} className="w-36 h-36 object-contain" />
      <h3 className="text-2xl font-extrabold pt-6 tracking-wide">{title}</h3>
      <p className="text-sm text-gray-700 px-4 pt-4 leading-relaxed">
        {description}
      </p>

      <button
        type="button"
        className="bg-[#2B4F81] text-white px-6 py-3 mt-6 rounded-xl hover:bg-[#1f3a5f] transition"
      >
        {button}
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="font-primary">
      <div className="h-auto pb-26 bg-[#2b4e7c] px-6 md:px-16 text-[#FAFAFA] flex flex-col md:flex-row items-start justify-between">
        {/* Left Logo Block */}
        <div className="mt-18 mb-6 md:mb-0 ml-32">
          <div className="bg-yellow-400 w-56 h-52">
            <img src={logo} alt="Masterdex Logo" className="object-contain" />
          </div>
        </div>

        {/* Center Text Block */}
        <div className="flex-1 mt-18 ml-4 text-center md:text-left px-6">
          <h1 className="text-4xl tracking-wide font-extrabold leading-snug">
            COMPLETE YOUR <br />
            <span className="text-[#FAFAFA]">MASTER SET</span>
          </h1>
          <p className="mt-4 text-base md:text-lg">
            Track your collection, find missing cards, and trade with fellow trainers.
          </p>
          <Link to="/generations">
            <button className="mt-6 bg-[#FFD700] text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-200 transition cursor-pointer">
              GET STARTED
            </button>
          </Link>
        </div>

        {/* Right Blastoise Card */}
        <div className="mt-6 md:mt-0">
          <img
            src={blastoise}
            alt="Blastoise Card"
            className="w-52 md:w-60 rotate-[10deg] mt-8 mr-60 shadow-md hover:shadow-2xl transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Yellow background Section */}
      <div className="bg-[#FFD700] flex-1 font-primary h-auto pb-9 ">
        {/* Feature Section */}
        <div className="bg-[#FFD700] py-16 text-center">
          <h2 className="text-3xl text-[#2B4F81] font-extrabold tracking-wide mb-12">
            YOUR JOURNEY TO MASTERY
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-16 px-6">
            <FeatureCard
              icon={icon1}
              title="Collection Manager"
              description="Easily log your Pokémon cards, track set completion, and identify exactly what you need"
              button="Start Tracking"
            />

            <FeatureCard
              icon={icon2}
              title="Smart Trading"
              description="Discover and connect with fellow collectors to securely trade your duplicates for missing cards."
              button="Start Trading"
            />

            <FeatureCard
              icon={icon3}
              title="Card Finder"
              description="Explore every official Pokémon TCG card, detailed stats, rarities, and set information. To see what you like"
              button="Search Cards"
            />
          </div>
        </div>
      </div>

      {/* Blue background Section */}
      <div className="bg-[#2b4e7c] py-20 px-6 md:px-20 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-3xl font-extrabold text-white mb-12 tracking-wide">
          ABOUT US
        </h2>

        <div className="flex flex-col ml-24 md:flex-row items-center gap-10 md:gap-20 w-full max-w-7xl">
          <img
            src={icon5}
            alt="Binder of Cards"
            className="w-[320px] rounded-lg shadow-lg"
          />

          <p className="text-[#FAFAFA] text-lg leading-relaxed md:text-left max-w-2xl">
            At DexComplete, we understand the thrill of the hunt – and the frustration that often comes with it.
            As avid Pokémon TCG collectors ourselves, we faced the same challenges many of you do: trying to
            complete that elusive master set, sifting through endless digital notes, and struggling to find reliable
            ways to trade. We built DexComplete out of that very need. It's the platform we wished we had – a
            reliable, centralized hub to track your collection, identify your missing pieces, and connect with a
            community eager to trade, whether it's for those last few rare cards or the valuable bulk you're ready
            to share. Your master set journey just got easier.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home
