import LaravelIcon from "../icons/LaravelIcon.astro";
import AngularIcon from "../icons/AngularIcon.astro";
import TypescriptIcon from "../icons/TypescriptIcon.astro";
import PhpIcon from "../icons/PhpIcon.astro";
import MysqlIcon from "../icons/MysqlIcon.astro";
import TailwindIcon from "../icons/TailwindIcon.astro";
import BootstrapIcon from "../icons/BootstrapIcon.astro";
import GitIcon from "../icons/GitIcon.astro";
import GithubIcon from "../icons/GithubIcon.astro";
import ReactIcon from "../icons/ReactIcon.astro";
import AstroIcon from "../icons/AstroIcon.astro";
import SvelteIcon from "../icons/SvelteIcon.astro";
import JavascriptIcon from "../icons/JavascriptIcon.astro";
import HtmlIcon from "../icons/HtmlIcon.astro";
import CssIcon from "../icons/CssIcon.astro";
import type { ITags } from "../interfaces/tags.interface";


export const TAGS: ITags = {
  angular: {
    name: "Angular",
    className: "bg-slate-900 text-white",
    icon: AngularIcon,
  },
  laravel: {
    name: "Laravel",
    className: "bg-white text-black",
    icon: LaravelIcon,
  },
  typescript: {
    name: "Typescript",
    className: "bg-white text-black",
    icon: TypescriptIcon,
  },
  php: {
    name: "Php",
    className: "bg-sky-600 text-white",
    icon: PhpIcon,
  },
  mysql: {
    name: "Mysql",
    className: "bg-white text-black",
    icon: MysqlIcon,
  },
  tailwind: {
    name: "Tailwind",
    className: "bg-slate-900 text-white",
    icon: TailwindIcon,
  },
  bootstrap: {
    name: "Bootstrap",
    className: "bg-purple-300 text-black",
    icon: BootstrapIcon,
  },
  git: {
    name: "Git",
    className: "bg-orange-300 text-black",
    icon: GitIcon,
  },
  github: {
    name: "Github",
    className: "bg-white text-black",
    icon: GithubIcon,
  },
  react: {
    name: "React",
    className: "bg-sky-900 text-white",
    icon: ReactIcon,
  },
  astro: {
    name: "Astro",
    className: "bg-slate-900 text-white",
    icon: AstroIcon,
  },
  svelte: {
    name: "Svelte",
    className: "bg-orange-300 text-black",
    icon: SvelteIcon,
  },
  javascript: {
    name: "Javascript",
    className: "bg-white text-black",
    icon: JavascriptIcon,
  },
  html: {
    name: "Html",
    className: "bg-orange-300 text-black",
    icon: HtmlIcon,
  },
  css: {
    name: "Css",
    className: "bg-sky-600 text-white",
    icon: CssIcon,
  },
};
