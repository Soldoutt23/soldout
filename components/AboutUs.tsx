import Image from "next/image";
import React from "react";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Welcome to soldout, where style meets expression! Launched in August
          2023, we&apos;re a dynamic startup presenting an exquisite collection of
          exclusive womens accessories and more. Our product assortment is
          meticulously crafted to complement the unique personality of every
          woman. Join us in celebrating the beauty of self-expression with
          accessories that speak volumes. Explore our collection and redefine
          your style effortlessly. Welcome to a world of timeless elegance at
          soldout
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#83e9e3] rounded-xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="/mouma.jpg"
              alt="avatar"
              width={128}
              height={128}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Mouma
            </h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              Founder
            </p>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#83e9e3] rounded-xl">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="/bristifixed.jpg"
              alt="avatar"
              width={128}
              height={128}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Bristi
            </h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              Co-Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
