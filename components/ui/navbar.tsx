import { cva, VariantProps } from "class-variance-authority";
import { RiArrowDownSFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const data = [
  { href: "/", label: "Home" },
  {
    href: "#services",
    label: "Services",
    icon: <RiArrowDownSFill />,
  },
  {
    href: "#history",
    label: "History",
    icon: <RiArrowDownSFill />,
  },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

const navbarVariant = cva(
  "flex fixed z-[999] top-0 left-0 w-full items-center justify-between h-16 px-24 bg-blue-800/85 dark:bg-blue-950/85 shadow-[0_1.5rem_1.5rem_rgba(0,0,255,0.25)]",
  {
    variants: {
      variant: {
        default: "text-white",
        dark: "text-foreground",
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

const NavbarLinks = ({
  data,
}: {
  data: Array<{
    href: string;
    label: string;
    icon?: React.ReactNode;
  }>;
}) => {
  return (
    <>
      <div className="relative flex w-full justify-end items-center">
        <Link
          href="/"
          className="absolute -left-8 md:left-8 lg:left-16 bottom-[-4rem] flex items-center"
        >
          <div className="size-18">
            <Image src="/logo.png" alt="Logo" fill priority />
          </div>
        </Link>
        <div className="hidden md:flex justify-between gap-4">
          {data.map((link) => (
            <NavbarLink key={link.href} link={link} />
          ))}
        </div>
      </div>

      <div className="flex md:hidden">
        <button className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

const NavbarLink = ({
  link,
}: {
  link: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  };
}) => {
  return (
    <Link href={link.href} className="flex items-center group">
      <span className="relative text-md font-medium text-white">
        {link.label}
        {/* Line animation */}
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
      </span>
      {link.icon && <span>{link.icon}</span>}
    </Link>
  );
};

export default Navbar;
