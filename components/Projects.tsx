"use client";

import { projects, tags } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { LinkButton } from "./LinkButton";
import { CodeIcon, GitHubIcon, LinkIcon } from "./icons";
import { ProjectsProps } from "@/types";

type TabKey = "all" | "react" | "next" | "react-native" | "vue";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "react", label: "React" },
  { key: "next", label: "Next.js" },
  { key: "react-native", label: "React Native / Expo" },
  { key: "vue", label: "Vue" },
];

const norm = (s?: string) =>
  (s ?? "").toLowerCase().replace(/\s+/g, " ").trim();

const matchTab = (tab: TabKey, p: ProjectsProps) => {
  if (tab === "all") return true;
  const t = norm(p.tecnology);

  switch (tab) {
    case "react":
      // React puro (evita confundir con Next)
      return t.includes("react") && !t.includes("next");
    case "next":
      return t.includes("next");
    case "react-native":
      return t.includes("react native") || t.includes("expo");
    case "vue":
      return t.includes("vue");
  }
};

export const Projects = () => {
  const [tab, setTab] = useState<TabKey>("all");

  const counts = useMemo(() => {
    const base = {
      "all": projects.length,
      "react": 0,
      "next": 0,
      "react-native": 0,
      "vue": 0,
    };
    for (const p of projects) {
      if (matchTab("react", p)) base.react++;
      if (matchTab("next", p)) base.next++;
      if (matchTab("react-native", p)) base["react-native"]++;
      if (matchTab("vue", p)) base.vue++;
    }
    return base;
  }, []);

  const filtered = useMemo(
    () => projects.filter((p) => matchTab(tab, p)),
    [tab],
  );

  return (
    <div>
      <h2 className="flex items-center mb-6 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white">
        <CodeIcon />
        Proyectos
      </h2>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Filtro de proyectos"
        className="mb-8 inline-flex flex-wrap gap-2 rounded-xl bg-gray-100 p-1 dark:bg-gray-800/60">
        {TABS.map(({ key, label }) => {
          const isActive = tab === key;
          const badge =
            key === "all"
              ? counts.all
              : key === "react"
              ? counts.react
              : key === "next"
              ? counts.next
              : key === "react-native"
              ? counts["react-native"]
              : counts.vue;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(key)}
              className={[
                "px-3 py-1.5 text-sm md:text-base rounded-lg transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
                isActive
                  ? "bg-white dark:bg-gray-900 text-emerald-700 dark:text-emerald-300 shadow"
                  : "text-gray-700/80 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-900/50",
              ].join(" ")}>
              <span className="align-middle">{label}</span>
              <span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gray-200 px-1 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                {badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Listado */}
      <div className="flex flex-col gap-y-16">
        {filtered.map((project, index) => (
          <article
            key={index}
            className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative grid col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <Image
                  width={300}
                  height={100}
                  alt={project.title}
                  className="object-cover object-top w-full h-56 transition sm:h-full md:scale-110 md:group-hover:scale-105"
                  loading="lazy"
                  src={project.image}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-white">
                {project.title}
              </h3>

              <ul className="mt-2 flex flex-row flex-wrap gap-2">
                {(project.tags ?? []).map((tag: any, i: number) => (
                  <li key={i}>
                    <span className="text-black flex items-center gap-x-2 rounded-full text-xs bg-white py-1 px-2 dark:bg-gray-800 dark:text-gray-100">
                      {tag.icon}
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 text-gray-700 dark:text-gray-200">
                {project.description}
              </div>

              <div className="mt-5 flex md:mt-2">
                <LinkButton href={project.github}>
                  <GitHubIcon /> Code
                </LinkButton>
                <LinkButton href={project.link}>
                  <LinkIcon /> Preview
                </LinkButton>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            No hay proyectos para este filtro… todavía 😉
          </p>
        )}
      </div>
    </div>
  );
};
