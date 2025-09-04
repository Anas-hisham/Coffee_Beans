"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome, MdLocalOffer, MdPerson } from "react-icons/md";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "الرئيسية", icon: MdHome },
    { href: "/offers", label: "العروض", icon: MdLocalOffer },
    // { href: "/profile", label: "الملف الشخصي", icon: MdPerson },
  ];

  return (
    <>
      {/* 🌐 Top Navbar (Desktop) */}
      <nav className="hidden md:flex w-full bg-white  fixed top-0 left-0 z-50 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center w-full px-6 py-5">
          {/* Logo / Brand */}
          <Link href={'/home'} className="text-xl font-bold text-green-600 cursor-pointerinter">كافهينو</Link>

          {/* Nav Links */}
          <div className="flex gap-8 text-gray-700 font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors hover:text-green-600 ${
                  pathname === href ? "text-green-600 border-b-2 border-green-600 pb-1" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 📱 Bottom Navbar (Mobile) */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg justify-around py-2 z-50">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center transition-colors ${
                isActive ? "text-green-600" : "text-gray-500"
              }`}
            >
              <Icon className={`w-7 h-7 ${isActive ? "scale-110" : ""}`} />
              <span
                className={`text-xs mt-1 ${
                  isActive ? "font-semibold" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
