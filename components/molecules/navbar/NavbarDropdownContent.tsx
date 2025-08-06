import React from "react";
import { GrPlan } from "react-icons/gr";
import { CgArrowTopRight } from "react-icons/cg";

type DropdownKey = 'personal' | 'business' | 'developer' | null;

interface Props {
  menu: DropdownKey;
}
const NavbarDropdownContent: React.FC<Props> = ({ menu }) => {
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
                      <p className="text-base">
                        {{
                          Plan: 'Access Financial tools and guide',
                          Save: 'Earn better interests than your bank',
                          Invest: 'Build a global portfolio in one app',
                        }[item]}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-[#ffffff12]">
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
          <div className="pt-6 border-t border-[#ffffff12]">
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
export default NavbarDropdownContent;
