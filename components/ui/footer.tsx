import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

type FooterItemsProp = Array<{
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
}>;

const items: FooterItemsProp = [
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
      <Separator className="py-8" />
      <div className="flex[1_1_100%] w-full text-center">
        <p className="text-sm font-bold">
          {" "}
          Copyright &copy; Darenz Hicap :: 2025 City Public Library of General
          Trias :: Province of Cavite.
        </p>
      </div>
    </div>
  );
};

const FooterItems = ({ items }: { items: FooterItemsProp }) => {
  return items.map((item, index) => {
    return (
      <div key={`groupLink-${index}`} className="footer-container-content">
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

const FooterItem = ({
  props,
}: {
  props: {
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
}) => {
  const { groupTitle, groupLink, logo } = props;
  return (
    <div className="flex w-full h-[15rem] gap-16">
      {logo ? (
        <div className="relative flex-[1_1_auto] size-40">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            sizes="(max-width: 768px) 6rem, (max-width: 1200px) 8rem, 10rem"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4 flex-[1_1_auto]">
          {groupLink && (
            <>
              <h2 className="text-2xl font-bold pb-4">{groupTitle}</h2>

              {groupLink.map((link, index) => {
                return (
                  <Link
                    key={link.label + index}
                    href={link.href}
                    className="flex gap-4 items-center w-full"
                  >
                    {link.logo && link.logo}{" "}
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      )}

      <Separator orientation="vertical" />
    </div>
  );
};

export default Footer;
