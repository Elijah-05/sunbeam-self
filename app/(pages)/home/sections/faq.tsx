"use client";
import { useState } from "react";
import { Collapse } from "@mantine/core";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Fredoka } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const merriweather = Fredoka({
  weight: ["400", "400"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const faqs = [
  {
    question: "What is ABA therapy?",
    answer:
      "Applied Behavior Analysis (ABA) is a science-based therapy that focuses on understanding and improving behaviors that impact learning, communication, and daily living skills. It is widely recognized as an effective treatment for individuals with autism and other developmental differences.",
  },
  {
    question: "Who do you provide services for?",
    answer:
      "SunBeam ABA Therapy primarily serves children with autism spectrum disorder (ASD), but our services may also benefit individuals with other developmental or behavioral challenges.",
  },
  {
    question: "What ages do you work with?",
    answer:
      "We provide ABA therapy for children of all ages, with early intervention being especially beneficial. However, we also work with older children depending on their needs.",
  },
  {
    question: "Where do services take place?",
    answer:
      "Our services are provided at our center, where we offer a structured and supportive environment for learning. However, we plan to expand to in-home, school, and community-based settings in the future to better serve our clients’ needs.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes! We work with a variety of insurance providers to help families access ABA therapy. Contact us to verify your coverage and discuss your options.",
  },
  {
    question: "How do I get started with SunBeam?",
    answer:
      "The first step is to reach out to us for an initial consultation. We will discuss your child’s needs, answer your questions, and guide you through the intake and assessment process.",
  },
  {
    question: "What does a typical ABA session look like?",
    answer:
      "Each session is tailored to the child’s individual goals. Sessions may focus on communication, social skills, daily living tasks, and behavior management using structured activities, play-based learning, and reinforcement strategies.",
  },
  {
    question: "How long does my child need ABA therapy?",
    answer:
      "The duration of ABA therapy varies for each child. Some children may require short-term intervention, while others may benefit from long-term support. Our team continuously evaluates progress and adjusts the treatment plan accordingly.",
  },
  {
    question: "How do you involve parents and caregivers?",
    answer:
      "Parent and caregiver involvement is a key part of ABA therapy. We provide training, resources, and ongoing support to help families reinforce learning and progress at home.",
  },
  {
    question: "How do I know if ABA therapy is right for my child?",
    answer:
      "If your child has been diagnosed with autism or struggles with communication, behavior, or social skills, ABA therapy may be beneficial. Contact us to schedule a consultation and discuss how we can help.",
  },
];

const FAQSection = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto  px-5 lg:px-[200px] pt-40 pb-20 flex flex-col gap-6 lg:gap-8">
      <div
        className={` ${merriweather.variable} font-merriweather text-[#312f30] flex flex-col lg:gap-2 text-[36px] lg:text-[42px]  font-semibold leading-none `}
      >
        Frequently asked questions
        {/* <div className="h-[10px] w-[140px] mt-2 lg:hidden bg-primary" />
        <div className="h-[10px] w-[200px] mt-2 hidden lg:block bg-primary" /> */}
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#f3f9f3] border border-gray-200 p-4 cursor-pointer rounded-[10px]"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center text-[18px] lg:text-[20px] font-medium">
              <span>{faq.question}</span>
              <div
                className={`w-8 h-8 flex items-center justify-center transition-all rounded-full duration-300 ${openedIndex === index ? "bg-[#CECFCD]" : "bg-[#C3F498]"}`}
              >
                {openedIndex === index ? (
                  <ChevronUp className="text-white" size={20} />
                ) : (
                  <ChevronDown className="text-white" size={20} />
                )}
              </div>
            </div>
            <Collapse in={openedIndex === index}>
              <p className="mt-2 text-[#545454] text-[16px] lg:text-[18px]">
                {faq.answer}
              </p>
            </Collapse>
          </div>
        ))}

        <div className="pt-8 grid place-content-center">
          <Link href="/faq">
            <Button>What to Expect</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
