import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-[#020d17] overflow-hidden text-white">

            {/* Background Image Container - Waiting for User Image */}
            <div className="absolute inset-0 z-0 opacity-50">
                {/* TODO: Uncomment when image is available */}
                {/* <Image 
              src="/path-to-your-image.jpg" 
              alt="Horizonte Segue" 
              fill 
              className="object-cover"
              priority
            /> */}
                <div className="w-full h-full bg-gradient-to-b from-[#050B14] to-[#001830]" />
            </div>

            {/* Radar / Sonar Effect Animation */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                {/* Circles */}
                <div className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] border border-white/5 rounded-full"></div>
                <div className="absolute w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] border border-white/5 rounded-full"></div>
                <div className="absolute w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] border border-white/10 rounded-full"></div>

                {/* Sweep Line */}
                <div className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full animate-[spin_4s_linear_infinite]">
                    <div className="w-full h-1/2 bg-gradient-to-r from-transparent via-transparent to-white/5 border-b border-white/10 origin-bottom"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 mix-blend-screen">
                <h1 className="font-serif text-[120px] md:text-[240px] leading-none text-white/20 tracking-widest select-none blur-[2px]">
                    404
                </h1>
                <div className="space-y-8 -mt-8 md:-mt-24">
                    <h2 className="font-sans text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-white shadow-xl">
                        Coordenadas no encontradas
                    </h2>
                    <p className="font-sans text-white/70 max-w-lg mx-auto font-light text-sm md:text-base leading-relaxed tracking-wide">
                        Parece que has navegado hacia aguas no cartografiadas.
                        <br />
                        Nuestros sistemas no reconocen esta ubicación.
                    </p>

                    <div className="pt-8">
                        <Link
                            href="/"
                            className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden tracking-[0.25em] font-sans text-[10px] md:text-xs font-bold text-white uppercase border border-white/30 hover:border-white transition-all duration-500 backdrop-blur-sm"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-20"></span>
                            <span className="relative">Volver a Puerto</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
