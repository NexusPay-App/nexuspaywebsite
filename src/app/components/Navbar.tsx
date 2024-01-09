
import Image from "next/image";
import React, { useState } from "react";
import { NexusLogo } from "../svg";
import { List, XCircle } from "@phosphor-icons/react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-3">
        <div className="min-w-[200px] w-auto">
          <Image src={NexusLogo} alt="nexus-logo" className="w-auto" />
        </div>
        <div className="block sm:hidden">
          <List
            size={32}
            color="#b8b8b8"
            weight="fill"
            className="block md:hidden"
            onClick={toggleMenu}
          />
        </div>
        <div
          className="absolute top-0 left-0 sm:block bg-[#15191C] p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <XCircle
            size={32}
            color="#b8b8b8"
            weight="fill"
            onClick={toggleMenu}
          />
          {/* <ul className=" flex flex-col sm:flex-row justify-around text-base md:text-lg text-white w-auto">
            <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Features</li>
            <li className="my-2 mx-1 w-[100%] min-w-[100px] ">How it Works</li>
            <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Pricing</li>
          </ul> */}
        </div>

        <div className="hidden sm:flex items-center">
          {/* <ul className=" flex flex-col sm:flex-row justify-around text-base md:text-lg text-white w-auto">
            <li className="mx-2 w-[100%] min-w-[100px] ">Features</li>
            <li className="mx-2 w-[100%] min-w-[120px] ">How it Works</li>
            <li className="mx-2 w-[100%] min-w-[100px] ">Pricing</li>
          </ul> */}
          <button className="p-3 border border-white rounded-sm text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
