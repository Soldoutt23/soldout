import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Your Beauty Journey Starts Here <br />
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
            Elevate your style with our Elegance Ensemble – where sophistication meets jewelry. Delight in exquisite designs, effortlessly enhance your allure, and seize the exclusive introductory offer on these essential accessories.
            </p>
            {/* <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#83e9e3] rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Shop Now
            </button> */}
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <Image
            src="/banner.png"
            alt="Catalogue-pana.svg"
            width={1200} 
            height={800} 
            className="w-full h-full lg:max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
}
