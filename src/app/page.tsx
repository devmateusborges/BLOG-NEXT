"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AppSearch } from "@/components/AppSearch";
import { AppContact } from "@/components/AppContact";
import { AppPosts } from "@/components/AppPosts";
import { AppMenuGroups } from "@/components/AppMenuGroups";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AppLoading from "@/components/AppLoading";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="flex">
      <div className="w-[100%] xl:w-[70%] p-2 xl:p-5 flex-col items-center justify-center">
        <div className="standard_card">
          <AppSearch />
        </div>

        <div className="standard_card ">
          <AppPosts />
        </div>
      </div>
      <div className=" hidden xl:block w-[30%] p-5 flex-col items-center justify-center">
        <div className="standard_card ">
          <AppContact />
        </div>
        <div className="standard_card ">
          <AppMenuGroups />
        </div>
      </div>
    </div>
  );
}
