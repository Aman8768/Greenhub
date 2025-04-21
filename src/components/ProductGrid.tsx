import React from 'react';
import { Heart } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
}

const products: ProductProps[] = [
  {
    id: 1,
    name: 'Lucky Bamboo Plant',
    image: 'https://images.pexels.com/photos/3952055/pexels-photo-3952055.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 449,
    originalPrice: 799,
    discountPercentage: 45,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Snake Plant',
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 599,
    originalPrice: 999,
    discountPercentage: 40,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Money Plant',
    image: 'https://images.pexels.com/photos/3094087/pexels-photo-3094087.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 349,
    originalPrice: 649,
    discountPercentage: 46,
    rating: 4.3,
  },
  {
    id: 4,
    name: 'Jade Plant',
    image: 'https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 499,
    originalPrice: 899,
    discountPercentage: 44,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Peace Lily',
    image: 'https://images.pexels.com/photos/4751969/pexels-photo-4751969.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 799,
    originalPrice: 1299,
    discountPercentage: 38,
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Aloe Vera',
    image: 'https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 399,
    originalPrice: 699,
    discountPercentage: 43,
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Spider Plant',
    image: 'https://images.pexels.com/photos/1445419/pexels-photo-1445419.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 549,
    originalPrice: 949,
    discountPercentage: 42,
    rating: 4.5,
  },
  {
    id: 8,
    name: 'ZZ Plant',
    image: 'https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 649,
    originalPrice: 1099,
    discountPercentage: 41,
    rating: 4.7,
  },
];

const ProductCard: React.FC<ProductProps> = ({
  name,
  image,
  price,
  originalPrice,
  discountPercentage,
  rating,
}) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      {/* Discount label */}
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
        Save {discountPercentage}%
      </div>
      
      {/* Wishlist button */}
      <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm opacity-70 hover:opacity-100 transition-opacity">
        <Heart size={18} className="text-gray-600 hover:text-red-500" />
      </button>
      
      {/* Product image */}
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product details */}
      <div className="p-4">
        <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        
        <div className="mt-2 flex items-center">
          {/* Rating stars */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.934l-6.18 3.254 1.18-6.875L.083 7.62l6.902-1.003L10 .453l3.015 6.164 6.902 1.003-4.917 4.693 1.18 6.875L10 15.934z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500">({rating.toString().replace('.', '')})</span>
          </div>
        </div>
        
        <div className="mt-2 flex items-center">
          <span className="text-base md:text-lg font-semibold text-gray-900">₹{price}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">₹{originalPrice}</span>
        </div>
        
        <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

interface ProductGridProps {
  title: string;
  subtitle: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle }) => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">268 products</p>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            className="text-sm border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500"
          >
            <option>Best selling</option>
            <option>Price: Low to high</option>
            <option>Price: High to low</option>
            <option>Newest arrivals</option>
            <option>Discount</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;