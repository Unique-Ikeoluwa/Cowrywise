import React from "react";
import Link from "next/link";
import { TbLetterX } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NavbarDropdownContent from "./NavbarDropdownContent";

type DropdownKey = 'personal' | 'business' | 'developer' | null;

interface NavbarMobileProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  openMobileDropdown: DropdownKey;
  setOpenMobileDropdown: React.Dispatch<React.SetStateAction<DropdownKey>>;
  isMobileMenuItemVisible: (menu: string) => boolean;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({show, setShow, openMobileDropdown, setOpenMobileDropdown, isMobileMenuItemVisible, }) => {
  return (
    show ? (
      <div className="md:hidden fixed top-0 h-screen left-0 w-full bg-[#0066f5] text-white px-8 py-6 z-40 space-y-6">
        <button onClick={() => setShow(false)} className="absolute top-4 left-[430] text-white">
          <TbLetterX size={28} />
        </button>

        {openMobileDropdown ? (
          <div className="pt-10">
            <button
              onClick={() => setOpenMobileDropdown(null)}
              className="flex items-center font-bold text-3xl gap-2"
            >
              {openMobileDropdown.charAt(0).toUpperCase() + openMobileDropdown.slice(1)}
              <IoIosArrowUp className="text-white/60 text-3xl" />
            </button>
            <div className="mt-4 pl-2">
              <NavbarDropdownContent menu={openMobileDropdown} />
            </div>
          </div>
        ) : (
          <ul className="space-y-4 pt-10">
            {["personal", "business", "developer"].map((menu) =>
              isMobileMenuItemVisible(menu) ? (
                <li key={menu}>
                  <button
                    onClick={() => setOpenMobileDropdown(menu as DropdownKey)}
                    className="flex items-center font-bold text-3xl gap-2"
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                    {openMobileDropdown === menu ? <IoIosArrowUp className="text-white/60 text-3xl" /> : <IoIosArrowDown className="text-white/60 text-3xl" />}
                  </button>
                </li>
              ) : null
            )}
            {!openMobileDropdown && (
              <ul className="pt-4 space-y-4 border-t border-white/10 text-xl text-white/60 font-semibold">
                <li><Link href="/signup">Sign Up</Link></li>
                <li><Link href="/login">Log In</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/faq">FAQ's</Link></li>
                <li><Link href="/security">Security</Link></li>
                <li><Link href="/learn">Learn</Link></li>
              </ul>
            )}
          </ul>
        )}
        <p className="text-stone-400 text-sm bg-white absolute bottom-0 w-screen left-0 px-4 py-6 leading-[1.6]">
          We use cookies on our website to help us provide the best browsing experience. By continuing to use our website you are deemed to have agreed to the use of cookies.
        </p>
      </div>
    ) : null
  );
};

export default NavbarMobile;
