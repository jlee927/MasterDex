import { useState } from 'react';
import SVlogo from '../assets/other/xy_base_set_logo.webp';
import bg_pokeball from '../assets/pokeball-background.png';
import bg_pokemon from '../assets/background-pokemon.png';
import { FiStar, FiList, FiSettings, FiCheckCircle, FiCircle } from "react-icons/fi";
import { BsGrid3X3 } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
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
            <Checkbox
              id={opt.value}
              checked={selected.includes(opt.value)}
              onCheckedChange={() => toggleOption(opt.value)}
              className="w-4 h-4"
            />
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
  const [collectedCards, setCollectedCards] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleCardClick = (idx: number) => {
    setCollectedCards((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const isCollected = (idx: number) => collectedCards.includes(idx);

  return (
    <div className="font-primary relative bg-[#f2f7ff] min-h-screen overflow-hidden px-6 py-4">
      {/* Background Images */}
      {/*
      <img src={bg_pokeball} alt="Pokeball" className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] object-contain z-0 opacity-35 pointer-events-none" />
      <img src={bg_pokeball} alt="Pokeball" className="absolute top-[45%] right-[15%] w-[600px] h-[600px] object-contain z-0 opacity-35 pointer-events-none" />
      <img src={bg_pokemon} alt="Pokemon" className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] object-contain z-0 opacity-35 pointer-events-none" />
      */}

      <div className="relative z-10 max-w-6xl mx-auto text-[#2B4F81]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-base text-gray-500">
          <img src={SVlogo} alt="Set Logo" className="h-28 object-contain" />
          <button className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-1 shadow-sm hover:bg-gray-100">
            <FiStar />
            <span>Save Set</span>
          </button>
        </div>

        {/* Title & view mode toggles */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-2xl font-bold">Your Master Set</span>
          <div className="flex gap-3 ml-auto">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="cursor-pointer"
            >
              {viewMode === 'grid' ? (
                <FiList className="w-5 h-5 text-[#2B4F81]" />
              ) : (
                <BsGrid3X3 className="w-5 h-5 text-[#2B4F81]" />
              )}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <FiSettings className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Export as text</DropdownMenuItem>
                <DropdownMenuItem>Add Duplicates to Sell</DropdownMenuItem>
                <DropdownMenuItem>Add Missing to Wishlist</DropdownMenuItem>
                <DropdownMenuItem>Reset Progress</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Progress */}
        <div className="flex flex-col">
          <span className="text-sm font-medium">12/198 Collected</span>
          <div className="w-96 bg-gray-200 rounded-full h-2 mt-1.5 mb-4">
            <div
              className="bg-[#2B4F81] h-2 rounded-full"
              style={{ width: `${Math.round((12 / 198) * 100)}%` }}
            />
          </div>
        </div>

        {/* Filters */}
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
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="commons">Commons</SelectItem>
              <SelectItem value="rare">Rare</SelectItem>
              <SelectItem value="ir">Illustration Rares</SelectItem>
              <SelectItem value="sir">Special Illustration Rares</SelectItem>
            </SelectContent>
          </Select>

          <MultiSelectFilter />
        </div>

        {/* Grid or List View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
            {[...Array(12)].map((_, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className="cursor-pointer relative rounded overflow-hidden shadow-sm bg-white transform transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <img
                  src="https://images.pokemontcg.io/sv1/4.png"
                  alt="Card"
                  className={`w-full object-cover transition duration-300 ${isCollected(idx) ? '' : 'opacity-40 grayscale'}`}
                />
                <button
                  className="absolute top-1 right-1 bg-white border rounded-full p-1 shadow"
                  onClick={(e) => e.stopPropagation()}
                >
                  +
                </button>
                <div className="absolute left-0 w-full bg-black opacity-80 text-white text-[10px] px-1 py-0.5 flex justify-between items-center"
                  style={{ bottom: '6px', width: 'calc(100% - 8px)', marginLeft: '4px' }}
                >
                  <span>#72/198</span>
                  <span>★ Rare</span>
                  <span>RH</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-gray-200 mt-10 bg-white rounded shadow-sm">
            {[...Array(12)].map((_, idx) => {
              const collected = isCollected(idx);
              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between px-4 py-3 ${collected ? 'bg-gray-100 text-gray-500' : 'text-gray-800'
                    }`}
                >
                  <div onClick={() => handleCardClick(idx)} className="cursor-pointer mr-4">
                    {collected ? (
                      <FiCheckCircle className="text-red-500 w-5 h-5" />
                    ) : (
                      <FiCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">Breloom</div>
                    <div className="text-xs text-gray-500">#72/198 • ★ Rare • RH</div>
                  </div>
                  <Button variant="outline" className="text-sm border px-3 py-1">Add</Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SetView;

