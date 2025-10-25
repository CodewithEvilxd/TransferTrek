import React from "react";
import NavbarModalTriggers from "./NavbarModalTriggers";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-[40] h-16 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 px-6">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900">TransferTrek</h1>
        </div>
        <NavbarModalTriggers />
      </div>
    </nav>
  );
}
