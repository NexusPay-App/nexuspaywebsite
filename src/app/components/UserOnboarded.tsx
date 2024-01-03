import Image from "next/image";
import React from "react";
import { HeadPhones, Phone, Security } from "../svg";

const UserOnboarded = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center ">
      <Image src={Phone} alt="nexus-logo" className="w-full md:w-[40%]" />
      <article className="text-white flex flex-col justify-around md:justify-between my-[50px] p-2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-[20px]">
          Over 2k different users onboarded 🎉
        </h1>
        <h2 className="text-xl mb-[20px]">
          More than a platform, we&apos;re a catalyst for a financially
          empowered and connected Africa
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="h-auto md:h-[200px] my-4 flex flex-col justify-around">
            <Image src={HeadPhones} alt="nexus-logo" className="my-2" />
            <h4 className="text-2xl font-semibold mb-2">Financial Inclusion</h4>
            <h5 className="text-base">
              Microloans and a future loyalty crypto token to support the
              unbanked{" "}
            </h5>
          </div>
          <div className="h-auto md:h-[200px] my-4 flex flex-col justify-around">
            <Image src={Security} alt="nexus-logo" className="my-2" />
            <h4 className="text-2xl font-semibold mb-2">
              Stability Meets Simplicity
            </h4>
            <h5 className="text-base">
              We harness the power of stablecoins to protect against inflation
              and bring financial stability right to your fingertips
            </h5>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UserOnboarded;
