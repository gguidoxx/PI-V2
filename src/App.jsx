import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./components/Cards/Card";

export default function App() {
  return (
    <>
      <div className="flex justify-center h-full bg-slate-600">
        <div className="grid grid-cols-3 gap-x-96 gap-y-8">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      </div>
    </>
  );
}
