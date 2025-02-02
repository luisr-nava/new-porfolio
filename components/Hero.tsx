"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { LinkButton } from "./LinkButton";
import { DocumentIcon, GitHubIcon, LinkedinIcon } from "./icons";

export const Hero = () => {
  return (
    <div className="max-w-full ">
      <div className="grid gap-4 mb-4">
        <div className="flex items-center justify-around">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 lg:text-5xl  dark:text-white">
            Hey, soy Luis Navarro
          </h1>
          <Image
            src="/hero.webp"
            alt="Luis Navarro"
            width={175}
            height={175}
            className="rounded-full"
          />
        </div>
        <div className="grid space-y-4">
          <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-strong-200   dark:text-gray-100">
            Soy un desarrollador Full Stack con experiencia en diseño web y
            desarrollo backend utilizando tecnologías como{" "}
            <strong className="dark:text-emerald-400/90 font-semibold text-emerald-800">
              React, Node.js, y bases de datos SQL/NoSQL.
            </strong>{" "}
            Me apasiona aprender nuevas herramientas y colaborar en proyectos
            que generen soluciones innovadoras y útiles.
          </p>
          <div className="flex flex-wrap">
            <LinkButton href="https://www.linkedin.com/in/luis-navarro-282858243">
              <LinkedinIcon />
              LinkedIn
            </LinkButton>
            <LinkButton href="https://github.com/luisr-nava">
              <GitHubIcon />
              GitHub
            </LinkButton>

            <LinkButton href="/LuisNavarro_FrontendDev.pdf" download={true}>
              <DocumentIcon />
              Mi CV
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
