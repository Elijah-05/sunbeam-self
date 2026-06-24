"use client";

import { useState } from "react";
import { Collapse } from "@mantine/core";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Fredoka } from "next/font/google";
import { faqSections } from "./data";

const merriweather = Fredoka({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const FAQPage = () => {
  const [openedIndex, setOpenedIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenedIndex(openedIndex === id ? null : id);
  };

  return (
    <div className="w-full px-5  py-20">
      <div className="pt-8 lg:px-28 mx-auto">
        <h1
          className={`${merriweather.variable} font-merriweather text-[#312f30] text-3xl sm:text-[36px] lg:text-[48px] font-semibold mb-12`}
        >
          Frequently Asked Questions
        </h1>

        <div className="space-y-4 lg:space-y-14 lg:px-6">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[34px] font-semibold text-[#312f30] mb-2 lg:mb-6">
                {section.title}
              </h2>

              <div className="space-y-2 lg:space-y-4">
                {section.faqs.map((faq, faqIndex) => {
                  const id = `${sectionIndex}-${faqIndex}`;

                  return (
                    <div
                      key={id}
                      className="bg-[#f3f9f3] border border-gray-200 p-4 cursor-pointer rounded-[10px]"
                      onClick={() => toggleFAQ(id)}
                    >
                      <div className="flex justify-between items-center sm:text-[18px] lg:text-[20px] font-medium">
                        <span>{faq.question}</span>

                        <div
                          className={`w-8 h-8 flex items-center justify-center transition-all rounded-full duration-300 ${
                            openedIndex === id
                              ? "bg-[#CECFCD]"
                              : "bg-[#C3F498]"
                          }`}
                        >
                          {openedIndex === id ? (
                            <ChevronUp className="text-white" size={20} />
                          ) : (
                            <ChevronDown className="text-white" size={20} />
                          )}
                        </div>
                      </div>

                      <Collapse in={openedIndex === id}>
                        <div className="mt-3">
                          {faq.answer && (
                            <p className="text-[#545454] text-[16px] lg:text-[18px]">
                              {faq.answer}
                            </p>
                          )}

                          {faq.bullets && (
                            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#545454] text-[16px] lg:text-[18px]">
                              {faq.bullets.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </Collapse>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;