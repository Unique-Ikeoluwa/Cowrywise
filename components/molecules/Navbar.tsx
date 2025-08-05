'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import { GrPlan } from 'react-icons/gr';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgArrowTopRight } from 'react-icons/cg';
import { TbLetterX } from 'react-icons/tb';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

type DropdownKey = 'personal' | 'business' | 'developer' | 'learn' | null;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<DropdownKey>(null);

  const isMobileMenuItemVisible = (menu: string): boolean => {
    if (!openMobileDropdown) return true;
    if (openMobileDropdown === 'personal') return menu === 'personal';
    if (openMobileDropdown === 'business') return menu === 'personal' || menu === 'business';
    if (openMobileDropdown === 'developer') return menu === 'personal' || menu === 'developer';
    return true;
  };

  const renderMobileDropdownContent = (menu: DropdownKey): ReactNode => {
    switch (menu) {
      case 'personal':
        return (
          <div className="mt-2 pl-2 text-white/90 space-y-6 text-sm leading-relaxed">
            <ul>
              {['Plan', 'Save', 'Invest'].map((item, idx) => (
                <li key={idx}>
                  <a href="https://cowrywise.com/plan" className="flex items-center mb-6 pr-6">
                    <div className="flex flex-row items-center gap-5 text-3xl">
                      <GrPlan />
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-lg">{item}</h2>
                        <p className="text-base">{{
                          Plan: 'Access Financial tools and guide',
                          Save: 'Earn better interests than your bank',
                          Invest: 'Build a global portfolio in one app',
                        }[item]}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-solid border-[#ffffff12]">
              <ul className="space-y-2">
                <li><h6 className="text-white text-lg font-semibold">Growth tools</h6></li>
                <li><a href="https://cowrywise.com/interest-tool" className="flex text-base items-center gap-1">Estimate your interests <CgArrowTopRight /></a></li>
                <li><a href="https://cowrywise.com/risk-assessment" className="flex text-base items-center gap-1">Know your risk appetite <CgArrowTopRight /></a></li>
              </ul>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="mt-2 pl-2 text-white/90 text-sm leading-relaxed">
            <ul>
              <li>
                <a href="https://cowrywise.com/sprout" className="flex items-center mb-6 pr-6">
                  <div className="flex flex-row items-center gap-5 text-3xl">
                    <GrPlan />
                    <div className="flex flex-col">
                      <h2 className="font-semibold text-lg">Sprout</h2>
                      <p className="text-base">Put your business idle cash to work</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        );

      case 'developer':
        return (
          <div className="mt-2 pl-2 text-white/90 text-sm leading-relaxed space-y-6">
            <ul>
              {[
                { name: 'Embed', desc: 'Offer investment services in your app', href: 'https://cowrywise.com/embed' },
                { name: 'Docs', desc: 'Read how to integrate the Embed API', href: 'https://cowrywise.com/docs' },
              ].map(({ name, desc, href }) => (
                <li key={name}>
                  <a href={href} className="flex items-center mb-6 pr-6">
                    <div className="flex flex-row items-center gap-5 text-3xl">
                      <GrPlan />
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-lg">{name}</h2>
                        <p className="text-base">{desc}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-solid border-[#ffffff12]">
              <ul>
                <li><h6 className="text-white text-lg font-semibold">Connect</h6></li>
                <li><a href="https://embedbycowrywise.slack.com/" className="flex items-center text-base gap-1">Join Embed on Slack <CgArrowTopRight /></a></li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: DropdownKey) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  const toggleMobileDropdown = (menu: DropdownKey) => {
    setOpenMobileDropdown(prev => (prev === menu ? null : menu));
  };

  return (
    <div className={`text-base fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'md:bg-white bg-[#0066f5] md:text-black text-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-[1380px] px-5">
        <div className="flex items-center justify-between h-[75px]">
          <div className="flex items-center">
          <Link href="/"
            className={`mt-[5px] flex mr-4 md:mr-14 ${
            showMobileMenu ? "hidden" : "block"
            } md:block`}
        >
            <svg width="152" height="29" viewBox="0 0 152 29" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex={-1}><g clipPath="url(#clip0_10311_7421)" fill="#0067F5"><path d="M14 .5H6.154l-.015.027L5.056 2.5H14c6.625 0 12 5.372 12 12s-5.373 12-12 12-12-5.373-12-12c0-1.254.196-2.5.582-3.692h2.29A9.846 9.846 0 1014 4.655H3.873l-1.097 2H14a7.845 7.845 0 11-6.923 4.152h2.595a5.689 5.689 0 104.328-2H1.593l-1.097 2A14.025 14.025 0 000 14.5c0 7.732 6.268 14 14 14s14-6.268 14-14-6.268-14-14-14zm0 10.308a3.693 3.693 0 110 7.385 3.693 3.693 0 010-7.385zM34.154 14.796c0-3.89 2.61-6.622 6.523-6.622 2.412 0 4.381 1.058 5.415 2.83l-2.264 1.6c-.714-1.132-1.797-1.673-3.077-1.673-2.116 0-3.52 1.503-3.52 3.865 0 2.338 1.403 3.864 3.52 3.864 1.28 0 2.363-.566 3.077-1.699l2.264 1.6c-1.034 1.798-3.003 2.832-5.415 2.832-3.914 0-6.523-2.733-6.523-6.597zM46.518 14.796c0-3.644 2.585-6.622 6.597-6.622 4.037 0 6.597 2.978 6.597 6.622 0 3.619-2.561 6.597-6.597 6.597-4.01 0-6.597-2.979-6.597-6.597zm10.117 0c0-2.29-1.354-3.89-3.52-3.89s-3.52 1.6-3.52 3.89c0 2.264 1.354 3.864 3.52 3.864s3.52-1.6 3.52-3.864zM79.424 8.517l-3.842 12.53H72.34l-2.715-8.837-2.74 8.837h-3.248l-3.82-12.53h2.98l2.596 9.034 2.787-9.034h2.883l2.788 9.034 2.57-9.034h3.004zM121.622 8.517l-3.845 12.53h-3.243l-2.715-8.837-2.74 8.837h-3.241l-3.82-12.527h2.979l2.595 9.034 2.785-9.037h2.883l2.788 9.034 2.571-9.034h3.003zM88.412 8.47v2.805a9.215 9.215 0 00-1.379-.123c-2.19 0-3.347 1.108-3.347 3.717v6.18h-3.002V8.517h2.95v2.094c.617-1.452 1.97-2.314 3.693-2.314.37-.007.736.051 1.085.172zM100.871 8.517v11.274c0 4.21-2.338 6.523-6.474 6.523-2.141 0-4.11-.64-5.293-1.747l1.355-2.191c1.057.835 2.436 1.255 3.766 1.255 2.314 0 3.692-1.304 3.692-3.841v-1.08c-.713 1.378-2.24 2.214-4.086 2.214-2.659 0-4.332-1.673-4.332-4.726v-7.68h3.003v6.917c0 1.92.788 2.757 2.363 2.757 1.821 0 3.028-1.107 3.028-2.93V8.518h2.978zM122.412 4.555c0-1.083.763-1.87 1.92-1.87 1.132 0 1.893.787 1.893 1.87 0 1.084-.763 1.871-1.893 1.871-1.157 0-1.92-.788-1.92-1.87zm.419 3.963h3.003v12.53h-3.003V8.518zM127.345 19.005l1.625-1.896c.984 1.083 2.511 1.723 4.111 1.723 1.427 0 2.215-.541 2.215-1.329 0-.665-.493-1.083-1.748-1.378l-2.043-.468c-2.609-.615-3.717-1.822-3.717-3.545 0-2.314 1.92-3.938 5.17-3.938 2.215 0 4.061.762 5.144 1.994l-1.6 1.944c-1.083-.935-2.314-1.378-3.619-1.378-1.403 0-2.092.517-2.092 1.28 0 .59.418.96 1.748 1.255l2.166.517c2.633.591 3.594 1.797 3.594 3.52 0 2.486-1.921 4.087-5.243 4.087-2.486 0-4.578-.936-5.711-2.388zM151.636 15.681h-9.331c.32 2.02 1.649 3.102 3.692 3.102 1.403 0 2.585-.517 3.496-1.576l1.797 1.773c-1.182 1.526-3.077 2.413-5.391 2.413-3.988 0-6.647-2.61-6.647-6.548 0-3.89 2.561-6.671 6.352-6.671 3.643 0 6.104 2.535 6.104 6.35 0 .387-.025.774-.072 1.158zm-9.331-2.042h6.403c-.148-1.846-1.281-2.855-3.077-2.855-1.848 0-3.005 1.058-3.326 2.855z"></path></g><defs><clipPath id="clip0_10311_7421"><path fill="#fff" transform="translate(0 .5)" d="M0 0h151.709v28H0z"></path></clipPath></defs></svg>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 relative">
            {[
              { key: "personal", label: "Personal", content: (
                <div className="flex gap-10">
                  <ul>
                        <li><a href="https://cowrywise.com/plan" className="flex items-center mb-8"><div className="flex flex-row items-center text-3xl gap-8 hover:text-[#0066f5]">
                            <GrPlan /> <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Plan</h2>
                                <p className="text-base">Access Financial tools and guide</p></div> </div></a>
                        </li>
                        <li><a href="https://cowrywise.com/plan" className="flex items-center mb-8"><div className="flex flex-row items-center text-3xl gap-8 hover:text-[#0066f5]">
                            <GrPlan /> <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Save</h2>
                                <p className="text-base">Earn better interests than your bank</p></div> </div></a>
                        </li>
                        <li><a href="https://cowrywise.com/plan" className="flex items-center mb-8"><div className="flex flex-row items-center text-3xl gap-8 hover:text-[#0066f5]">
                            <GrPlan /> <div className="flex flex-col">
                                <h2 className="text-lg font-bold">Invest</h2>
                                <p className="text-base">Build a global portfolio in one app</p></div> </div></a>
                        </li>
                    </ul>
                  <div className="border-l border-[#ccc] pl-6">
                    <h6 className="font-semibold text-lg mb-2">Growth tools</h6>
                    <ul className="text-base">
                      <li><a href="https://cowrywise.com/interest-tool" className="flex items-center gap-1 mb-2 hover:text-[#0066f5]">Estimate your interests <CgArrowTopRight /></a></li>
                      <li><a href="https://cowrywise.com/risk-assessment" className="flex items-center gap-1 hover:text-[#0066f5]">Know your risk appetite <CgArrowTopRight /></a></li>
                    </ul>
                  </div>
                </div>
              )},
              { key: "business", label: "Business", content: (
                <ul>
                  <li><a href="https://cowrywise.com/sprout" className="flex items-center gap-8 text-3xl hover:text-[#0066f5]"><GrPlan /><div><h2 className="text-lg font-bold">Sprout</h2><p className="text-base">Put your business idle cash to work</p></div></a></li>
                </ul>
              )},
              { key: "developer", label: "Developer", content: (
                <div className="flex gap-12">
                  <ul>
                    <li><a href="https://cowrywise.com/embed" className="flex items-center gap-8 mb-6 text-3xl hover:text-[#0066f5]"><GrPlan /><div><h2 className="text-lg font-bold">Embed</h2><p className="text-base">Offer investment services in your app</p></div></a></li>
                    <li><a href="https://cowrywise.com/docs" className="flex items-center gap-8 text-3xl hover:text-[#0066f5]"><GrPlan /><div><h2 className="text-lg font-bold">Docs</h2><p className="text-base">Read how to integrate the Embed API</p></div></a></li>
                  </ul>
                  <div className="border-l border-[#ccc] pl-6">
                    <h6 className="font-semibold text-lg mb-1">Connect</h6>
                    <a href="https://embedbycowrywise.slack.com/" className="flex items-center gap-1 text-sm hover:text-[#0066f5]">Join Embed on Slack <CgArrowTopRight /></a>
                  </div>
                </div>
              )},
              { key: "learn", label: "Learn", content: (
                <ul>
                  <li><a href="https://cowrywise.com/glossary" className="flex items-center text-3xl hover:text-[#0066f5] gap-8 mb-6"><GrPlan /><div><h2 className="text-lg font-bold">Glossary</h2><p className="text-base">Learn from a curation of simple money terms</p></div></a></li>
                  <li><a href="https://cowrywise.com/blog" className="flex items-center text-3xl gap-8 mb-6 hover:text-[#0066f5]"><GrPlan /><div><h2 className="text-lg font-bold">Blog</h2><p className="text-base">Announcements, articles and stories</p></div></a></li>
                  <li><a href="https://cowrywise.com/help" className="flex items-center text-3xl gap-8 hover:text-[#0066f5]"><GrPlan /><div><h2 className="text-lg font-bold">Help Center</h2><p className="text-base">Everything you need to use Cowrywise</p></div></a></li>
                </ul>
              )}
            ].map(({ key, label, content }) => (
              <li key={key} className="relative">
                <button onClick={() => toggleDropdown(key as DropdownKey)} className="flex items-center gap-1 text-[#6c82a3] font-bold hover:text-[#082552]">
                  {label} <RiArrowDropDownLine />
                </button>
                {openDropdown === key && (
                  <div className="absolute top-[50px] left-0 bg-white text-black shadow-md rounded-xl border border-[#ccc] px-8 w-max py-6 z-50">
                    {content}
                  </div>
                )}
              </li>
            ))}
          </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/login" className="text-[#0066f5] font-semibold">Log In</Link>
            <Link href="/signup" className="bg-[#0066f5] text-sm text-white px-4 py-3 rounded-md hover:shadow-2xl transition font-bold">Sign Up For Free</Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {!showMobileMenu && (
                <button onClick={() => setShowMobileMenu(true)}>
                <HiOutlineMenuAlt4 size={24} />
                </button>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed top-0 h-screen left-0 w-full bg-[#0066f5] text-white px-8 py-6 z-40 space-y-6">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute top-4 right-4 text-white"
            >
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
                <div className="mt-4 pl-2 transition-all duration-500 ease-in-out">
                {renderMobileDropdownContent(openMobileDropdown)}
                </div>
            </div>
            ) : (
            <ul className="space-y-4 pt-10 transition-all duration-300">
                {["personal", "business", "developer"].map((menu) =>
                isMobileMenuItemVisible(menu) ? (
                    <li key={menu} className="transition-all duration-300">
                    <button
                        onClick={() => toggleMobileDropdown(menu as DropdownKey)}
                        className="flex items-center font-bold text-3xl gap-2"
                    >
                        {menu.charAt(0).toUpperCase() + menu.slice(1)}
                        {openMobileDropdown === menu ? (
                        <IoIosArrowUp className="text-white/60 text-3xl" />
                        ) : (
                        <IoIosArrowDown className="text-white/60 text-3xl" />
                        )}
                    </button>
                    </li>
                ) : null
                )}

                {!openMobileDropdown && (<ul className={`pt-4 space-y-4 border-t border-white/10 text-xl text-white/60 font-semibold transition-all duration-300 ${
                    openMobileDropdown ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
                }`}
                >
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
          <p className="text-stone-400 text-sm bg-white absolute bottom-0 inline-block w-full left-0 px-4 py-6 leading-[1.6]">
            We use cookies on our website to help us provide the best browsing experience. By continuing to use our website you are deemed to have agreed to the use of cookies.
          </p>
        </div>
      )}
    </div>
  )
}
export default Navbar
