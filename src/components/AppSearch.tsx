"use client";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

interface AppSearch {
  onclick: (e: string) => void;
}

export function AppSearch(props: AppSearch) {
  const [search, setSearch] = useState("");
  return (
    <div className=" h-[75px] xl:h-[99px] flex justify-center items-center">
      <input
        value={search}
        className="outline-none w-[70%] shadow-lg shadow-stone-400 xl:w-[60%] border border-1 p-3 rounded-lg mr-5"
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => {
          props.onclick(search), setSearch("");
        }}
        className=" standard_color standard_hover p-3 rounded-lg"
      >
        <MagnifyingGlass size={24} color="#fafafa" weight="bold" />
      </button>
    </div>
  );
}
