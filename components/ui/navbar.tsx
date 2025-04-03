import { cva, VariantProps } from "class-variance-authority";
import { RiArrowDownSFill } from "react-icons/ri";
import Image from "next/image";

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
  "flex fixed top-0 left-0 w-full items-center justify-between h-16 px-24 bg-blue-800/75 dark:bg-blue-950/75 shadow-[0_1.5rem_1.5rem_rgba(0,0,255,0.25)]",
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
}: {
  variant?: VariantProps<typeof navbarVariant>["variant"];
}) => {
  return (
    <nav className={navbarVariant({ variant })}>
      {navbarLinks({
        data,
      })}
    </nav>
  );
};

const navbarLinks = ({
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
      <div className="relative flex w-full justify-end items-center space-x-4">
        <a
          href="/"
          className="absolute left-0 bottom-[-7.5rem] flex items-center rounded-full"
        >
          <Image src="/logo.png" alt="Logo" height={150} width={150} priority />
        </a>
        <div className="hidden md:flex justify-between space-x-4">
          {data.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center space-x-2"
            >
              <span>{link.label}</span>
              {link.icon && <span>{link.icon}</span>}
            </a>
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

export default Navbar;
