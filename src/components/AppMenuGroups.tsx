"use client";
import { AppGroup } from "@/interfaces/GlobalIntaface";
import { BlogService } from "@/service/BlogService";
import Link from "next/link";
import {
  ArrowCircleDown,
  ArrowCircleRight,
  ArrowCircleUp,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SideBar } from "../store/utilStore";
import AppLoading from "./AppLoading";
export function AppMenuGroups() {
  const [groupData, setDataGroup] = useState<AppGroup[]>([]);

  const dispatch = useDispatch();
  //==============================
  useEffect(() => {
    handleData();
  }, []);
  //==============================
  const handleData = async () => {
    const result = await BlogService.GetGroups();

    setDataGroup(result.items);

    console.log(">>>>>" + result.items);
  };
  //==================================

  const Dropdown = (group: AppGroup) => {
    const [activeArrow, setActiveArrow] = useState("hidden");
    return (
      <li key={group.id + group.name_group} className="w-full border border-1">
        <button
          onClick={() =>
            setActiveArrow(activeArrow == "hidden" ? "block" : "hidden")
          }
          className="w-full flex items-center hover:bg-stone-300"
        >
          <div className="w-[80%]">
            <p className="hover:scale-75 xl:text-[25px] ">{group.name_group}</p>
          </div>
          <div className="w-[20%] ">
            {activeArrow == "hidden" ? (
              <ArrowCircleUp size={28} color="#a3a3a3" weight="light" />
            ) : (
              <ArrowCircleDown size={28} color="#a3a3a3" weight="light" />
            )}
          </div>
        </button>
        <ul className={`m-4  ${activeArrow}`}>
          {group.post.map((post) => (
            <li
              key={post.id}
              className="border border-1 m-1 rounded-lg pl-2 hover:bg-[#919191] hover:scale-105 delay-100 hover:text-white hover:font-bold"
            >
              <Link
                onClick={() => dispatch(SideBar(false))}
                href={`/${post.id}`}
                className="hover:bg-stone-300 w-full hover:scale-105 delay-75"
              >
                <div className="flex items-center justify-center  w-full">
                  <div className="w-[70%]">
                    <h1 className="text-[15px] bold xl:text-[20px]">
                      {post.title}
                    </h1>
                    <p className="text-[10px]">{post.subtitle}</p>
                  </div>
                  <div className="w-[30%]">
                    <ArrowCircleRight
                      size={20}
                      color="#a5a4a4"
                      weight="light"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="font-display text-[36px]">Grupos</h1>

      <div className="flex w-full mb-5">
        <ul className="w-full">
          {groupData.map((group) => (
            <Dropdown
              key={group.id}
              name_group={group.name_group}
              post={group.post}
            />
          ))}
        </ul>
      </div>
      <AppLoading />
    </div>
  );
}
