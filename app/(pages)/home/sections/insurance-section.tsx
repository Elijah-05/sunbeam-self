"use client";
import Image from "next/image";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const insurances = [
  { name: "Care Oregon", logo: "/asset/logo/careoregon.jpg" },
  { name: "Regence BCBS", logo: "/asset/logo/regenee.png" },
  { name: "ChampVA", logo: "/asset/logo/champva.jpeg" },
  { name: "TriWest", logo: "/asset/logo/triwest.jpeg" },
  { name: "Aetna", logo: "/asset/logo/aetna.png" },
  { name: "ModaHealth", logo: "/asset/logo/moda.webp" },
];

export default function InsuranceSection() {
  return (
    <section className="w-full bg-[#FFF8F4] pt-16 pb-40 px-6 lg:px-28">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <div
          className={`${fredoka.variable} font-fredoka text-[32px] lg:text-[42px] text-[#312f30] font-semibold leading-none`}
        >
          Insurances We Accept
        </div>
        <p className="text-[18px] text-[#545454] max-w-2xl">
          We work with the following insurance providers to make ABA therapy
          accessible for your family.
        </p>
      </div>

      {/* Insurance Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12">
        {insurances.map((ins) => (
          <div
            key={ins.name}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl shadow-sm border border-[#f0e9e4] hover:shadow-md transition-shadow duration-200"
          >
            {/* Placeholder box — replace src with real logo path when ready */}
            <div className="relative w-full aspect-[3/2] flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center rounded-xl bg-[#FFF0E8]">
                
                  <Image
                    src={ins.logo}
                    alt={ins.name}
                    fill
                    className="object-contain p-2"
                  />
              </div>
            </div>
            <span className="text-[13px] pb-4 lg:text-[14px] text-[#312f30] font-semibold text-center leading-tight">
              {ins.name}
            </span>
          </div>
        ))}
      </div>

      {/* Credentialing Notice */}
      <div className="flex items-center justify-center">
        <div className="flex items-start bg-[#FF9358]/10 border border-[#FF9358]/20 rounded-2xl px-6 py-4 max-w-2xl w-full">
          {/* <div className="bg-[#FF9358] mt-2 size-2 rounded-full flex-shrink-0" /> */}
          <p className="text-[15px] lg:text-[16px] text-center text-[#727272] leading-relaxed">
            We are still in the process of credentialing with other insurance
            providers. Please reach out to us if you have questions about your
            coverage.
          </p>
        </div>
      </div>
    </section>
  );
}