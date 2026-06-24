"use client";
import React from "react";
import { Box } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { MantineProvider } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import oneonone from "@/public/asset/one-on-one.jpg";
import Image from "next/image";
import { Fredoka } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import "@mantine/carousel/styles.css";
import speechtherapy from "@/public/asset/speechtherapy.jpg";
import occupationaltherapy from "@/public/asset/occupational therapy.jpg";
import familytraining from "@/public/asset/familytraining.png";
import grouptherapy from "@/public/asset/group-therapyy.jpg";

const merriweather = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const services = [
  {
    id: "one-on-one",
    title: "ABA one-on-one direct therapy",
    image: oneonone,
    href: "/services/#one-on-one",
    color: "#C3F498",
  },
  {
    id: "family",
    title: "Family/Caregiver Training",
    image: familytraining,
    href: "/services/#family",
    color: "#FF9358",
  },
  {
    id: "occupational",
    title: "Occupational Therapy",
    image: occupationaltherapy,
    href: "/services/#occupational",
    color: "#97EAFD",
  },
  {
    id: "group",
    title: "Group Sessions",
    image: grouptherapy,
    href: "/services/#group",
    color: "#FFE24F",
  },
];

export default function ServicesSection() {
const [hovered, setHovered] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
  <div
    ref={sectionRef}
    className="flex flex-col gap-6 lg:gap-8 justify-center w-full bg-white lg: pb-40 "
  >
    <div className="flex flex-col gap-6 justify-start py-4 px-6 lg:px-28">
      <div
        className={`${merriweather.variable} font-merriweather font-semibold text-[35px] lg:text-[42px] text-[#312f30] leading-none`}
      >
        Our Services
      </div>
    </div>

    <MantineProvider>
      <Carousel
        withIndicators
        loop
        align="start"
        slideGap="md"
        height={450}
        slideSize={{
          base: "100%",
          sm: "50%",
          lg: "33.333%",
        }}
        className="w-full px-6 lg:px-28"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          <IconArrowRight
            style={{ width: "2rem", height: "2rem" }}
            color="black"
          />
        }
        previousControlIcon={
          <IconArrowLeft
            style={{ width: "2rem", height: "2rem" }}
            color="black"
          />
        }
      >
        {services.map((service, index) => {
          const leftArrow = index % 2 === 0;

          return (
            <Carousel.Slide key={service.id}>
              <div
                className="w-full max-w-[400px] mx-auto rounded-[25px] h-full p-4 flex flex-col gap-2"
                style={{ backgroundColor: service.color }}
              >
                {leftArrow ? (
                  <>
                    <div className="relative flex flex-row justify-end items-start h-2/3 w-full">
                      <Link href={service.href}>
                        <motion.div
                          animate={
                            hovered === service.id
                              ? { opacity: 1, x: 2 }
                              : { opacity: 1, x: 0 }
                          }
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="absolute top-0 left-0 flex items-center justify-start cursor-pointer bg-[#f1f1f1a1] rounded-full z-10"
                          onMouseEnter={() => setHovered(service.id)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <div className="rounded-full bg-white p-1 transition-transform duration-300 hover:-rotate-45">
                            <ChevronRight width={40} height={40} />
                          </div>

                          {hovered === service.id && (
                            <motion.div className="px-3 py-1">
                              Read More
                            </motion.div>
                          )}
                        </motion.div>
                      </Link>

                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[100px] rounded-br-[20px]"
                        />
                      </motion.div>
                    </div>

                    <div className="flex items-center h-1/3">
                      <p className="font-semibold text-[22px] lg:text-[25px] max-w-[220px]">
                        {service.title}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-end items-start h-1/3">
                      <p className="font-semibold text-[22px] lg:text-[25px] text-right max-w-[220px]">
                        {service.title}
                      </p>
                    </div>

                    <div className="relative flex justify-between items-end h-2/3">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="w-full h-full"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-tl-[20px] rounded-tr-[100px] rounded-bl-[20px] rounded-br-[20px]"
                        />
                      </motion.div>

                      <Link href={service.href}>
                        <motion.div
                          animate={
                            hovered === service.id
                              ? { opacity: 1, x: 2 }
                              : { opacity: 1, x: 0 }
                          }
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className="absolute bottom-0 right-0 flex items-center cursor-pointer bg-[#f1f1f1a1] rounded-full z-10"
                          onMouseEnter={() => setHovered(service.id)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          {hovered === service.id && (
                            <motion.div className="px-3 py-1">
                              Read More
                            </motion.div>
                          )}

                          <div className="rounded-full bg-white p-1 transition-transform duration-300 hover:-rotate-45">
                            <ChevronRight width={40} height={40} />
                          </div>
                        </motion.div>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </MantineProvider>
  </div>
);
}
