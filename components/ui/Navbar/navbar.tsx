"use client";

import { cva, VariantProps } from "class-variance-authority";
import { RiArrowDownSFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavbarStore } from "./store";

type NavbarProps = Array<{
  href: string;
  label: string;
  icon?: React.ReactNode;
  submenu?: Array<{
    href: string;
    label: string;
  }>;
}>;

const data: NavbarProps = [
  { href: "#home", label: "Home" },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#history",
    label: "History",
    icon: <RiArrowDownSFill />,
    submenu: [
      { href: "#history", label: "History" },
      { href: "#timeline", label: "Library Timeline" },
    ],
  },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

const navbarVariant = cva(
  "flex fixed z-[999] top-0 left-0 w-full items-center justify-between h-16 px-24 bg-blue-800/85 dark:bg-blue-950/85 shadow-[0_1.5rem_1.5rem_rgba(0,0,255,0.25)]",
  {
    variants: {
      variant: {
        default: "text-background dark:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Navbar = ({
  variant,
  className,
}: {
  variant?: VariantProps<typeof navbarVariant>["variant"];
  className?: HTMLAttributes<HTMLElement>["className"];
}) => {
  return (
    <nav
      role="navigation"
      className={cn(navbarVariant({ variant }), className)}
    >
      <NavbarLinks data={data} />
    </nav>
  );
};

const NavbarLinks = ({ data }: { data: NavbarProps }) => {
  const { isOpen, setIsOpen } = useNavbarStore(["isOpen", "setIsOpen"]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex w-full justify-end items-center">
        <Link
          href="/"
          className="absolute size-18 -left-8 md:left-8 lg:left-16 bottom-[-4rem] flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            priority
            sizes={"(max-width: 768px) 4rem, (max-width: 1200px) 4.5rem, 6rem"}
          />
        </Link>
        <div className="hidden md:flex justify-between gap-4">
          {data.map((link, index) => (
            <NavbarLink key={`link-${link}${index}`} link={link} />
          ))}
        </div>
      </div>

      <div onMouseLeave={() => setIsOpen(false)} className="flex md:hidden">
        <button
          onClick={toggleDropdown}
          className="p-2 text-inherit rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer hover:bg-gray-200/50 transition-colors duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <NavbarDropdown data={data} />
      </div>
    </>
  );
};

const NavbarLink = ({
  link,
  className,
}: {
  link: NavbarProps[number];
  className?: HTMLAttributes<HTMLElement>["className"];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (link.submenu) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (link.submenu) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div key={`link-${link.href}`} className="relative">
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        href={link.href}
        className={cn("group flex items-center gap-2", className)}
      >
        <span className="relative text-md font-medium">
          {link.label}
          {/* Line animation */}
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-current transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
        </span>
        {link.icon && (
          <span
            className={cn(
              "text-xl transition-transform duration-300 transform",
              isHovered ? "rotate-180" : "rotate-0"
            )}
          >
            {link.icon}
          </span>
        )}
      </Link>
      {link.submenu && (
        <NavbarSubMenu
          submenu={link.submenu}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
        />
      )}
    </div>
  );
};

const NavbarDropdown = ({ data }: { data: NavbarProps }) => {
  const { isOpen } = useNavbarStore(["isOpen"]);

  return (
    <div
      className={cn(
        " bg-blue-950/75 text-background flex  md:hidden flex-col text-center items-center justify-evenly absolute z-999 top-0 right-0 size-dvh max-w-72 shadow-lg rounded-md transition-all duration-350 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full opacity-0"
      )}
    >
      {data.map((link) => (
        <NavbarLink key={link.href} link={link} />
      ))}
    </div>
  );
};

const NavbarSubMenu = ({
  submenu,
  isHovered,
  setIsHovered,
}: {
  submenu: NavbarProps[number]["submenu"];
  isHovered?: boolean;
  setIsHovered?: (isHovered: boolean) => void;
}) => {
  return (
    <div
      className={cn(
        "absolute top-full max-md:-left-1/2 -translate-1/16 mt-2 w-48 bg-blue-600/60 text-background rounded-md shadow-lg z-10 transition-all duration-200 ease-in-out",
        isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {submenu &&
        submenu.map((item) => (
          <Link
            onMouseEnter={() => setIsHovered && setIsHovered(true)}
            onMouseLeave={() => setIsHovered && setIsHovered(false)}
            key={item.href}
            href={item.href}
            className="group w-full text-inherit block p-4 text-sm font-medium hover:bg-blue-800/75 transition-colors duration-300 ease-in-out first:rounded-t-md last:rounded-b-md"
          >
            <span className="relative text-md font-medium">
              {item.label}
              {/* Line animation */}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-current transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
            </span>
          </Link>
        ))}
    </div>
  );
};

export default Navbar;
