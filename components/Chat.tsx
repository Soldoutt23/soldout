import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Chat({}: Props) {
  return (
    <Link
      href="https://www.instagram.com/_soldoutt_/"
      className="sticky bottom-20 left-5 hover:text-[#83e9e3]"
    >
      <button
        type="button"
        className=" rounded-full bg-[#83e9e3] px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <Instagram className="h-4 w-4 " color="#3d1ddd" />
      </button>
    </Link>
  );
}
