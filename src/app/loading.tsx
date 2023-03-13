import AppAnimation from "@/components/AppAnimation";
import Lineloading from "../../public/animations/Lineloading.json";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <AppAnimation Loop={true} AnimationData={Lineloading} />
    </div>
  );
}
