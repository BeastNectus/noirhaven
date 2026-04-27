"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { type MouseEvent, useState } from "react";

const navLinks = [
    { name: "Services", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isCompressed, setIsCompressed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsCompressed(latest > 60);
    });

    function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
        event.preventDefault();

        const target = document.querySelector<HTMLElement>(href);
        if (!target) return;

        setIsMobileMenuOpen(false);

        const navbarOffset = 92;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
        window.scrollTo({ top, behavior: "smooth" });
        window.history.pushState(null, "", href);
    }

    return (
        <>
            <motion.nav
                className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
                animate={{
                    backgroundColor: isCompressed ? "rgba(7, 7, 6, 0.78)" : "rgba(7, 7, 6, 0)",
                    backdropFilter: isCompressed ? "blur(18px)" : "blur(0px)",
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
                    <Link href="/" className="group flex items-baseline gap-3" aria-label="Noir Haven home">
                        <span className="font-serif text-2xl font-semibold text-[#f7f1e6] md:text-3xl">
                            Noir Haven
                        </span>
                        <span className="hidden h-px w-10 bg-primary/60 transition-all duration-300 group-hover:w-16 sm:block" />
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(event) => handleNavClick(event, link.href)}
                                className="text-sm text-[#d8cec0]/75 transition-colors hover:text-[#f7f1e6]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <button className="px-4 py-2 text-sm text-[#d8cec0]/75 transition-colors hover:text-[#f7f1e6]">
                            Login
                        </button>
                        <button className="group inline-flex items-center gap-2 border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#f7d997]">
                            Request Invitation
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>

                    <button
                        className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#f7f1e6] md:hidden"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[#070706]/95 px-6 py-8 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-serif text-3xl font-semibold text-[#f7f1e6]">Noir Haven</span>
                            <button
                                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#f7f1e6]"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-16 flex flex-col gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.06 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="font-serif text-4xl text-[#f7f1e6]"
                                        onClick={(event) => handleNavClick(event, link.href)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute inset-x-6 bottom-8 grid gap-3">
                            <button className="border border-white/15 px-5 py-4 text-left text-[#f7f1e6]">
                                Login
                            </button>
                            <button className="inline-flex items-center justify-between bg-primary px-5 py-4 font-semibold text-primary-foreground">
                                Request an Invitation
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
