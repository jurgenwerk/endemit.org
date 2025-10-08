"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import CartOverview from "@/app/(components)/CartOverview";

interface NavigationItem {
  label: string;
  href: string;
  onClick?: () => void;
  isBackButton?: boolean; // If true, indicates this is a "back" button
  isActive?: (pathname: string) => boolean; // Custom active logic
}

interface SocialLink {
  href: string;
  iconSrc: string;
  alt: string;
  width?: number;
  height?: number;
  id: "facebook" | "email" | "instagram";
}

interface FooterAction {
  label: string;
  href: string;
  style?: "button" | "link";
}

interface FooterInfo {
  lines: string[];
  href?: string;
}

interface FlexibleSidebarProps {
  // Logo configuration
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoHref?: string;

  // Navigation items
  navigationItems: NavigationItem[];

  // Social links (optional) - will merge with defaults
  socialLinks?: SocialLink[];

  // Footer configuration (optional)
  footerAction?: FooterAction;
  footerInfo?: FooterInfo;
  showFooter?: boolean;

  // Additional customization options
  activeColor?: string; // e.g., "text-blue-500"
}

export default function Sidebar({
  logoSrc = "/images/endemit.svg",
  logoAlt = "Endemit",
  logoWidth = 96,
  logoHeight = 24,
  logoHref = "/",
  navigationItems,
  socialLinks = [],
  footerAction,
  footerInfo,
  showFooter = true,
  activeColor = "text-blue-500",
}: FlexibleSidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Default social links
  const defaultSocialLinks: SocialLink[] = [
    {
      id: "facebook",
      href: "https://www.facebook.com/endemit.crew",
      iconSrc: "/images/facebook.png",
      alt: "Facebook",
    },
    {
      id: "instagram",
      href: "https://instagram.com/ende.mit",
      iconSrc: "/images/instagram.png",
      alt: "Instagram",
    },
    {
      id: "email",
      href: "mailto:endemit@endemit.org",
      iconSrc: "/images/email.png",
      alt: "Email",
    },
  ];

  const mergedSocialLinks = defaultSocialLinks.map(defaultLink => {
    const customLink = socialLinks.find(link => link.id === defaultLink.id);
    return customLink ? { ...defaultLink, ...customLink } : defaultLink;
  });

  const isItemActive = (item: NavigationItem) => {
    if (item.isActive) {
      return item.isActive(pathname);
    }
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  const close = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: NavigationItem) => {
    if (item.onClick) {
      item.onClick();
    }
    close();
  };

  return (
    <div className="fixed top-0 !z-40 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto lg:mt-12">
        <Link
          href={logoHref}
          onClick={close}
          className="lg:mx-3 lg:ml-auto hover:opacity-70"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="w-24"
          />
        </Link>
      </div>

      <div className="flex absolute right-0 top-0 lg:hidden gap-x-4">
        <CartOverview variant={"compact"} />

        <button
          type="button"
          className="group flex h-14 items-center gap-x-2 px-4 text-gray-100 hover:text-gray-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className="font-medium "
            style={{ fontSize: "14px", paddingTop: "4px" }}
          >
            MENU
          </div>

          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={clsx("overflow-y-auto lg:static lg:block opacity-90", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isMenuOpen,
          hidden: !isMenuOpen,
        })}
      >
        <nav className="px-5 pb-7 pt-5 text-xl space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = isItemActive(item);
            return (
              <Link
                key={index}
                onClick={() => handleNavClick(item)}
                href={item.href}
                className={clsx(
                  "block rounded-md px-3 py-2 text-right font-medium uppercase sm:pt-2 pt-4",
                  item.isBackButton && "text-sm opacity-85",
                  isActive && `${activeColor} cursor-default`,
                  !isActive &&
                    "text-white hover:text-gray-300 active:text-gray-600"
                )}
              >
                {item.isBackButton && "← "}
                {item.label}
              </Link>
            );
          })}
          <CartOverview variant={"detailed"} />
        </nav>

        {mergedSocialLinks.length > 0 && (
          <div className="social-icons flex justify-end pr-6">
            {mergedSocialLinks.map(social => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                <Image
                  src={social.iconSrc}
                  alt={social.alt}
                  width={social.width || 28}
                  height={social.height || 28}
                  className="mx-2"
                />
              </a>
            ))}
          </div>
        )}

        {showFooter && (footerAction || footerInfo) && (
          <div className="hidden sm:block absolute fixed bottom-0 m-0 w-full">
            <div className="flex flex-row justify-between bg-black p-3.5 lg:px-5 lg:py-3">
              <div className="my-auto flex">
                {footerAction && (
                  <a
                    className={clsx(
                      "block rounded-md font-medium hover:text-gray-100",
                      {
                        "border px-5 py-1":
                          footerAction.style === "button" ||
                          !footerAction.style,
                        underline: footerAction.style === "link",
                      }
                    )}
                    style={
                      footerAction.style === "button" || !footerAction.style
                        ? { paddingTop: "7px", letterSpacing: "0.6px" }
                        : undefined
                    }
                    href={footerAction.href}
                  >
                    {footerAction.label}
                  </a>
                )}
              </div>
              {footerInfo && (
                <div
                  className="flex flex-col justify-between text-sm"
                  style={{ paddingTop: "3px" }}
                >
                  {footerInfo.href ? (
                    <a href={footerInfo.href}>
                      {footerInfo.lines.map((line, index) => (
                        <div
                          key={index}
                          className={index === 0 ? "text-right" : ""}
                        >
                          {line}
                        </div>
                      ))}
                    </a>
                  ) : (
                    footerInfo.lines.map((line, index) => (
                      <div
                        key={index}
                        className={index === 0 ? "text-right" : ""}
                      >
                        {line}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
