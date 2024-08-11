import React from "react";
import CheckIcon from "@/assets/check.svg";
import Image from "next/image";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className=" py-24  ">
      <div className="container">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text  ">
            Pricing
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5 ">
            Free forever. upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center  ">
          {pricingTiers.map((price, i) => (
            <div
              key={i}
              className={`p-10 rounded-3xl shadow-[0_7px_14px_#eaeaea] border border-[#f1f1f1] max-w-xs w-full ${
                !!price.inverse && "border-black bg-black text-white"
              }`}
            >
              <div className="flex justify-between">
                <h3
                  className={`${
                    !!price.inverse && "text-white/60"
                  }text-lg font-bold text-black/50 `}
                >
                  {price.title}
                </h3>
                {!!price.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] text-transparent bg-clip-text font-medium ">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl leading-none font-bold tracking-tighter">
                  ${price.monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50 ">
                  /month
                </span>
              </div>
              <button
                className={` ${
                  price.inverse && "bg-white text-black"
                } btn btn-primary w-full mt-[30px] `}
              >
                {price.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {price.features.map((feat, i) => (
                  <li key={i} className="text-sm flex items-center gap-4">
                    <Image
                      src={CheckIcon}
                      width={20}
                      height={20}
                      alt="check icon"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
