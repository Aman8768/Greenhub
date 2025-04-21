import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CategoryButtons from '../components/CategoryButtons';
import FiltersSidebar from '../components/FiltersSidebar';
import ProductGrid from '../components/ProductGrid';
import { Filter } from 'lucide-react';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Gardening', href: '/gardening' },
];

const GardeningPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="container mx-auto px-4">
        <CategoryButtons />
        
        <div className="flex flex-col lg:flex-row">
          {/* Filter button (mobile only) */}
          <div className="lg:hidden mb-4">
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <Filter size={20} className="mr-2" />
              Filters
            </button>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4 xl:w-1/5">
            <FiltersSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
          
          {/* Product Grid */}
          <div className="lg:w-3/4 xl:w-4/5 lg:pl-8">
            <ProductGrid 
              title="Gardening"
              subtitle="Explore our wide range of gardening products to transform your green space into a beautiful oasis."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardeningPage;