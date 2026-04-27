"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

const metrics = [
    { value: "500", label: "global member cap" },
    { value: "24/7", label: "private desk" },
    { value: "41", label: "partner cities" },
];

export default function Hero() {
    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 900], [0, 190]);
    const imageOpacity = useTransform(scrollY, [0, 650], [1, 0.48]);

    return (
        <section className="relative min-h-[100svh] overflow-hidden bg-[#070706] text-[#f7f1e6]">
            <motion.div className="absolute inset-0" style={{ y: imageY, opacity: imageOpacity }}>
                <NextImage
                    src="/hero-bg.png"
                    alt="Private members lounge"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#070706]/45" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,6,0.98)_0%,rgba(7,7,6,0.72)_42%,rgba(7,7,6,0.28)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,#070706_0%,rgba(7,7,6,0)_100%)]" />
            </motion.div>

            <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1580px] px-6 pb-10 pt-28 sm:px-8 md:pt-32 lg:px-10 xl:px-12">
                <div className="grid w-full items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
                    <div className="max-w-4xl">
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mb-7 flex items-center gap-4 text-sm text-primary"
                        >
                            <span className="h-px w-12 bg-primary/70" />
                            Invitation-only private concierge
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="font-serif text-6xl font-semibold leading-[0.96] text-[#f7f1e6] sm:text-7xl md:text-8xl xl:text-[8.5rem]"
                        >
                            Noir Haven
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.24 }}
                            className="mt-8 max-w-2xl"
                        >
                            <p className="text-2xl leading-snug text-[#efe5d5] md:text-3xl">
                                Private access, precisely arranged.
                            </p>
                            <p className="mt-5 max-w-xl text-base leading-8 text-[#c8bdae] md:text-lg">
                                A discreet members-only desk for rare travel, coveted rooms, private aviation,
                                closed-door events, and the moments that cannot be booked in public.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <button className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 font-semibold text-primary-foreground transition-colors hover:bg-[#f0d393]">
                                Request an Invitation
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                            <Link
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 font-semibold text-[#f7f1e6] transition-colors hover:border-primary/60 hover:text-primary"
                            >
                                Explore Membership
                                <ArrowDown className="h-5 w-5" />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.48 }}
                        className="w-full max-w-xl border-l border-primary/30 bg-[#070706]/42 p-6 backdrop-blur-md lg:justify-self-end"
                    >
                        <p className="max-w-sm text-sm leading-7 text-[#c8bdae]">
                            Each membership is reviewed by committee. The network remains deliberately
                            small so every request receives human judgment and precise execution.
                        </p>
                        <div className="mt-7 grid grid-cols-3 gap-5 border-t border-white/10 pt-6">
                            {metrics.map((metric) => (
                                <div key={metric.label}>
                                    <div className="font-serif text-3xl text-[#f7f1e6]">{metric.value}</div>
                                    <div className="mt-2 text-xs leading-5 text-[#a99f8f]">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
