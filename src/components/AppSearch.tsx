"use client";
import { MagnifyingGlass } from "phosphor-react";

export function AppSearch() {
  return (
    <div className=" h-[75px] xl:h-[99px] flex justify-center items-center">
      <input
        className="outline-none w-[70%] shadow-lg shadow-stone-400 xl:w-[60%] border border-1 p-3 rounded-lg mr-5"
        type="text"
        placeholder="Pesquisar"
      />
      <button className=" standard_color standard_hover p-3 rounded-lg">
        <MagnifyingGlass size={24} color="#fafafa" weight="bold" />
      </button>
    </div>
  );
}
