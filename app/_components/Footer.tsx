import { Github, Linkedin, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 h-12 w-full border-t border-white/40 bg-white/80 px-6 text-zinc-800 shadow-lg backdrop-blur-lg">
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span className="text-sm text-gray-600">by</span>
          <Link
            href="https://nishantdevxd.vercel.app/"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text font-semibold text-transparent hover:from-blue-600 hover:via-purple-600 hover:to-red-600 transition-all duration-300"
          >
            RAj
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden sm:block">Connect with me:</span>
          <div className="flex space-x-3">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/Nishantgauravv/"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/codewithevilxd"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 text-gray-700 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
