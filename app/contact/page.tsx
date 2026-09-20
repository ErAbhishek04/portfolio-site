import { Github, Mail, Linkedin, Phone, FileText } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/abhishek-takawane-aa1161225/",
    label: "LinkedIn",
    handle: "Abhishek Takawane",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/ErAbhishek04",
    label: "GitHub",
    handle: "ErAbhishek04",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:takawaneabhishek04@gmail.com",
    label: "Email",
    handle: "takawaneabhishek04@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    href: "tel:9325212524",
    label: "Phone",
    handle: "+91 9325212524",
  },
  {
    icon: <FileText size={20} />,
    href: "/about",
    label: "Resume & Experience",
    handle: "View Full Resume",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pb-16">
      <Navigation />
      <main className="px-6 pt-32 mx-auto max-w-4xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-display">
          Let&apos;s connect
        </h1>
        <p className="mt-4 text-zinc-400">
          Reach out through any of the channels below or check out my background and experience.
        </p>
        <div className="grid gap-4 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="flex flex-col gap-4 p-5 border rounded-lg border-zinc-800 bg-zinc-900/30 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              {social.icon}
              <span className="text-sm font-medium">{social.label}</span>
              <span className="text-xs text-zinc-500">{social.handle}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}