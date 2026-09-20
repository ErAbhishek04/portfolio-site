import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, FileText, ArrowRight } from "lucide-react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Abhishek
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-12 text-center animate-fade-in px-6">
        <h2 className="text-xl text-zinc-300 mb-3 font-medium">
          Associate Data Scientist
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Specializing in data pipelines, predictive maintenance, and production GenAI/RAG architectures on AWS &amp; Databricks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md hover:bg-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            About &amp; Resume
          </Link>
          <a
            href="https://github.com/ErAbhishek04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-300 border rounded-md border-zinc-800 bg-zinc-900/60 hover:border-zinc-600 hover:text-zinc-100 transition-all shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}