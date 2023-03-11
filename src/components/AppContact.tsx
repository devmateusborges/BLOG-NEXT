"use client";
import {
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  WhatsappLogo,
} from "phosphor-react";

export function AppContact() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="font-display text-[36px] m-">Me Siga</h1>
      <div className="flex m-5">
        <a className="ml-7 hover:scale-125 delay-75" href="#">
          <InstagramLogo size={90} color="#b4b4b4" weight="light" />
        </a>
        <a className="ml-7 hover:scale-125 delay-75" href="#">
          <FacebookLogo size={90} color="#b4b4b4" weight="light" />
        </a>
        <a className="ml-7 hover:scale-125 delay-75" href="#">
          <WhatsappLogo size={90} color="#b4b4b4" weight="light" />
        </a>
      </div>
    </div>
  );
}
