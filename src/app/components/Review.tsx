import Image from "next/image";
import React from "react";
import { Reviewer } from "../svg";

const Review = () => {
  return (
    <div className="text-white p-2 md:p-10 bg-[#0D4A42] md:m-10  ">
      <div className=" ">
        <h2 className="text-4xl font-semibold my-3">
          What our client say about us
        </h2>
        <h4 className=" mb-5">
          Nunc congue nisi vitae suscipit tellus mauris. Sagittis orci a
          scelerisque purus. Ac turpis egest.
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[400px] p-3 lg:m-1 my-1 bg-white text-black rounded">
          <div className="flex">
            <Image src={Reviewer} alt="reviewer" />
            <span>
              <h3 className="m-2">Susam Brown</h3>
              <h5 className="m-2">CEO, Bloomburg</h5>
            </span>
          </div>
          <h4 className="m-1 text-sm">
            &quot;I&apos;ve been using this app for a year now and it&apos;s
            been a game-changer for me. The interface is so easy to use and the
            customer support is top-notch. Highly recommend!&quot; - Rachel,
            freelance crypto trader
          </h4>
        </div>
        <div className="w-full lg:w-[400px] p-3 lg:m-1 my-1 bg-white text-black rounded">
          <div className="flex">
            <Image src={Reviewer} alt="reviewer" />
            <span>
              <h3 className="m-2">Susam Brown</h3>
              <h5 className="m-2">CEO, Bloomburg</h5>
            </span>
          </div>
          <h4 className="m-1 text-sm">
            &quot;I&apos;ve been using this app for a year now and it&apos;s
            been a game-changer for me. The interface is so easy to use and the
            customer support is top-notch. Highly recommend!&quot; - Rachel,
            freelance crypto trader
          </h4>
        </div>
        <div className="w-full lg:w-[400px] p-3 lg:m-1 my-1 bg-white text-black rounded">
          <div className="flex">
            <Image src={Reviewer} alt="reviewer" />
            <span>
              <h3 className="m-2">Susam Brown</h3>
              <h5 className="m-2">CEO, Bloomburg</h5>
            </span>
          </div>
          <h4 className="m-1 text-sm">
            &quot;I&apos;ve been using this app for a year now and it&apos;s
            been a game-changer for me. The interface is so easy to use and the
            customer support is top-notch. Highly recommend!&quot; - Rachel,
            freelance crypto trader
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Review;
