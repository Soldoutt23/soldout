import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IndianRupee } from "lucide-react";
import { Necklaces, necklacesData } from "@/Utilities/necklace";

type Props = {};

export default function NecklaceSection({}: Props) {

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Necklace
          </h2>
          <p className="mt-4 max-w-md text-gray-500">
          Elevate your style with our exquisite necklaces, meticulously crafted with premium materials. From timeless classics to contemporary designs, each piece is a symbol of elegance and sophistication. Embrace the allure of our necklaces, enhancing your everyday look or adding a touch of glamour to special occasions. Discover the beauty of finely detailed craftsmanship and make a statement with our curated collection of necklaces.
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {necklacesData.map((necklace: Necklaces) => (
            <li key={necklace.id}>
              <Link href="https://www.instagram.com/_soldoutt_/" passHref>
                <div className="group block overflow-hidden">
                  <Image
                    src={necklace.imageUrl}
                    alt={necklace.name}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    width={1770}
                    height={450}
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {necklace.name}
                    </h3>

                    <div className="mt-2">
                      <span className="sr-only">Regular Price</span>
                      <span className="tracking-wider text-gray-500 font-bold flex items-center">
                        <div className="flex space-x-2">
                          <div className="flex items-center">
                            <IndianRupee size={18} />
                            {necklace.price.toFixed(2)}
                          </div>
                          <button className="px-3 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#83e9e3] rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Buy Now
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
