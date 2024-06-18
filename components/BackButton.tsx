import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

import { FC } from "react";

interface BackButtonProps {
  text: string;
  link: string;
}

export const BackButton: FC<BackButtonProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className=" text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5"
    >
      <ArrowLeftCircle size={18} /> {text}
    </Link>
  );
};
