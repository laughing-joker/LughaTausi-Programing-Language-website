
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Urahisi",
    description:
      "Jifunze kuandika msimbo kwa lugha yenye muundo rahisi kuelewa na kutumia.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Ubunifu",
    description:
      "Geuza mawazo yako kuwa miradi ya teknolojia kwa kujifunza hatua kwa hatua.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Ukuaji",
    description:
      "Jenga maarifa yako ya programu na endelea kupanua uwezo wako wa kiufundi.",
    icon: "↗",
  },
];

export default function HeroSection() {
  return (
    <main className="overflow-hidden bg-[#07040d] text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[90vh] overflow-hidden px-5 py-20 sm:px-10 lg:px-16">
        {/* Background lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="light-orb absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-600/30 blur-[100px]" />
          <div className="light-orb light-orb-delay absolute -right-20 top-40 h-80 w-80 rounded-full bg-blue-600/25 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#07040d_75%)]" />
          <div className="grid-pattern absolute inset-0 opacity-20" />
        </div>

        <div className="mx-auto grid min-h-[70vh] max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Text */}
          <div className="relative z-10 text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              Lugha ya programu iliyojengwa kwa ubunifu
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl xl:text-7xl">
              Inua Akili Yako.
              <span className="mt-2 block bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Inua Msimbo Wako.
              </span>
              <span className="mt-2 block text-white">Jenga na Tausi.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg lg:mx-0">
              Gundua ulimwengu wa programu kupitia Lugha Tausi.
              Anza kujifunza, jaribu mawazo yako na ujenge
              mustakabali wako wa kidijitali.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/home/Download"
                className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 font-bold text-white shadow-[0_10px_35px_rgba(124,58,237,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(59,130,246,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300"
              >
                Anza Kujifunza <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/home/About"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300"
              >
                Gundua Tausi
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-gray-400 lg:justify-start">
              <span>✦ Kujifunza</span>
              <span>◇ Ubunifu</span>
              <span>↗ Teknolojia</span>
            </div>
          </div>

          {/* 3D logo stage */}
          <div
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-3xl sm:h-80 sm:w-80" />

            <div className="logo-float relative aspect-square w-full max-w-[340px]">
              <div
                className="absolute inset-5 rounded-[35%] border border-purple-300/20 bg-gradient-to-br from-purple-500/15 via-[#10091f] to-blue-500/10 shadow-[0_0_80px_rgba(139,92,246,0.20)]"
                style={{
                  transform: "rotateY(-12deg) rotateX(8deg)",
                  transformStyle: "preserve-3d",
                }}
              />

              <div
                className="absolute inset-10 rounded-[30%] border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                style={{
                  transform: "translateZ(35px) rotateY(12deg)",
                }}
              />

              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: "translateZ(65px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src="/Logo.png"
                  alt="Nembo ya Lugha Tausi"
                  width={280}
                  height={280}
                  priority
                  className="h-[72%] w-[72%] object-contain drop-shadow-[0_20px_35px_rgba(139,92,246,0.45)]"
                />
              </div>

              {/* Floating labels */}
              <div className="absolute -left-2 top-[18%] rounded-xl border border-purple-300/20 bg-[#171024]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8">
                <span className="block text-xs text-gray-400">Fikiria</span>
                <span className="font-bold text-purple-200">Think</span>
              </div>

              <div className="absolute -right-2 bottom-[17%] rounded-xl border border-blue-300/20 bg-[#0c1222]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-8">
                <span className="block text-xs text-gray-400">Jenga</span>
                <span className="font-bold text-blue-200">Create</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </section>

      {/* FEATURES */}
      <section className="relative px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-purple-300">
              Ulimwengu wa Tausi
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              Zaidi ya kuandika{" "}
              <span className="text-purple-300">msimbo.</span>
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              Jukwaa la kujifunza, kufikiri kwa ubunifu na kuendeleza
              ujuzi wa teknolojia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="feature-3d group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 shadow-[0_15px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:border-purple-400/50 hover:bg-purple-500/[0.08]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute right-5 top-4 text-sm text-gray-600">
                  {feature.number}
                </div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-500/15 text-3xl text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.12)] transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 pb-24 pt-8 sm:px-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-purple-300/20 bg-gradient-to-br from-purple-900/60 via-[#130b22] to-blue-950/50 px-6 py-16 text-center shadow-[0_20px_80px_rgba(91,33,182,0.15)] sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-purple-200">
              Hatua yako inaanza hapa
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              Wazo lako linaweza kuwa mwongozo.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              Anza safari yako ya kujifunza Lugha Tausi na geuza
              udadisi wako kuwa ujuzi wa vitendo.
            </p>
            <Link
              href="/home/Download"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-purple-950 transition duration-300 hover:-translate-y-1 hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Anza Sasa <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
