"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

type Props = {};

const Announcement: React.FC<Props> = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="relative bg-[#74cec8] px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        On Sale
        <Link href="/" className="inline-block underline">
          give your own content
        </Link>
      </p>
      <button
        onClick={handleClose}
        className="absolute top-1 right-0 px-3 py-2 focus:outline-none"
      >
        <X size={18} color="white" />
      </button>
    </div>
  ) : null;
};

export default Announcement;
