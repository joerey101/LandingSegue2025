"use client";
import React from "react";
import Image from "next/image";

export default function Legacy({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";

    return (
        <section className="relative min-h-[50vh] flex flex-col justify-between bg-background-dark overflow-hidden group pb-0">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/Segue-Blue-Marlin-08-scaled-1.avif"
                    alt="Legacy"
                    fill
                    className="object-cover opacity-90 scale-105"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#020d17]"></div>

            {/* Legacy Content */}
            <div className="relative z-10 w-full flex flex-col items-center pt-32 lg:pt-48 px-6 text-center">
                <div className="w-full max-w-[1280px] mx-auto">
                    <h2 className="legacy-title mb-16 font-serif">
                        {isEs ? <>EL LEGADO DEL<br />MOVIMIENTO</> : <>THE LEGACY OF<br />MOVEMENT</>}
                    </h2>
                    <p className="legacy-paragraph mb-12 md:mb-[100px] font-serif max-w-4xl mx-auto">
                        {isEs
                            ? "Ya sea deslizándose por aguas tranquilas o abrazando la emoción de horizontes abiertos, cada Segue es una obra maestra de diseño e ingeniería. Creado para quienes buscan elegancia con propósito, es un símbolo de sofisticación atemporal, listo para transformar cada viaje en una experiencia inolvidable."
                            : "Whether gliding through calm waters or embracing the thrill of open horizons, every Segue is a masterpiece of design and engineering. Created for those who seek purposeful elegance, it is a symbol of timeless sophistication."}
                    </p>
                </div>
            </div>
        </section>
    );
}
