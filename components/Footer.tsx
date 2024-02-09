import { FacebookIcon, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between px-6 py-3 mx-auto space-y-2 sm:space-y-0 sm:flex-row">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-fit">
            <Image src="/soldout.png" alt="Logo" width={50} height={50} />
          </div>
          <h1 className="font-bold text-xl">Soldout</h1>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2024. All Rights Reserved.
        </p>
        <div className="flex -mx-2 space-x-2">
          <Link
            href="https://www.instagram.com/_soldoutt_/"
            className="flex items-center space-x-2 hover:text-[#83e9e3]"
          >
            <p>_soldoutt_</p>
            <Instagram />
          </Link>
          <Link
            href="https://m.facebook.com/people/soldout/100094461863865/"
            className="flex items-center space-x-1 hover:text-[#83e9e3]"
          >
            <p>soldout</p>
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
