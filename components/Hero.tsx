"use client";

export default function Hero({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";

    return (
        <header className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <iframe
                    src="https://player.vimeo.com/video/1156142302?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="absolute inset-0 w-full h-full object-cover scale-[3.5] md:scale-[1.4] origin-center pointer-events-none"
                ></iframe>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <div
                className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(197, 159, 89, 0.15), transparent 60%)",
                }}
            ></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-32 md:mt-48">
                <p className="text-white/90 tracking-[0.4em] text-[10px] md:text-sm font-bold mb-6 uppercase animate-pulse shadow-sm no-underline border-none decoration-0">
                    {isEs ? "La Nueva Era de Segue" : "The New Era of Segue"}
                </p>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] tracking-tight md:tracking-normal mb-8 text-white drop-shadow-lg uppercase">
                    {isEs ? (
                        <>
                            Redefiniendo <br />
                            Los Límites <br className="md:hidden" />
                            <span className="italic text-white font-sans sm:font-serif"> del Diseño</span>
                        </>
                    ) : (
                        <>
                            Redefining the <br />
                            <span className="italic text-white">Limits of Design</span>
                        </>
                    )}
                </h1>
                <p className="max-w-xl mx-auto text-white text-lg md:text-xl leading-relaxed mb-12 drop-shadow-xl">
                    {isEs
                        ? "Cada curva es un testimonio de la eficiencia aerodinámica. Fusionamos el arte naval con tecnología de vanguardia para crear embarcaciones que no solo atraviesan el agua, sino que la dominan."
                        : "Every curve is a testament to aerodynamic efficiency. We blend naval artistry with avant-garde technology to create vessels that don't just traverse the water, but command it."}
                </p>
                <div className="flex flex-col items-center">
                    <div className="h-16 w-[1px] bg-gradient-to-b from-white via-white/50 to-transparent mb-4"></div>
                    <span className="text-[10px] tracking-widest uppercase text-white/60">
                        Scroll to Explore
                    </span>
                </div>
            </div>
        </header>
    );
}
