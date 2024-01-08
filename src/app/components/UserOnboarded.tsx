import Image from "next/image";
import React from "react";
import { HeadPhones, Phone, Security } from "../svg";

const UserOnboarded = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center mt-10 p-5 ">
      <Image src={Phone} alt="nexus-logo" className="w-full md:w-[40%]" />
      <article className="text-white flex flex-col justify-around md:justify-between my-[50px] p-2">
        <h1 className="text-3xl md:text-5xl font-semibold mb-[20px]">
          Celebrating Milestones: 2000+ Users Onboarded! 🎉
        </h1>
        <h2 className="text-xl mb-[20px]">
        Join the growing Nexuspay community. Together, we&apos;re building a more inclusive and efficient financial future for everyone.
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="h-auto md:h-[200px] my-4 flex flex-col justify-around">
            <Image src={HeadPhones} alt="nexus-logo" className="my-2" />
            <h4 className="text-2xl font-semibold mb-2">Driving Financial Inclusion</h4>
            <h5 className="text-base">
            Unlock potential with Nexuspay&apos;s microloans and anticipate our forthcoming loyalty crypto token. We&apos;re committed to supporting the unbanked and underbanked, ensuring everyone has a chance to thrive financially
            </h5>
          </div>
          <div className="h-auto md:h-[200px] my-4 flex flex-col justify-around">
            <Image src={Security} alt="nexus-logo" className="my-2" />
            <h4 className="text-2xl font-semibold mb-2">
              Stability Meets Simplicity
            </h4>
            <h5 className="text-base">
            Experience the strength of stablecoins with Nexuspay. Guard against inflation and embrace financial stability, all through a straightforward and user-friendly platform.
            </h5>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UserOnboarded;
