"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/asset/sunbeamlogo.png";
import { useRouter, usePathname } from "next/navigation";
import { Burger, Flex, Collapse } from "@mantine/core";
import { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

export const MobileNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleLinkClick = (path: string) => {
    close();
    router.push(path);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [opened]);

  return (
    <div className="fixed top-0 left-0 h-auto w-full z-50">
      {/* Navbar Header */}
      <Flex className="z-50 flex justify-between items-center md:hidden h-[60px] w-full bg-white fixed left-0 top-0 px-4">
        <Link
          className="h-full w-[60px] lg:w-[80px]"
          href="/"
          onClick={() => handleLinkClick("/")}
        >
          <Image src={logo} alt="logo" />
        </Link>

        <Burger opened={opened} onClick={toggle} size="30px" color="#000" />
      </Flex>

      {/* Collapsible Menu */}
      <Collapse
        in={opened}
        className="fixed top-[60px] left-0 w-full bg-white z-40"
      >
        <Flex
          direction="column"
          align="center"
          className="gap-4 py-4 border-t bg-white w-full"
        >
          <Link href="/" onClick={() => handleLinkClick("/")}>
            Home
          </Link>
          <Link href="/about" onClick={() => handleLinkClick("/about")}>
            About
          </Link>
          <Link href="/services" onClick={() => handleLinkClick("/services")}>
            Services
          </Link>
          <Link
            href="/abarequest"
            onClick={() => handleLinkClick("/abarequest")}
          >
            ABA Service Request
          </Link>
           <Link className="underline-hover" href="/faq">
            FAQ
          </Link>
          <Link href="/jobs" onClick={() => handleLinkClick("/jobs")}>
            Jobs
          </Link>
          <Link href="/contact" onClick={() => handleLinkClick("/contact")}>
            Contact
          </Link>
          {/* <Link
            href="/graduatestudents"
            onClick={() => handleLinkClick("/graduatestudents")}
          >
            Graduate Students
          </Link> */}
        </Flex>
      </Collapse>
    </div>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` z-100 hidden md:flex flex-row fixed left-0 top-0 w-full justify-between py-1 px-28 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/0"
      }`}
    >
      <Link className="h-full w-[80px]" href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <div className="flex flex-row gap-14 items-center">
        <div className="flex flex-row gap-10 font-semibold">
          <Link className="underline-hover" href="/">
            Home
          </Link>
          <Link className="underline-hover" href="/about">
            About
          </Link>
          <Link className="underline-hover" href="/services">
            Services
          </Link>
          <Link className="underline-hover" href="/contact">
            Contact
          </Link>
          <Link className="underline-hover" href="/jobs">
            Jobs
          </Link>
          <Link className="underline-hover" href="/abarequest">
            ABA Service Request
          </Link>
           <Link className="underline-hover" href="/faq">
            FAQ
          </Link>
          {/* <Link className="underline-hover" href="/graduatestudents">
            Graduate Students
          </Link> */}
        </div>
      </div>
    </div>
  );
};
