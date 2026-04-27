"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#070706] py-24 text-[#f7f1e6] md:py-32">
            <Image
                src="/feature_private_aviation_1771542702528.png"
                alt="Private aviation at dusk"
                fill
                className="object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-[#070706]/70" />
            <div className="absolute inset-y-0 left-0 w-3/4 bg-[linear-gradient(90deg,#070706_0%,rgba(7,7,6,0.78)_58%,rgba(7,7,6,0)_100%)]" />

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <p className="mb-5 flex items-center gap-4 text-sm text-primary">
                        <span className="h-px w-12 bg-primary/70" />
                        Private Intake
                    </p>
                    <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
                        Begin with a quiet conversation.
                    </h2>
                    <p className="mt-7 max-w-xl text-lg leading-8 text-[#c8bdae]">
                        Tell us where access currently stops. Noir Haven will determine whether membership
                        is the right instrument for the way you travel, host, and live.
                    </p>
                    <button className="group mt-10 inline-flex items-center gap-3 bg-primary px-7 py-4 font-semibold text-primary-foreground transition-colors hover:bg-[#f0d393]">
                        Request an Invitation
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
