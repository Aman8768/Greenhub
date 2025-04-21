import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryButtonProps {
  name: string;
  icon: string;
}

const categories: CategoryButtonProps[] = [
  {
    name: 'Trending in Gardening',
    icon: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Plants\' Packs by Features',
    icon: 'https://images.pexels.com/photos/1029544/pexels-photo-1029544.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Top plants\' packs',
    icon: 'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Miniature Gardens & Kits',
    icon: 'https://images.pexels.com/photos/1701266/pexels-photo-1701266.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Plants\' Packs by Location',
    icon: 'https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Plants\' Packs by Occasions',
    icon: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Plants\' Packs by Season',
    icon: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon }) => {
  return (
    <a href={`/category/${name.toLowerCase().replace(/\s+/g, '-')}`} className="group flex flex-col items-center mr-4 transition-transform hover:translate-y-[-5px]">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-green-500 mb-2 shadow-md">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-xs md:text-sm text-center max-w-[90px] md:max-w-[120px] line-clamp-2">{name}</span>
    </a>
  );
};

const CategoryButtons: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-6 container mx-auto px-4">
      <div className="flex items-center">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-1 bg-white rounded-full shadow-md text-green-600 hover:text-green-800 focus:outline-none hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-4 px-4 md:px-10 space-x-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, index) => (
            <CategoryButton key={index} name={category.name} icon={category.icon} />
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 z-10 p-1 bg-white rounded-full shadow-md text-green-600 hover:text-green-800 focus:outline-none hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CategoryButtons;