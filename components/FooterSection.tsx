"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function FooterSection({ lang }: { lang: "es" | "en" }) {
    const isEs = lang === "es";
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate send
        setTimeout(() => {
            setFormStatus('sent');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    const t = {
        legacyTitle: isEs ? <>EL LEGADO DEL<br />MOVIMIENTO</> : <>THE LEGACY OF<br />MOVEMENT</>,
        legacyP: isEs
            ? "Ya sea deslizándose por aguas tranquilas o abrazando la emoción de horizontes abiertos, cada Segue es una obra maestra de diseño e ingeniería. Creado para quienes buscan elegancia con propósito, es un símbolo de sofisticación atemporal, listo para transformar cada viaje en una experiencia inolvidable."
            : "Whether gliding through calm waters or embracing the thrill of open horizons, every Segue is a masterpiece of design and engineering. Created for those who seek purposeful elegance, it is a symbol of timeless sophistication.",
        formTitle: isEs ? "Solicitar Información" : "Request Information",
        cta: isEs ? "Enviar Mensaje" : "Send Message",
        sending: isEs ? "Enviando..." : "Sending...",
        sent: isEs ? "¡Mensaje Enviado!" : "Message Sent!",
        placeholders: {
            first: isEs ? "Nombre" : "First Name",
            last: isEs ? "Apellido" : "Last Name",
            phone: isEs ? "Nro de Celular" : "Phone Number",
            msg: isEs ? "Mensaje" : "Message",
        },
        rights: isEs
            ? <>© 2026 Segue Yachts.<br className="md:hidden" /> Todos los derechos reservados.</>
            : <>© 2026 Segue Yachts.<br className="md:hidden" /> All rights reserved.</>,
    };

    return (
        <section className="relative min-h-[140vh] md:min-h-[160vh] flex flex-col justify-between bg-background-dark overflow-hidden group pb-0">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <Image
                    src="/legacy-bg.avif"
                    alt="Legacy Background"
                    fill
                    unoptimized
                    className="object-cover opacity-90 scale-105"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#020d17] pointer-events-none"></div>

            {/* Legacy Content */}
            <div className="relative z-10 w-full flex flex-col items-center pt-32 lg:pt-48 px-6 text-center flex-grow">
                <div className="w-full max-w-[1280px] mx-auto">
                    <h2 className="legacy-title mb-16 font-serif">{t.legacyTitle}</h2>
                    <p className="legacy-paragraph mb-12 md:mb-[100px] font-serif max-w-4xl mx-auto">
                        {t.legacyP}
                    </p>
                </div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 w-full px-6 md:px-12 pb-0 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse justify-between gap-16 items-center md:items-end mb-16">
                    {/* Contact Form */}
                    <div className="flex flex-col md:flex-row gap-16 w-full md:w-1/2 justify-end items-end">
                        <div
                            className="w-full bg-white/5 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-sm"
                            id={isEs ? "contacto" : "contact"}
                        >
                            <h3 className="text-primary text-[10px] tracking-[0.4em] font-bold uppercase mb-8 leading-none">
                                {t.formTitle}
                            </h3>
                            <form className="space-y-6" onSubmit={async (e) => {
                                e.preventDefault();
                                setFormStatus('sending');
                                const form = e.currentTarget;
                                const formData = new FormData(form);

                                try {
                                    const response = await fetch("https://formspree.io/f/xaqewnqd", {
                                        method: "POST",
                                        body: formData,
                                        headers: {
                                            'Accept': 'application/json'
                                        }
                                    });

                                    if (response.ok) {
                                        setFormStatus('sent');
                                        form.reset();
                                        setTimeout(() => setFormStatus('idle'), 5000);
                                    } else {
                                        console.error("Form error:", await response.json());
                                        setFormStatus('idle');
                                        alert(isEs ? "Hubo un error al enviar. Por favor intente nuevamente." : "There was an error sending. Please try again.");
                                    }
                                } catch (error) {
                                    console.error("Network error:", error);
                                    setFormStatus('idle');
                                }
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        placeholder={t.placeholders.first}
                                        className="bg-transparent border-b border-white/20 px-2 py-2 text-[11px] focus:border-primary focus:ring-0 transition-colors placeholder:text-white/30 uppercase tracking-widest outline-none font-sans w-full"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        placeholder={t.placeholders.last}
                                        className="bg-transparent border-b border-white/20 px-2 py-2 text-[11px] focus:border-primary focus:ring-0 transition-colors placeholder:text-white/30 uppercase tracking-widest outline-none font-sans w-full"
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder={t.placeholders.phone}
                                    className="w-full bg-transparent border-b border-white/20 px-2 py-2 text-[11px] focus:border-primary focus:ring-0 transition-colors placeholder:text-white/30 uppercase tracking-widest outline-none font-sans"
                                />
                                <textarea
                                    name="message"
                                    placeholder={t.placeholders.msg}
                                    rows={2}
                                    className="w-full bg-transparent border-b border-white/20 px-2 py-2 text-[11px] focus:border-primary focus:ring-0 transition-colors placeholder:text-white/30 uppercase tracking-widest outline-none resize-none font-sans"
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={formStatus !== 'idle'}
                                    className={`group relative light-streak w-full py-4 bg-segue-blue text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:scale-[1.02] shadow-xl transition-all border border-white/20 hover:border-white/40
                    ${formStatus === 'sent' ? 'bg-green-600 border-green-500' : ''}
                  `}
                                >
                                    {formStatus === 'idle' && t.cta}
                                    {formStatus === 'sending' && t.sending}
                                    {formStatus === 'sent' && t.sent}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Social & Logo */}
                    <div className="flex flex-col gap-4 items-center">
                        <div className="hidden md:block">
                            <Image
                                src="/Segue-logo.svg"
                                alt="Segue Yachts"
                                width={142}
                                height={40}
                                className="brightness-0 invert opacity-80"
                            />
                        </div>

                        <div className="flex gap-6 items-center">
                            <a
                                href="https://www.instagram.com/segueyachts/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-primary transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/61561526582732/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full text-center py-6 border-t border-white/10 bg-background-dark/50">
                    <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-sans">
                        {t.rights}
                    </span>
                </div>
            </div>
        </section>
    );
}
