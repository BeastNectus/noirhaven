"use client";

import { motion } from "framer-motion";
import { ConciergeBell, CreditCard, Crown, Globe, Plane, Shield } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Global Access",
        description: "Doors opened across private clubs, sold-out dining rooms, cultural calendars, and invitation-only events.",
        icon: Globe,
        image: "/feature_global_access_1771578268171.png",
        highlight: true,
    },
    {
        title: "24/7 Concierge",
        description: "A senior lifestyle desk that remembers preferences, handles friction, and keeps every brief moving.",
        icon: ConciergeBell,
        image: "/feature_concierge_1771578313399.png",
    },
    {
        title: "Elite Status",
        description: "Preferred recognition, room upgrades, late checkout, priority tables, and partner-level handling.",
        icon: Crown,
        image: "/feature_elite_status_1771578362685.png",
    },
    {
        title: "Private Aviation",
        description: "On-demand charter support, routing, ground transfers, catering, and discreet arrival coordination.",
        icon: Plane,
        image: "/feature_aviation_1771578399421.png",
    },
    {
        title: "Secure Payments",
        description: "Encrypted booking flows, private invoicing, and clear settlement for high-value itineraries.",
        icon: Shield,
        image: "/feature_secure_payments_1771578451861.png",
    },
    {
        title: "Black Card",
        description: "A physical membership credential with elevated spending power and private member recognition.",
        icon: CreditCard,
        image: "/feature_black_card_1771578495500.png",
    },
];

export default function Features() {
    return (
        <section id="features" className="bg-[#070706] py-24 text-[#f7f1e6] md:py-32">
            <div className="container mx-auto px-6">
                <div className="grid gap-10 border-b border-primary/15 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-5 flex items-center gap-4 text-sm text-primary">
                            <span className="h-px w-12 bg-primary/70" />
                            Services
                        </p>
                        <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
                            Access shaped by judgment, not volume.
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="max-w-xl text-lg leading-8 text-[#c8bdae] lg:justify-self-end"
                    >
                        Noir Haven combines travel logistics, hospitality relationships, payment discretion, and
                        taste-level curation into one private operating layer.
                    </motion.p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-12">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: index * 0.05 }}
                            className={cn(
                                "group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#11100d]",
                                "rounded-[6px]",
                                service.highlight ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-3"
                            )}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover opacity-[0.42] grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-[0.65] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,7,6,0.94)_0%,rgba(7,7,6,0.68)_50%,rgba(7,7,6,0.18)_100%)]" />
                            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-7 md:p-8">
                                <div className="flex items-center justify-between">
                                    <service.icon className="h-6 w-6 text-primary" />
                                    <span className="font-serif text-3xl text-white/15">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-3xl font-semibold text-[#f7f1e6]">
                                        {service.title}
                                    </h3>
                                    <p className="mt-4 max-w-md text-sm leading-7 text-[#d8cec0] md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
