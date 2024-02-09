import { Facebook, InstagramIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-2 mx-auto">
        <div className="text-center ">
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Contact us
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            We’d love to hear from you
          </h1>
        </div>
        <Image
          className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
          src="/contactbanner.svg"
          alt="banner"
          height={256}
          width={256}
        />
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <MailIcon />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Chat to Us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Speak to our friendly team.
            </p>
            <Link
              href="mailto:soldout.enquiry@gmail.com"
              className="mt-2 text-sm text-blue-500 dark:text-blue-400 hover:text-[#83e9e3]"
            >
              soldout.enquiry@gmail.com
            </Link>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <InstagramIcon />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Visit us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Visit our page
            </p>
            <Link
              href="https://www.instagram.com/_soldoutt_/"
              className="flex items-center text-blue-500 dark:text-blue-400 space-x-2 hover:text-[#83e9e3]"
            >
              www.instagram.com/_soldoutt_
            </Link>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
              <Facebook />
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              Connect with us
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Your Feedback Matters
            </p>
            <Link
              href="https://m.facebook.com/people/soldout/100094461863865/"
              className="flex items-center text-blue-500 dark:text-blue-400 space-x-2 hover:text-[#83e9e3]"
            >
              facebook.com/people/soldout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
