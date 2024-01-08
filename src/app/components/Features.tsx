import React from "react";
import FeatureCardOne from "./FeatureCardOne";
import FeatureCardTwo from "./FeatureCardTwo";
import FeatureCardThree from "./FeatureCardThree";

const Features = () => {
  return (
    <div className="p-2 h-full">
      <div className="flex flex-col md:flex-row items-center text-white p-3">
        <h2 className="text-2xl md:text-5xl font-semibold mb-5">
        Empowering Every African, Banked or Not, with Revolutionary Crypto for All Africans
        </h2>
        <h4 className="w-auto">
          Discover Nexuspay, where innovation serves daily needs and bridges the gap for the unbanked and underbanked. Join us as we transform Africa&apos;s financial scene with secure, stablecoin payments.
        </h4>
      </div>
      <article className="my-10 flex flex-col lg:flex-row justify-center">
        <FeatureCardOne />
        <div>
          <FeatureCardTwo />
          <FeatureCardThree />
        </div>
      </article>
    </div>
  );
};

export default Features;
