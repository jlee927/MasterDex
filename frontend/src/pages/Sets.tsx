import { FiSearch } from 'react-icons/fi';
import bg_pokeball from '../assets/pokeball-background.png';
import bg_pokemon from '../assets/background-pokemon.png';
import { Link } from 'react-router-dom'
import SVbase from '../assets/other/Scarlet_and_Violet_Basee_1_1.webp'

const Sets: React.FC = () => {
  return (
    <div className="font-primary relative bg-[#f2f7ff] min-h-screen overflow-hidden">
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
      <div className="relative z-10 px-4 md:px-10 py-10 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-[#2B4F81] mb-6">Browse Sets</h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Search for sets..."
            className="w-full h-12 pl-4 pr-12 text-base rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-[#FAFAFA]"
          />
          <div className="absolute inset-y-0 right-4 flex items-center text-gray-400">
            <FiSearch className="w-5 h-5" />
          </div>
        </div>

        {/* Two-column Layout with fixed sidebar height */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 bg-[#FAFAFA] rounded-xl p-4 shadow-sm flex-shrink-0">
            <h2 className="text-xl font-bold text-[#2B4F81] mb-4">Filters</h2>

            <div className="space-y-6 text-sm text-[#2B4F81]">
              {/* Status Filter */}
              <div>
                <h3 className="font-bold mb-2">Status</h3>
                {['In progress', 'Completed', 'Not Started'].map((label) => (
                  <div className="flex flew-row gap-2">
                    <label key={label} className=" flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                    </label>
                    {label}
                  </div>
                ))}
              </div>

              {/* Total Cards Filter */}
              <div>
                <h3 className="font-bold mb-2">Total Cards</h3>
                {['< 100', '100 - 200'].map((label) => (
                  <div className="flex flew-row gap-2">
                    <label key={label} className=" flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                    </label>
                    {label}
                  </div>
                ))}
              </div>

              {/* Release Date Filter */}
              <div>
                <h3 className="font-bold mb-2">Release Date</h3>
                {['< 100', '100 - 200'].map((label) => (
                  <div className="flex flew-row gap-2">
                    <label key={label} className=" flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                    </label>
                    {label}
                  </div>
                ))}
              </div>

              {/* Set Type Filter */}
              <div>
                <h3 className="font-bold mb-2">Set Type</h3>
                {['Main Expansion', 'Promo/Sub Set'].map((label) => (
                  <div className="flex flew-row gap-2">
                    <label key={label} className=" flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                    </label>
                    {label}
                  </div>
                ))}
              </div>

              {/* Show Filters */}
              <div>
                <h3 className="font-bold mb-2">Show</h3>
                {['Show Tracked Only', 'Show Favorites Only'].map((label) => (
                  <div className="flex flew-row gap-2">
                    <label key={label} className=" flex items-center gap-2">
                      <input type="checkbox" className="cursor-pointer" />
                    </label>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Sets List */}
          {/* src="https://images.pokemontcg.io/sv10/logo.png" */}
          <div className="flex-1 space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-[#FAFAFA] rounded-xl p-4 flex items-center justify-between shadow-sm mr-16 h-36"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://images.pokemontcg.io/swsh${i}/logo.png`}
                    alt="Set"
                    className="w-30 h-30 rounded-md object-cover"
                  />
                  <div className="ml-4">
                    <Link to="/">
                      <h3 className="font-bold text-lg text-[#2B4F81]">
                        Scarlet & Violet Base
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500">120/198 Collected</p>

                    {/* Progress bar */}
                    <div className="w-40 bg-gray-200 rounded-full h-1 mt-2">
                      <div
                        className="bg-[#2B4F81] h-1 rounded-full"
                        style={{ width: `${Math.round((50 / 198) * 100)}%` }}
                      />
                    </div>
                  </div>

                </div>
                <Link to="/set-view">
                  <button className="cursor-pointer bg-[#2B4F81] text-white px-4 py-2 rounded-md text-sm mr-8">
                    Track Set
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sets;

