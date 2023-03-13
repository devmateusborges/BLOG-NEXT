"use client";
import AppLoading from "@/components/AppLoading";
import { AppPost } from "@/interfaces/GlobalIntaface";
import { BlogService } from "@/service/BlogService";
import Link from "next/link";
import { ArrowCircleLeft } from "phosphor-react";
import { useEffect, useState } from "react";

interface PagePost {
  params: {
    id: string;
  };
}

export default function PagePost({ params }: PagePost) {
  const [postData, setDataPosts] = useState<AppPost[]>([]);

  //==============================
  useEffect(() => {
    handleData();
  }, []);
  //==============================
  const handleData = async () => {
    const result = await BlogService.GetByIDPosts(params.id);

    setDataPosts(result.items);
  };
  return (
    <div className="w-full xl:p-2   flex items-center justify-center ">
      <div className="flex flex-col h-[100vh] bg-white w-full xl:w-[95%] rounded-lg">
        <div className="p-2">
          <Link href="/">
            <div className="xl:hidden">
              <ArrowCircleLeft size={40} color="#363636" weight="light" />
            </div>
            <div className="hidden xl:block">
              <ArrowCircleLeft size={60} color="#363636" weight="light" />
            </div>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-[20px] xl:text-[48px] font-bold text-[#646464]">
            {postData[0]?.title}
          </h1>
          <h2 className="xl:text-[32px] font-semibold text-[#919191]">
            {postData[0]?.subtitle}
          </h2>
        </div>
        <div className="w-full p-5 xl:p-10">
          <p className="text-[15px] indent-8 text-justify xl:text-[20px]">
            {postData[0]?.subject}
          </p>
        </div>
        <AppLoading />
      </div>
    </div>
  );
}
