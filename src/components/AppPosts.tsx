"use client";
import { BlogService } from "@/service/BlogService";
import Image from "next/image";
import { Eye, EyeClosed, PaperPlaneRight } from "phosphor-react";
import { useEffect, useState } from "react";
import useApi from "./hooks/useApi";

interface AppPost {
  id: string;
  title: string;
  subtitle: string;
  subject: string;
  url_photo: string;
  date_post?: string;
  user_id: string;
  group_id: string;
}

export function AppPosts() {
  const [appIsView, setAppIsView] = useState(false);
  const [postData, setDataPosts] = useState<AppPost[]>([]);
  const [indexIsViewData, setIndexIsViewData] = useState(0);
  //==============================
  const { getApi } = useApi();
  //==============================
  useEffect(() => {
    handleData();
  }, []);
  //==============================
  const handleData = async () => {
    const result = await BlogService.getPosts();

    setDataPosts(result.items);
  };
  //==============================

  return (
    <>
      <div className="w-[100%] flex flex-col justify-center items-center">
        <h1 className="  xl:mt-8 xl:text-[48px] text-[25px]   ">
          ASSUNTOS DA SEMANA
        </h1>
        {postData?.map((posts, index) => (
          <div className="flex flex-col items-center justify-center w-full shadow-lg shadow-stone-300 mt-10 mb-5 p-5">
            <Image
              data-aos="fade-left"
              className="rounded-3xl"
              src={posts.url_photo}
              width={400}
              height={100}
              alt="Picture of the author"
            />

            <div data-aos="fade-left" className="w-full flex m-5 xl:mt-10">
              <h1 className="first-line:uppercase text-[20px] ml-10 xl:text-[32px] w-[70%] text-black">
                {posts.subtitle}
              </h1>
              <div className="w-[30%] ">
                <button
                  onClick={() => {
                    setAppIsView(true), setIndexIsViewData(index);
                  }}
                  className="standard_color standard_hover p-2  xl:pl-6 xl:pr-6 rounded-lg"
                >
                  <Eye size={27} color="#fafafa" weight="light" />
                </button>
              </div>
            </div>

            <div data-aos="fade-left" className="p-0 xl:p-6">
              <p className="text-stone-500">
                {posts.subject.substring(0, 1000) + "..."}
              </p>
            </div>
            <button className="mt-5 w-full  border-t-2 flex items-center justify-center p-3">
              <PaperPlaneRight size={38} color="#999999" weight="light" />
            </button>
          </div>
        ))}
      </div>

      {appIsView && (
        <div className="lx:w-[100%] dialog fixed xl:top-[-30vh] h-[100vh] left-0  right-0">
          <div className="fixed top-5 h-[100vh] xl:left-20 rounded-lg  w-[100%] xl:w-[90%] text-center bg-white overflow-scroll">
            <div className="flex w-full items-center justify-center  relative placeholder mt-5 xl:mt-8">
              <div className="w-[100%]">
                <h1
                  data-aos="fade-up"
                  className="text-[30px] xl:text-[48px] text-black font-semibold"
                >
                  {postData[indexIsViewData].title}
                </h1>
                <p className="text-[25px] xl:text-[35px] text-stone-700 font-semibold">
                  {postData[indexIsViewData].subtitle}
                </p>
              </div>
              <div className="xl:mr-5">
                <button
                  onClick={() => setAppIsView(false)}
                  className="standard_color pl-5 pr-5 p-2 rounded-lg standard_hover "
                >
                  <EyeClosed size={20} color="#ffffff" weight="light" />
                </button>
              </div>
            </div>
            <div className="h-full w-full flex justify-center items-center p-5 xl:p-10 ">
              <p data-aos="fade-up" className="xl:text-[16pt]">
                {postData[indexIsViewData].subject}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
