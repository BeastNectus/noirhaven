"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Application",
        description:
            "Submit a private request. Our committee reviews profile fit, travel patterns, and service expectations before opening a conversation.",
        image: "/process_application_1771578554547.png",
    },
    {
        number: "02",
        title: "Discovery",
        description:
            "A senior lifestyle manager maps preferences, household protocols, preferred hotels, dietary notes, and decision rhythms.",
        image: "/process_discovery_1771578588322.png",
    },
    {
        number: "03",
        title: "Experience",
        description:
            "Your desk begins arranging access, itineraries, introductions, and last-minute solutions with a calm, confidential hand.",
        image: "/process_experience_1771578612892.png",
    },
];

export default function Process() {
    return (
        <section id="process" className="bg-[#f7f1e6] py-24 text-[#14110d] md:py-32">
            <div className="container mx-auto px-6">
                <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-28"
                    >
                        <p className="mb-5 flex items-center gap-4 text-sm text-[#7b5c25]">
                            <span className="h-px w-12 bg-[#7b5c25]" />
                            The Process
                        </p>
                        <h2 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
                            Membership is considered, then tailored.
                        </h2>
                        <p className="mt-7 max-w-md text-lg leading-8 text-[#5f574d]">
                            The intake is intentionally personal. The better we understand how you move,
                            the less visible the service becomes.
                        </p>
                    </motion.div>

                    <div className="grid gap-5">
                        {steps.map((step, index) => (
                            <motion.article
                                key={step.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ delay: index * 0.08 }}
                                className="grid overflow-hidden rounded-[6px] border border-[#d8c8a5] bg-[#fbf7ee] md:grid-cols-[0.8fr_1.2fr]"
                            >
                                <div className="relative min-h-[220px] md:min-h-[300px]">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#14110d]/10" />
                                </div>
                                <div className="flex min-h-[260px] flex-col justify-between p-7 md:p-9">
                                    <span className="font-serif text-6xl text-[#d8b978]/70">{step.number}</span>
                                    <div>
                                        <h3 className="font-serif text-4xl font-semibold">{step.title}</h3>
                                        <p className="mt-4 text-base leading-7 text-[#5f574d]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
