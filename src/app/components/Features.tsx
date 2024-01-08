import React from "react";
import FeatureCardOne from "./FeatureCardOne";
import FeatureCardTwo from "./FeatureCardTwo";
import FeatureCardThree from "./FeatureCardThree";

const Features = () => {
  return (
    <div className="p-2 h-full">
      <div className="flex flex-col md:flex-row items-center text-white p-3">
        <h2 className="text-2xl md:text-5xl font-semibold mb-5">
          Pioneering Crypto-Powered Finance in Africa{" "}
        </h2>
        <h4 className="w-auto">
          Welcome to Nexuspay, where financial innovation meets everyday
          convenience. We&apos;re reshaping Africa&apos;s financial landscape with
          cutting-edge, blockchain-powered solutions.
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
