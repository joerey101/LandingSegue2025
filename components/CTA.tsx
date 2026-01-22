"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CTA({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";
    const t = {
        title: isEs ? "Descubrí la" : "Discover the",
        subtitle: isEs ? "Experiencia Segue" : "Segue Experience",
        btn: isEs ? "Solicitar Información" : "Request Information",
        link: isEs ? "#contacto" : "#contact"
    };

    return (
        <section className="relative py-16 w-full flex items-center justify-center overflow-hidden bg-[#020d17] border-y border-white/5">
            <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
                <div className="glass-card px-8 py-10 md:px-16 md:py-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="font-sans font-light text-4xl md:text-6xl text-white tracking-tight leading-tight text-center md:text-left">
                        {t.title} <br />{" "}
                        <span className="italic opacity-80">{t.subtitle}</span>
                    </h2>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            const targetId = t.link.replace('#', '');
                            const element = document.getElementById(targetId);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="group relative light-streak px-12 py-4 rounded-sm bg-segue-blue text-white font-sans text-[11px] font-bold tracking-[0.25em] uppercase transition-all hover:scale-[1.05] active:scale-95 shadow-xl flex items-center justify-center border border-white/20 hover:border-white/40 shrink-0 cursor-pointer"
                    >
                        <span className="relative z-10">{t.btn}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
