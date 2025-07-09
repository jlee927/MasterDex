// Navbar.jsx
import { Search, ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="font-primary w-full 24 pr-32 bg-[#2b4e7c] text-white py-9 px-8 flex items-center justify-end">
      {/* Search Bar */}
      <div className="flex-1 flex justify-between ml-80">
        <div className="bg-white rounded-full flex items-center px-4 py-2 w-96 max-w-full">
          <input
            type="text"
            placeholder="Search for cards, sets or trainers..."
            className="flex-grow text-black placeholder-gray-500 outline-none bg-transparent"
          />
          <Search size={18} className="text-gray-600" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex text-xl items-center space-x-6">
        <a href="#" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Trading</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar
