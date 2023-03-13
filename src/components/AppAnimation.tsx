"use client";
import { useLottie } from "lottie-react";

interface Appanimation {
  AnimationData: object;
  Loop: boolean;
}

export default function AppAnimation(props: Appanimation) {
  const options = {
    animationData: props.AnimationData,
    loop: props.Loop,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <h1>{View}</h1>
    </div>
  );
}
