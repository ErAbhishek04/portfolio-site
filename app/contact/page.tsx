import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/in/your-actual-profile",
    label: "LinkedIn",
    handle: "Abhishek Takawane",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:your.professional.email@gmail.com",
    label: "Email",
    handle: "your.email@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/your-github-username",
    label: "Github",
    handle: "your-github-username",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pb-16">
      <Navigation />
      <main className="px-6 pt-32 mx-auto max-w-3xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Let&apos;s connect
        </h1>
        <p className="mt-4 text-zinc-400">
          Reach out through any of the channels below.
        </p>
        <div className="grid gap-4 mt-12 sm:grid-cols-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="flex flex-col gap-4 p-5 border rounded-lg border-zinc-800 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
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