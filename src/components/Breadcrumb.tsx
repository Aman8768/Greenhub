import React from 'react';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="container mx-auto px-4 py-3">
      <ol className="flex flex-wrap items-center text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.label} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  &gt;
                </span>
              )}
              
              {isLast ? (
                <span className="font-medium text-gray-800">{item.label}</span>
              ) : (
                <a 
                  href={item.href}
                  className="hover:text-green-600 hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;