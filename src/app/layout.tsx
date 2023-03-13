"use client";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import AppLoading from "@/components/AppLoading";
import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "../store/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="standard_scroll">
        <AppHeader />
        <div className=" min-h-[100vh]">
          <Provider store={store}>{children}</Provider>
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
