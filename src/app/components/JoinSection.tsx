"use client";

import Image from "next/image";
import React from "react";
import { JoinsectionImg } from "../svg";
import { Star } from "@phosphor-icons/react";

const JoinSection = () => {
  return (
      <div className="flex flex-col md:flex-row">
        <Image src={JoinsectionImg} alt="nexus-logo" className="w-full md:w-[50%] object-cover" />
        <article className="text-white flex flex-col justify-around md:justify-between h-[547px] p-2 md:p-10 bg-[#0D4A42]">
          <h1 className="text-5xl font-semibold">Join the Nexuspay Movement</h1>
          <h2 className="text-xl">
            Embrace a future where financial freedom is in your hands, where
            transactions are borderless, and where you take control of your
            financial destiny
          </h2>
          <hr />
          <div>
            <span className="flex">
              <Star size={32} color="#F59638" weight="fill" />
              <Star size={32} color="#F59638" weight="fill" />
              <Star size={32} color="#F59638" weight="fill" />
              <Star size={32} color="#F59638" weight="fill" />
              <Star size={32} color="#F59638" weight="fill" />
            </span>
            <h4 className="text-2xl font-semibold">4.8/5</h4>
            <h5 className="text-2xl">On App Store</h5>
          </div>
        </article>
      </div>
  );
};

export default JoinSection;
