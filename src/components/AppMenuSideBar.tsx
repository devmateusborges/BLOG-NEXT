"use client";

import { RootState } from "@/store";
import { XCircle } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "../store/utilStore";
import { AppMenuGroups } from "./AppMenuGroups";
export default function AppMenuSideBar() {
  const Sidebar = useSelector((state: RootState) => state.util.sidebar);

  const dispatch = useDispatch();
  return (
    <>
      {Sidebar && (
        <div className="xl:hidden bg-white w-[80%] fixed  h-[100%] z-10">
          <div className="flex  flex-col items-center justify-center p-3">
            <div className="w-full flex justify-end ">
              <button onClick={() => dispatch(SideBar(false))}>
                <XCircle size={40} color="#525252" weight="light" />
              </button>
            </div>
            <div className="w-full h-full">
              <AppMenuGroups />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
