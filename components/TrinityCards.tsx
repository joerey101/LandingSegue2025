"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LightboxState {
    isOpen: boolean;
    type: "image" | "video";
    src: string;
}

export default function TrinityCards({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";
    const [lightbox, setLightbox] = useState<LightboxState>({
        isOpen: false,
        type: "image",
        src: "",
    });

    // Mobile Accordion Logic: State to track which card is expanded on mobile
    // Default to null or the first one if we want one open by default.
    // Let's keep them closed or maybe expand first one? 
    // User said "expand to show info". 
    // Let's allow toggling.
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const openLightbox = (type: "image" | "video", src: string) => {
        setLightbox({ isOpen: true, type, src });
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightbox({ ...lightbox, isOpen: false });
        document.body.style.overflow = "auto";
    };

    const handleCardClick = (model: string) => {
        // Only for mobile behavior essentially, but okay for all
        if (expandedCard === model) {
            setExpandedCard(null); // Toggle close
        } else {
            setExpandedCard(model);
        }
    };

    // Close on Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            <section className="relative z-20 bg-[#020b16] py-20 overflow-hidden">
                <div className="px-6 md:px-12 mb-8 md:mb-12 flex flex-col md:flex-row justify-between md:items-end">
                    <div className="max-w-2xl">
                        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                            {isEs ? "Descubra Nuestra Flota" : "Discover Our Fleet"}
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl text-white italic leading-tight">
                            First Look:
                            <br />
                            <span className="not-italic block mt-2">
                                {isEs ? "El Horizonte que Viene" : "The Horizon Ahead"}
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="trinity-container flex flex-col lg:flex-row h-auto lg:h-[55vh] min-h-[500px] w-full lg:max-w-[95%] mx-auto gap-2 lg:gap-1 px-4 lg:px-0">
                    {/* Card 1: X4 */}
                    <div
                        className={`relative flex-1 trinity-col group overflow-hidden rounded-lg lg:rounded-none lg:first:rounded-l-2xl border border-white/5 cursor-pointer
                         transition-all duration-500 ease-in-out
                         ${expandedCard === 'X4' ? 'h-[650px]' : 'h-[160px]'} lg:h-auto
             `}
                        onClick={() => handleCardClick('X4')}
                    >
                        <div className="absolute inset-0 overflow-hidden">
                            <Image
                                src="/X4-Segue.jpg"
                                alt="X4 Sport yacht"
                                fill
                                className="object-cover opacity-90 transition-opacity duration-700 animate-ken-burns"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>

                        {/* Centered Title (Hidden when expanded on mobile or hovered on desktop) */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 model-title z-20 
                             ${expandedCard === 'X4' ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}>
                            <span className="font-serif text-[clamp(4rem,10vw,12rem)] text-white/25 font-bold italic tracking-tighter leading-none group-hover:text-primary/20">
                                X4
                            </span>
                        </div>

                        {/* Content (Visible when expanded or hovered) */}
                        <div className={`absolute bottom-0 left-0 w-full p-6 pb-12 lg:p-16 z-30 transform transition-all duration-700 col-content flex flex-col justify-end h-full bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent
                             ${expandedCard === 'X4' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
                            <span className="text-primary text-[10px] card-tag font-bold uppercase mb-2 lg:mb-3">
                                {isEs ? "PURA SANGRE" : "THOROUGHBRED"}
                            </span>
                            <h3 className="font-serif text-3xl lg:text-6xl text-white mb-4 lg:mb-6 card-title">
                                X4 SPORT
                            </h3>
                            <p className="text-white/80 font-light max-w-sm mb-6 lg:mb-10 card-description block">
                                {isEs
                                    ? "Diseñado con la agresividad de un superdeportivo. Líneas tensas, perfil aerodinámico y una respuesta visceral. El X4 no pide permiso; impone su presencia."
                                    : "Designed with the aggression of a supercar. Taut lines, aerodynamic profile, and a visceral response. The X4 doesn't ask for permission; it commands presence."}
                            </p>
                            <div className="flex items-center gap-4 hidden lg:flex">
                                <button
                                    onClick={(e) => { e.stopPropagation(); openLightbox("image", "/X4-Segue.jpg"); }}
                                    className="px-6 lg:px-8 py-2.5 lg:py-3.5 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all uppercase text-[9px] lg:text-[10px] tracking-[0.2em] font-bold"
                                >
                                    {isEs ? "Explorar X4" : "Explore X4"}
                                </button>
                                <div className="h-[1px] flex-1 bg-white/10"></div>
                            </div>
                            {/* Mobile Button separate to avoid propagation issues if tricky */}
                            <div className="flex lg:hidden mt-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); openLightbox("image", "/X4-Segue.jpg"); }}
                                    className="px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all uppercase text-[10px] tracking-[0.2em] font-bold w-full"
                                >
                                    {isEs ? "Explorar X4" : "Explore X4"}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Title (Always visible unless expanded?) - actually user said info inside when deployed. */}
                        <div className={`absolute bottom-6 left-6 lg:hidden z-30 mobile-title transition-opacity duration-300 ${expandedCard === 'X4' ? 'opacity-0' : 'opacity-100'}`}>
                            <h3 className="font-serif text-2xl text-white">X4 SPORT</h3>
                        </div>
                    </div>

                    {/* Card 2: X6 */}
                    <div
                        className={`relative flex-1 trinity-col group overflow-hidden rounded-lg lg:rounded-none border border-white/5 cursor-pointer
                         transition-all duration-500 ease-in-out
                         ${expandedCard === 'X6' ? 'h-[650px]' : 'h-[160px]'} lg:h-auto
             `}
                        onClick={() => handleCardClick('X6')}
                    >
                        <div className="absolute inset-0 w-full h-full pointer-events-none">
                            <iframe
                                src="https://player.vimeo.com/video/1156142302?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="absolute inset-0 w-full h-full object-cover scale-[3.5] group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out pointer-events-none"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>

                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 model-title z-20 
                             ${expandedCard === 'X6' ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}>
                            <span className="font-serif text-[clamp(4rem,10vw,12rem)] text-white/25 font-bold italic tracking-tighter leading-none group-hover:text-primary/20">
                                X6
                            </span>
                        </div>

                        <div className={`absolute bottom-0 left-0 w-full p-6 pb-12 lg:p-16 z-30 transform transition-all duration-700 col-content flex flex-col justify-end h-full bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent
                             ${expandedCard === 'X6' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
                            <span className="text-primary text-[10px] card-tag font-bold uppercase mb-2 lg:mb-3">
                                {isEs ? "EL AMPLIFICADOR DE VIDA" : "ELEVATING LIFE"}
                            </span>
                            <h3 className="font-serif text-3xl lg:text-6xl text-white mb-4 lg:mb-6 card-title">
                                X6 FLYBRIDGE
                            </h3>
                            <p className="text-white/80 font-light max-w-sm mb-6 lg:mb-10 card-description block">
                                {isEs
                                    ? "Redefinimos la jerarquía naval. Una fusión magistral de volumen arquitectónico y tecnología de confort. Más que navegar, el X6 es una declaración de estatus."
                                    : "A masterful fusion of architectural volume and comfort technology. More than navigating, the X6 is a statement of status that dominates the horizon."}
                            </p>
                            <div className="flex items-center gap-4 hidden lg:flex">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openLightbox("video", "https://player.vimeo.com/video/1156142302?autoplay=1");
                                    }}
                                    className="px-6 lg:px-8 py-2.5 lg:py-3.5 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all uppercase text-[9px] lg:text-[10px] tracking-[0.2em] font-bold"
                                >
                                    {isEs ? "Explorar X6" : "Explore X6"}
                                </button>
                                <div className="h-[1px] flex-1 bg-white/10"></div>
                            </div>
                            <div className="flex lg:hidden mt-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openLightbox("video", "https://player.vimeo.com/video/1156142302?autoplay=1");
                                    }}
                                    className="px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all uppercase text-[10px] tracking-[0.2em] font-bold w-full"
                                >
                                    {isEs ? "Explorar X6" : "Explore X6"}
                                </button>
                            </div>
                        </div>
                        <div className={`absolute bottom-6 left-6 lg:hidden z-30 mobile-title transition-opacity duration-300 ${expandedCard === 'X6' ? 'opacity-0' : 'opacity-100'}`}>
                            <h3 className="font-serif text-2xl text-white">X6 FLYBRIDGE</h3>
                        </div>
                    </div>

                    {/* Card 3: XS5 */}
                    <div
                        className={`relative flex-1 trinity-col group overflow-hidden rounded-lg lg:rounded-none lg:last:rounded-r-2xl border border-white/5 cursor-pointer
                         transition-all duration-500 ease-in-out
                         ${expandedCard === 'XS5' ? 'h-[650px]' : 'h-[160px]'} lg:h-auto
             `}
                        onClick={() => handleCardClick('XS5')}
                    >
                        <div className="absolute inset-0 w-full h-full pointer-events-none">
                            <iframe
                                src="https://player.vimeo.com/video/1067947390?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                className="absolute inset-0 w-full h-full object-cover scale-[3.5] group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out pointer-events-none"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>

                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 model-title z-20 
                             ${expandedCard === 'XS5' ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}>
                            <span className="font-serif text-[clamp(4rem,8vw,10rem)] text-white/25 font-bold italic tracking-tighter leading-none group-hover:text-primary/20 whitespace-nowrap">
                                XS 5
                            </span>
                        </div>

                        <div className={`absolute bottom-0 left-0 w-full p-6 pb-12 lg:p-16 z-30 transform transition-all duration-700 col-content flex flex-col justify-end h-full bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent
                             ${expandedCard === 'XS5' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
                            <span className="text-primary text-[10px] card-tag font-bold uppercase mb-2 lg:mb-3">
                                {isEs ? "DISEÑO DE ALTO RENDIMIENTO" : "PERFORMANCE DESIGN"}
                            </span>
                            <h3 className="font-serif text-3xl lg:text-6xl text-white mb-4 lg:mb-6 card-title">
                                SEGUE XS 5
                            </h3>
                            <p className="text-white/80 font-light max-w-sm mb-6 lg:mb-10 card-description block">
                                {isEs
                                    ? "Donde la ingeniería deportiva se encuentra con la comodidad absoluta. Un perfil agresivo fusionado con interiores de alta gama."
                                    : "Where sports engineering meets absolute comfort. Rigorous performance without sacrificing sophistication."}
                            </p>
                            <div className="flex items-center gap-4 hidden lg:flex">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openLightbox("video", "https://player.vimeo.com/video/1067947390?autoplay=1");
                                    }}
                                    className="px-6 lg:px-8 py-2.5 lg:py-3.5 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all uppercase text-[9px] lg:text-[10px] tracking-[0.2em] font-bold"
                                >
                                    {isEs ? "Explorar XS 5" : "Explore XS 5"}
                                </button>
                                <div className="h-[1px] flex-1 bg-white/10"></div>
                            </div>
                            <div className="flex lg:hidden mt-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openLightbox("video", "https://player.vimeo.com/video/1067947390?autoplay=1");
                                    }}
                                    className="px-6 py-3 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all uppercase text-[10px] tracking-[0.2em] font-bold w-full"
                                >
                                    {isEs ? "Explorar XS 5" : "Explore XS 5"}
                                </button>
                            </div>
                        </div>
                        <div className={`absolute bottom-6 left-6 lg:hidden z-30 mobile-title transition-opacity duration-300 ${expandedCard === 'XS5' ? 'opacity-0' : 'opacity-100'}`}>
                            <h3 className="font-serif text-2xl text-white">SEGUE XS 5</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Overlay */}
            {lightbox.isOpen && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md"
                    onClick={closeLightbox}
                >
                    <button className="absolute top-4 right-8 text-white text-4xl font-bold hover:text-gray-300 z-[1001]">
                        &times;
                    </button>
                    <div className="relative w-[90vw] md:max-w-[80vw] max-h-[90vh] flex items-center justify-center">
                        {lightbox.type === "image" ? (
                            <Image
                                src={lightbox.src}
                                alt="Lightbox Content"
                                width={1920}
                                height={1080}
                                className="max-h-[90vh] w-auto h-auto object-contain shadow-2xl"
                            />
                        ) : (
                            <div className="aspect-video w-full h-full">
                                <iframe
                                    src={lightbox.src}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
