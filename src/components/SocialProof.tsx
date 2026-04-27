"use client";

import { motion } from "framer-motion";

const partners = [
    "Ritz-Carlton",
    "Four Seasons",
    "Aman",
    "Emirates",
    "Gulfstream",
    "Sotheby's",
    "Vogue",
    "Rolex",
];

export default function SocialProof() {
    return (
        <section className="border-y border-primary/10 bg-[#0c0b09] py-10">
            <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xs text-sm leading-6 text-[#a99f8f]"
                >
                    Preferred access and hospitality intelligence across the world&apos;s most watched destinations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 }}
                    className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4"
                >
                    {partners.map((partner) => (
                        <span
                            key={partner}
                            className="text-sm font-medium text-[#efe5d5]/65 transition-colors hover:text-primary"
                        >
                            {partner}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
