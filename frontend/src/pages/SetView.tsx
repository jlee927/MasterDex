import { useState } from 'react';
import SVlogo from '../assets/other/xy_base_set_logo.webp';
import bg_pokeball from '../assets/pokeball-background.png';
import bg_pokemon from '../assets/background-pokemon.png';
import { FiStar, FiList } from "react-icons/fi";
import { BsGrid3X3 } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { ChevronDownIcon } from "lucide-react";


const filterOptions = [
  { label: "Regular", value: "regular" },
  { label: "Reverse", value: "rh" },
  { label: "Promos", value: "promos" },
];

export function MultiSelectFilter() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const label = selected.length > 0 ? `${selected.length} selected` : "Define Set";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[180px] justify-between bg-white text-gray-500 font-normal hover:bg-white hover:text-gray-500"
        >
          {label}
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </Button>

      </PopoverTrigger>
      <PopoverContent className="w-[180px] space-y-1">
        {filterOptions.map((opt) => (
          <div key={opt.value} className="flex items-center space-x-2">
            {/* Smaller checkbox: override size using Tailwind width/height */}
            <Checkbox
              id={opt.value}
              checked={selected.includes(opt.value)}
              onCheckedChange={() => toggleOption(opt.value)}
              className="w-4 h-4"
            />
            {/* Reduce font-weight: font-normal or font-light */}
            <label
              htmlFor={opt.value}
              className="text-sm font-normal text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {opt.label}
            </label>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}


const SetView: React.FC = () => {
  return (
    <div className="font-primary relative bg-[#f2f7ff] min-h-screen overflow-hidden px-6 py-4">
      {/* Background Images */}
      <img src={bg_pokeball} alt="Pokeball" className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] object-contain z-0 opacity-35 pointer-events-none" />
      <img src={bg_pokeball} alt="Pokeball" className="absolute top-[45%] right-[15%] w-[600px] h-[600px] object-contain z-0 opacity-35 pointer-events-none" />
      <img src={bg_pokemon} alt="Pokemon" className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] object-contain z-0 opacity-35 pointer-events-none" />

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto text-[#2B4F81]">

        {/* Title + Save button */}
        <div className="flex justify-between items-center mb-4 text-base text-gray-500">
          <img src={SVlogo} alt="Set Logo" className="h-28 object-contain" />
          <button className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-100">
            <FiStar />
            <span>Save Set</span>
          </button>
        </div>

        {/* Master set label and progress */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-2xl font-bold">Your Master Set</span>

          {/* View mode icons */}
          <div className="flex gap-3 ml-auto">
            <FiList className="font-bold w-6 h-6 cursor-pointer hover:text-gray-600" />
            <BsGrid3X3 className="font-bold w-6 h-6 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col">
          <span className="text-sm font-medium">12/198 Collected</span>
          <div className="w-96 bg-gray-200 rounded-full h-2 mt-1.5 mb-4">
            <div
              className="bg-[#2B4F81] h-2 rounded-full"
              style={{ width: `${Math.round((12 / 198) * 100)}%` }}
            />
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-wrap gap-4 mb-6 items-center text-gray-600">
          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Card Inclusion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cards</SelectItem>
              <SelectItem value="owned">Owned Cards</SelectItem>
              <SelectItem value="missing">Missing Cards</SelectItem>
              <SelectItem value="duplicates">Duplicates</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="commons">Commons</SelectItem>
              <SelectItem value="rare">Rare</SelectItem>
              <SelectItem value="ir">Illustration Rares</SelectItem>
              <SelectItem value="sir">Special Illustration Rares</SelectItem>
            </SelectContent>
          </Select>

          {/* New multi-select component */}
          <MultiSelectFilter />

        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
          {[...Array(12)].map((_, idx) => (
            <div
              key={idx}
              className="cursor-pointer relative rounded overflow-hidden shadow-sm bg-white transform transition-transform duration-200 hover:scale-105"
            >

              <img src="https://images.pokemontcg.io/sv1/4.png" alt="Card" className="w-full object-cover opacity-45" />

              <button className="absolute top-1 right-1 bg-white border rounded-full p-1 shadow">
                +
              </button>

              {/* Bottom Info Bar */}
              <div
                className="absolute left-0 w-full bg-black opacity-80 text-white text-[10px] px-1 py-0.5 flex justify-between items-center"
                style={{ bottom: '6px', width: 'calc(100% - 8px)', marginLeft: '4px' }}
              >
                <span>#72/198</span>
                <span>★ Rare</span>
                <span>RH</span>
              </div>

            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default SetView;

