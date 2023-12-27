'use client';

import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowitWorks from "./components/HowitWorks";
import JoinSection from "./components/JoinSection";
import Navbar from "./components/Navbar";
import Patners from "./components/Patners";
import Review from "./components/Review";
import UserOnboarded from "./components/UserOnboarded";

export default function Home() {
  return (
    <main className="flex bg-[#15191C] flex-col  bg-cover overflow-hidden ">
      <Navbar />
      <HeroSection />
      <Patners />
      <Features />
      <JoinSection />
      <UserOnboarded />
      <Review />
      <HowitWorks />
      <Footer />
    </main>
  )
}
