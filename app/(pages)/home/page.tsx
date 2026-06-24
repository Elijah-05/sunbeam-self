"use client"
export const dynamic = "force-static";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import HeroSection from "./sections/hero-section";
import ServicesSection from "./sections/services-section";

import AboutSection from "./sections/about-section";

import ContactSection from "./sections/contact-section";
import CookieBanner from "@/app/shared/cookie-banner";
import Abasection from "./sections/abasection";
import FAQSection from "./sections/faq";
import Requestsection from "./sections/requestsection";
import InsuranceSection from "./sections/insurance-section";
// import Form from './sections/form'

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <InsuranceSection />
      <AboutSection />
      <ServicesSection />
      <Abasection />
      <FAQSection />
      <ContactSection />
      <Requestsection />
    {/* 
      <CookieBanner />
    */}
    </div>
  );
}
