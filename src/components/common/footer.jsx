import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FooterContact, FooterLinks, FooterSocials } from "@/data/site";
import LogoDefault from "@/assets/Logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-primary-300">
      <div className="container-shell py-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl font-semibold text-background-light">
              <img
              src={LogoDefault}
              alt="Lavista Logo"
              className="
                h-12 w-auto object-contain transition-all duration-300
                sm:h-11
                md:h-12
                lg:h-14
              "
            />
            </h3>

            <p className="text-[16px] leading-8">
              Premium Real Estate Marketing Agency helping builders and developers
              generate qualified leads and drive conversions.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5">
              {FooterSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    className="transition hover:text-accent-500 text-[16px]"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* LINKS (Quick + Services) */}
          {FooterLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-5">
              <h3 className="font-heading text-2xl font-semibold text-background-light">
                {group.title}
              </h3>

              <div className="flex flex-col gap-4 text-lg">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="transition hover:text-accent-500 text-[16px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CONTACT */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-2xl font-semibold text-background-light">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-5 text-lg text-primary-300">
              {FooterContact.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 ">
                    <Icon size={22} className="mt-1" />

                    {item.link ? (
                      <a href={item.link} className="hover:text-accent-500 transition text-[16px] mt-1">
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-primary-800 pt-8 text-center">
          <p className="text-primary-400 text-lg">
            © 2026 Lavista. All rights reserved. Premium Real Estate Marketing Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}