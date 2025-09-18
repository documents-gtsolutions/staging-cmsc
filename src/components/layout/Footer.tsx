import React from "react"; 
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/icon";

const socialMedia = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "/",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    href: "/",
  },
  
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "/",
  },
  
  {
    name: "Youtube",
    icon: YoutubeIcon,
    href: "/",
  },
  
  {
    name: "Linkedin",
    icon: LinkedinIcon,
    href: "/",
  },
];
const Footer = () => {
  return (
    <div className="mt-auto py-4">
      <div className="max-w-[2520px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex md:flex-row flex-col gap-x-4 items-center text-[#6E6F78] font-semibold">
          Copyright © 2023 CMSC AI System
          <div className="flex gap-4 mt-2 md:mt-0 text-[#A9AAAF]">
            {[{name: "Privacy Policy", href: "/"}, {name: "Term and conditions", href: "/"}, {name: "Contact", href: "/"}].map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-2 md:mt-0">
          {socialMedia.map((item) => (
            <Link key={item.name} href={item.href}>
              <item.icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
