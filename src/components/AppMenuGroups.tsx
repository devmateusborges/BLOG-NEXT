"use client";
import {
  ArrowCircleDown,
  ArrowCircleRight,
  ArrowCircleUp,
} from "phosphor-react";
import { useState } from "react";

export function AppMenuGroups() {
  const [activeArrow, setActiveArrow] = useState("hidden");
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="font-display text-[36px]">Grupos</h1>

      <div className="flex w-full mb-5">
        <ul className="w-full">
          <li className="w-full border border-1">
            <button
              onClick={() =>
                setActiveArrow(activeArrow == "hidden" ? "block" : "hidden")
              }
              className="w-full flex items-center hover:bg-stone-300"
            >
              <div className="w-[80%]">
                <p className="hover:scale-150 ">Direito penal</p>
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
              <li className="border border-1 m-1">
                <button className="hover:bg-stone-300 w-full hover:scale-105 delay-100">
                  Direito penal I
                </button>
              </li>
              <li className="border border-1 m-1">
                <button className="hover:bg-stone-300 w-full hover:scale-105 delay-100">
                  Direito penal II
                </button>
              </li>
            </ul>
          </li>

          <li className="w-full border border-1">
            <button
              onClick={() =>
                setActiveArrow(activeArrow == "hidden" ? "block" : "hidden")
              }
              className="w-full flex items-center hover:bg-stone-300"
            >
              <div className="w-[80%]">
                <p className="hover:scale-150 ">Direito penal</p>
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
              <li className="border border-1 m-1">
                <button className="hover:bg-stone-300 w-full hover:scale-105 delay-100">
                  Direito penal I
                </button>
              </li>
              <li className="border border-1 m-1">
                <button className="hover:bg-stone-300 w-full hover:scale-105 delay-100">
                  Direito penal II
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
