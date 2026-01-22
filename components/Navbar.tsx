"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar({ lang }: { lang: 'es' | 'en' }) {
    const [isOpen, setIsOpen] = useState(false);

    const content = {
        es: { cta: 'Solicitar Información', contact: '#contacto' },
        en: { cta: 'Request Information', contact: '#contact' }
    };

    const t = content[lang];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 bg-gradient-to-b from-background-dark/80 to-transparent">
            <div className="max-w-screen-2xl mx-auto relative flex items-center justify-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href={lang === 'en' ? '/en' : '/'} className="block opacity-90 hover:opacity-100 transition-opacity duration-300">
                        <Image src="/Segue-logo.svg" alt="Segue Yachts" width={180} height={50} priority className="w-[180px] h-auto" />
                    </Link>
                </div>

                {/* Right Nav */}
                <div className="hidden md:flex absolute right-0 items-center">
                    <Link href={t.contact} className="group relative light-streak px-8 py-3 rounded-sm bg-segue-blue text-white font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:scale-[1.02] active:scale-95 shadow-xl flex items-center justify-center border border-white/20 hover:border-white/40">
                        {t.cta}
                    </Link>
                </div>

                {/* Language */}
                <div className="hidden md:flex absolute left-0 items-center gap-4 text-[10px] font-bold tracking-[0.2em]">
                    <Link href="/" className={`flex items-center gap-2 ${lang === 'es' ? 'text-primary' : 'hover:text-primary transition-colors opacity-60 hover:opacity-100'}`}>
                        <span>ES</span>
                        <span className={`text-base ${lang === 'es' ? '' : 'grayscale hover:grayscale-0 transition-all'}`}>🇪🇸</span>
                    </Link>
                    <div className="w-[1px] h-3 bg-white/20"></div>
                    <Link href="/en" className={`flex items-center gap-2 ${lang === 'en' ? 'text-primary' : 'hover:text-primary transition-colors opacity-60 hover:opacity-100'}`}>
                        <span>EN</span>
                        <span className={`text-base ${lang === 'en' ? '' : 'grayscale hover:grayscale-0 transition-all'}`}>🇺🇸</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden absolute right-0 text-white" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
