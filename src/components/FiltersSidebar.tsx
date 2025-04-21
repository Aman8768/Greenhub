import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterCategoryProps {
  title: string;
  options: string[];
  expanded?: boolean;
}

const filterCategories: FilterCategoryProps[] = [
  {
    title: 'Plants by Type',
    options: ['Flowering Plants', 'Foliage Plants', 'Succulents', 'Cacti', 'Bonsai Plants'],
    expanded: true,
  },
  {
    title: 'Plants by Season',
    options: ['Summer Plants', 'Winter Plants', 'Rainy Season Plants', 'All Season Plants'],
  },
  {
    title: 'Plants by Location',
    options: ['Indoor Plants', 'Outdoor Plants', 'Balcony Plants', 'Table Top Plants', 'Ground Cover Plants'],
  },
  {
    title: 'Foliage Plants',
    options: ['Ferns', 'Aroids', 'Tropical Plants', 'Air Purifying Plants'],
  },
  {
    title: 'Flowering Plants',
    options: ['Annual Flowers', 'Perennial Flowers', 'Climber Flowering Plants', 'Bulbous Flowering Plants'],
  },
  {
    title: 'Plants by Feature Uses',
    options: ['Medicinal Plants', 'Aromatic Plants', 'Edible Plants', 'Ornamental Plants'],
  },
  {
    title: 'Plants by Color',
    options: ['Red Flowering Plants', 'Yellow Flowering Plants', 'Pink Flowering Plants', 'White Flowering Plants'],
  },
];

const FilterCategory: React.FC<FilterCategoryProps> = ({ title, options, expanded: initialExpanded = false }) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{title}</span>
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {expanded && (
        <div className="mt-2 space-y-1">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`${title}-${option}`}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor={`${title}-${option}`}
                className="ml-2 text-sm text-gray-700"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface FiltersSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-white p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out md:sticky md:top-24 md:h-[calc(100vh-6rem)] md:transform-none md:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-4 flex justify-between items-center md:hidden">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <span className="sr-only">Close filters</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:block mb-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        </div>

        <div>
          {filterCategories.map((category, index) => (
            <FilterCategory
              key={index}
              title={category.title}
              options={category.options}
              expanded={category.expanded}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default FiltersSidebar;