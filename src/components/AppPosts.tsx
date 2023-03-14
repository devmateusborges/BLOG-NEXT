"use client";
import { AppPost } from "@/interfaces/GlobalIntaface";
import { BlogService } from "@/service/BlogService";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeClosed, PaperPlaneRight } from "phosphor-react";
import { useEffect, useState } from "react";
import AppLoading from "./AppLoading";
import useApi from "./hooks/useApi";

interface AppPosts {
  postData: AppPost[];
}

export function AppPosts(props: AppPosts) {
  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <h1 className="  xl:mt-8 xl:text-[48px] text-[25px]   ">
          ASSUNTOS DA SEMANA
        </h1>
        {props.postData?.map((posts, index) => (
          <div
            key={posts.id}
            className="flex flex-col items-center justify-center w-full shadow-lg shadow-stone-300 mt-10 mb-5 p-5"
          >
            <Image
              data-aos="fade-left"
              className="rounded-3xl"
              src={posts.url_photo}
              width={400}
              height={100}
              alt="Picture of the author"
            />

            <div data-aos="fade-left" className="w-full flex m-5 xl:mt-10">
              <div className="flex flex-col w-[95%]">
                <h1 className="first-line:uppercase text-[20px] ml-10 xl:text-[32px] w-[70%] text-black">
                  {posts.title}
                </h1>
                <h2 className="first-line:uppercase text-[15px] ml-10 xl:text-[25px] w-[70%] text-[#505050]">
                  {posts.subtitle}
                </h2>
              </div>
              <Link
                className="standard_color  standard_hover p-2  xl:pl-6 xl:pr-6 rounded-lg w-[10%] flex items-center justify-center h-[36px]"
                href={`/${posts.id}`}
              >
                <Eye size={27} color="#fafafa" weight="light" />
              </Link>
            </div>

            <div data-aos="fade-left" className="p-0 xl:p-6">
              <p className="text-stone-500 indent-8 text-justify">
                {posts.subject.substring(0, 250) + "..."}
              </p>
            </div>
            <button className="mt-5 w-full  border-t-2 flex items-center justify-center p-3">
              <PaperPlaneRight size={38} color="#999999" weight="light" />
            </button>
          </div>
        ))}
        <AppLoading />
      </div>
    </>
  );
}
