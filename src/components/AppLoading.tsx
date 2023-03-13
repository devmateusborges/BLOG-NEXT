"use cliente";
import AppAnimation from "./AppAnimation";
import Lineloading from "../../public/animations/Lineloading.json";
import utilStore from "@/store/utilStore";
import { RootState } from "@/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export default function AppLoading() {
  const Loading = useSelector((state: RootState) => state.util.loading);
  return (
    <>
      {Loading && (
        <div className="flex w-full h-full items-center justify-center">
          <AppAnimation Loop AnimationData={Lineloading} />
        </div>
      )}
    </>
  );
}
