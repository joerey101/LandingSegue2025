"use client";
import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Carousel({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";
    const [activeModel, setActiveModel] = useState<"X6" | "XS5" | "XS6">("X6");

    // Embla setup
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

    // Data
    const modelData = {
        X6: [
            "/fotos-carrusel/X6/X6-01.webp",
            "/fotos-carrusel/X6/X6-02.webp",
            "/fotos-carrusel/X6/X6-03.webp",
            "/fotos-carrusel/X6/X6-04.webp",
            "/fotos-carrusel/X6/X6-05.webp",
        ],
        XS5: [
            "/fotos-carrusel/XS5/XS5-01.webp",
            "/fotos-carrusel/XS5/XS5-02.webp",
            "/fotos-carrusel/XS5/XS5-03.webp",
            "/fotos-carrusel/XS5/XS5-04.webp",
            "/fotos-carrusel/XS5/XS5-05.webp",
        ],
        XS6: [
            "/fotos-carrusel/XS6/Segue XS6-01.webp",
            "/fotos-carrusel/XS6/Segue XS6-02.webp",
            "/fotos-carrusel/XS6/Segue XS6-03.webp",
            "/fotos-carrusel/XS6/Segue XS6-04.webp",
            "/fotos-carrusel/XS6/Segue XS6-05.webp",
        ],
    };

    const images = modelData[activeModel];

    // Logic to change model
    const changeModel = (model: "X6" | "XS5" | "XS6") => {
        setActiveModel(model);
        if (emblaApi) emblaApi.scrollTo(0);
    };

    return (
        <section className="relative bg-background-dark py-16 md:py-32 overflow-hidden border-t border-white/5">
            <div className="px-6 mb-16 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary text-[10px] tracking-[0.4em] font-bold uppercase mb-2 block">
                            {isEs ? "Experiencia Inmersiva" : "Immersive Experience"}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white italic">
                            {isEs ? "Navegación" : "Navigation"} <br className="md:hidden" />{" "}
                            <span className="not-italic">
                                {isEs ? "Sin Límites" : "Without Limits"}
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Model Selector */}
                <div className="flex gap-12 border-b border-white/5 w-full justify-center md:justify-start pb-4">
                    {(["X6", "XS5", "XS6"] as const).map((model) => (
                        <button
                            key={model}
                            onClick={() => changeModel(model)}
                            className={`model-selector text-sm md:text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative ${activeModel === model
                                    ? "text-white active"
                                    : "text-white/40 hover:text-white"
                                }`}
                        >
                            {model}
                            {activeModel === model && (
                                <div className="absolute -bottom-[17px] left-0 w-full h-[1px] bg-[#c59f59]"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y gap-6 px-[10%] md:px-[12.5%]">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_80vw] md:flex-[0_0_75vw] min-w-0 relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm border border-white/5"
                        >
                            <div className="w-full h-full relative">
                                <Image
                                    src={src}
                                    alt={`${activeModel} Slide ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
