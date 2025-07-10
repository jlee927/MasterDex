import { FiSearch } from 'react-icons/fi';
import bg_pokeball from '../assets/pokeball-background.png';
import bg_pokemon from '../assets/background-pokemon.png';
import svGen from '../assets/other/Pokemon-Scarlet-Violet.webp';
import { Link } from 'react-router-dom'

interface GenerationCardProps {
  icon: string;
  title: string;
  generation: number;
}

const GenerationCard: React.FC<GenerationCardProps> = ({ icon, title, generation }) => {
  return (
    <div className="bg-white rounded-2xl px-4 py-8 w-full max-w-xs shadow-md flex flex-col text-left">
      <img src={icon} alt={title} className="w-48 h-28 object-contain self-center" />
      <div className="border-t w-full my-4" />
      <div className="mb-4">
        <p className="text-sm text-gray-500">Gen {generation}</p>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>


      <Link to="/sets">
        <button className="cursor-pointer bg-[#316BBD] text-white text-sm w-full py-2 px-4 rounded-md text-center">
          Browse &gt;
        </button>
      </Link>
    </div>
  );
};

const Generations: React.FC = () => {
  return (
    <div className="relative bg-[#f2f7ff] min-h-screen overflow-hidden">
      {/* Background Images */}
      <img
        src={bg_pokeball}
        alt="Pokeball"
        className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] object-contain z-0 opacity-35 pointer-events-none"
      />
      <img
        src={bg_pokeball}
        alt="Pokeball"
        className="absolute top-[45%] right-[15%] w-[600px] h-[600px] object-contain z-0 opacity-35 pointer-events-none"
      />
      <img
        src={bg_pokemon}
        alt="Pokemon"
        className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] object-contain z-0 opacity-35 pointer-events-none"
      />

      {/* Main Content Wrapper */}
      <div className="justify-center relative z-10 px-10 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2B4F81] mb-6">Browse Generations</h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl mb-6">
          <input
            type="text"
            placeholder="Search for generation..."
            className="w-full h-12 pl-4 pr-12 text-base rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-[#FAFAFA]"
          />
          <div className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            <FiSearch className="w-5 h-5" />
          </div>
        </div>

        {/* View All Sets Button */}
        <button className="text-[#FAFAFA] bg-[#316BBD] py-2 px-8 rounded-lg mb-10">
          View All Sets
        </button>

        {/* Card Grid - Aligned Left with Rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={9} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={8} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={7} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={6} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={5} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={4} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={3} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={2} />
          <GenerationCard icon={svGen} title="Scarlet & Violet" generation={1} />
          {/* Add more cards here */}
        </div>
      </div>
    </div>
  );
};

export default Generations;

