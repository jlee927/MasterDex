import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#FAFAFA] py-6 px-8 h-44 flex justify-between items-center">
      <p className="text-sm md:text-base">
        ©2024 MasterDex. All rights reserved.
      </p>
      <div className="flex gap-6 text-xl">
        <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
        <FaGithub className="hover:text-gray-400 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;

