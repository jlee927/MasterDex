import logo from '../assets/logos/original.png';
import { Link } from 'react-router-dom';

const Navbar2: React.FC = () => {
  return (
    <nav className="font-primary w-full bg-[#2b4e7c] text-white h-24 font-base flex items-center justify-between pr-10">
      {/* Logo flush left, full height, clickable */}
      <Link to="/" className="h-full">
        <img src={logo} alt="MasterDex Logo" className="h-full w-auto object-contain" />
      </Link>

      {/* Navigation Links */}
      <div className="flex text-sm md:text-xl items-center space-x-8 pr-24">
        <a href="#" className="hover:underline">My Binders</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Trading</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar2;

