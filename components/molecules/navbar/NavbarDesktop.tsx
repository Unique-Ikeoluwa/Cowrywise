'use client';

import React from 'react';
import { GrPlan } from 'react-icons/gr';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgArrowTopRight } from 'react-icons/cg';

type DropdownKey = 'personal' | 'business' | 'developer' | 'learn' | null;

interface Props {
  openDropdown: DropdownKey;
  toggleDropdown: (key: DropdownKey) => void;
}

const desktopMenuItems = [
  { key: "personal", label: "Personal", content: (
      <div className="flex gap-10">
        <ul>
          {[
            { name: "Plan", desc: "Access Financial tools and guide" },
            { name: "Save", desc: "Earn better interests than your bank" },
            { name: "Invest", desc: "Build a global portfolio in one app" }
          ].map(({ name, desc }) => (
            <li key={name}>
              <a href="https://cowrywise.com/plan" className="flex items-center mb-8">
                <div className="flex items-center gap-8 text-3xl hover:text-[#0066f5]">
                  <GrPlan />
                  <div>
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-base">{desc}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="border-l border-[#ccc] pl-6">
          <h6 className="font-semibold text-lg mb-2">Growth tools</h6>
          <ul className="text-base">
            <li><a href="https://cowrywise.com/interest-tool" className="flex items-center gap-1 mb-2 hover:text-[#0066f5]">Estimate your interests <CgArrowTopRight /></a></li>
            <li><a href="https://cowrywise.com/risk-assessment" className="flex items-center gap-1 hover:text-[#0066f5]">Know your risk appetite <CgArrowTopRight /></a></li>
          </ul>
        </div>
      </div>
    )
  },
  { key: "business", label: "Business", content: (
      <ul>
        <li>
          <a href="https://cowrywise.com/sprout" className="flex items-center gap-8 text-3xl hover:text-[#0066f5]">
            <GrPlan />
            <div>
              <h2 className="text-lg font-bold">Sprout</h2>
              <p className="text-base">Put your business idle cash to work</p>
            </div>
          </a>
        </li>
      </ul>
    )
  },
  { key: "developer", label: "Developer", content: (
      <div className="flex gap-12">
        <ul>
          {[
            { name: "Embed", desc: "Offer investment services in your app", href: "https://cowrywise.com/embed" },
            { name: "Docs", desc: "Read how to integrate the Embed API", href: "https://cowrywise.com/docs" }
          ].map(({ name, desc, href }) => (
            <li key={name}>
              <a href={href} className="flex items-center gap-8 mb-6 text-3xl hover:text-[#0066f5]">
                <GrPlan />
                <div>
                  <h2 className="text-lg font-bold">{name}</h2>
                  <p className="text-base">{desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="border-l border-[#ccc] pl-6">
          <h6 className="font-semibold text-lg mb-1">Connect</h6>
          <a href="https://embedbycowrywise.slack.com/" className="flex items-center gap-1 text-sm hover:text-[#0066f5]">
            Join Embed on Slack <CgArrowTopRight />
          </a>
        </div>
      </div>
    )
  },
  { key: "learn", label: "Learn", content: (
      <ul>
        {[
          { name: "Glossary", desc: "Learn from a curation of simple money terms", href: "https://cowrywise.com/glossary" },
          { name: "Blog", desc: "Announcements, articles and stories", href: "https://cowrywise.com/blog" },
          { name: "Help Center", desc: "Everything you need to use Cowrywise", href: "https://cowrywise.com/help" }
        ].map(({ name, desc, href }) => (
          <li key={name}>
            <a href={href} className="flex items-center gap-8 text-3xl hover:text-[#0066f5] mb-6">
              <GrPlan />
              <div>
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-base">{desc}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    )
  }
];

const NavbarDesktop: React.FC<Props> = ({ openDropdown, toggleDropdown }) => {
  return (
    <ul className="hidden md:flex gap-6 relative">
      {desktopMenuItems.map(({ key, label, content }) => (
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
  );
};

export default NavbarDesktop;
