import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CategoriesData from '@/Utilities/categories';

const Products: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Categories
          </h2>
        </header>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CategoriesData.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group relative block cursor-pointer">
                <div className="relative h-[350px] sm:h-[450px]">
                  <Image
                    src={category.images[0]}
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="absolute inset-0 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src={category.images[1]}
                    alt="image"
                    objectFit="cover"
                    layout="fill"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
