"use client";

import { List } from "phosphor-react";
import { useDispatch } from "react-redux";
import { SideBar } from "../store/utilStore";
export function AppHeader() {
  const dispatch = useDispatch();

  return (
    <nav className=" standard_color  text-white flex items-center justify-center  h-[79.7px]  xl:p-3 xl:h-[211px] ">
      <div className="xl:hidden mr-10">
        <button onClick={() => dispatch(SideBar(true))}>
          <List size={24} color="#949494" weight="bold" />
        </button>
      </div>
      <div>
        <h1 className="font-display text-[24px] xl:text-[96px] ">
          Blog Advocacia
        </h1>
      </div>
    </nav>
  );
}
