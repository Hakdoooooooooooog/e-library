"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useMediaQuery } from "@/hooks/use-media-query";

type FooterItemsProp = {
  groupTitle?: string;
  groupLink?: Array<{
    href: string;
    label: string;
    logo?: React.ReactNode;
  }>;
  logo?: {
    src: string;
    alt: string;
  };
};

const items: FooterItemsProp[] = [
  {
    groupTitle: undefined,
    groupLink: undefined,
    logo: {
      src: "/logo-hero.png",
      alt: "General-trias-city-official-logo",
    },
  },
  {
    groupTitle: "About the Library",
    groupLink: [
      {
        href: "#home",
        label: "Home",
      },

      {
        href: "#services",
        label: "Services",
      },

      {
        href: "#history",
        label: "History",
      },

      {
        href: "#contact",
        label: "Contact Us",
      },
    ],
    logo: undefined,
  },
  {
    groupTitle: "Services",
    groupLink: [
      {
        href: "#computer-access",
        label: "Computer Access",
      },
      {
        href: "#printing",
        label: "Home",
      },

      {
        href: "#free-wifi",
        label: "Free WiFi",
      },

      {
        href: "#books-journals",
        label: "Books/ Journals",
      },
    ],
    logo: undefined,
  },
  {
    groupTitle: "Contacts",
    groupLink: [
      {
        href: "https://facebook.com/gentrilibrary",
        label: "Public Library of General Trias City Facebook Page",
        logo: <FaFacebookF />,
      },
      {
        href: "mailto:library.generaltrias@gmail.com",
        label: "Public Library of General Trias City Email",
        logo: <MdMailOutline />,
      },
      {
        href: "tel:(046) 509 4165",
        label: "Public Library of General Trias City Phone Number",
        logo: <FaPhoneAlt />,
      },
    ],
    logo: undefined,
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <FooterItems items={items} />
      <div className="text-center pt-4 col-span-full">
        <Separator className="hidden md:block" />
        <p className="text-xs sm:text-sm font-bold pt-4">
          {" "}
          Copyright &copy; Darenz Hicap :: 2025 City Public Library of General
          Trias :: Province of Cavite.
        </p>
      </div>
    </div>
  );
};

const FooterItems = ({ items }: { items: FooterItemsProp[] }) => {
  return items.map((item, index) => {
    return (
      <div key={`groupLink-${index}`} className="w-full">
        <FooterItem
          props={{
            groupTitle: item.groupTitle,
            groupLink: item.groupLink,
            logo: item.logo,
          }}
        />
      </div>
    );
  });
};

const FooterItem = ({ props }: { props: FooterItemsProp }) => {
  const { groupTitle, groupLink, logo } = props;
  const isSmall = useMediaQuery("(max-width: 40rem)");

  return (
    <div className="flex flex-col sm:flex-row justify-between h-[20rem] max-sm:min-h-[10rem] md:min-h-[15rem] ">
      {logo ? (
        <div className="relative self-center m-[auto_auto] size-40 md:size-24 lg:size-32">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="(max-width: 768px) 6rem, (max-width: 1200px) 8rem, 10rem"
          />
        </div>
      ) : (
        <div className="flex flex-col size-full justify-between gap-4 p-4">
          {groupLink && (
            <>
              <h2 className="text-lg sm:text-xl font-bold pb-2">
                {groupTitle}
              </h2>

              {groupLink.map((link, index) => (
                <Link
                  key={`link-${index}-${link.label}`}
                  href={link.href}
                  className="flex items-center w-full relative group"
                >
                  {link.logo && (
                    <span className="text-xs sm:text-sm mr-4">{link.logo}</span>
                  )}
                  <span className="text-xs sm:text-sm font-medium">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-current transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
                </Link>
              ))}
            </>
          )}
        </div>
      )}

      <Separator orientation={isSmall ? "horizontal" : "vertical"} />
    </div>
  );
};

export default Footer;
