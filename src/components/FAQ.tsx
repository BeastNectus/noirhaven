"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What distinguishes Noir Haven from other concierge services?",
        answer: "Our network is strictly invitation-only and capped at 500 members globally, allowing each request to receive senior attention instead of call-center handling.",
    },
    {
        question: "How do I apply for membership?",
        answer: "Prospective members may be nominated by an existing member or apply through the waiting list for committee review.",
    },
    {
        question: "Are the benefits transferable?",
        answer: "Membership benefits extend to the primary member and one spouse or partner. Corporate plans cover up to five designated executives.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "Memberships are annual commitments. Early termination does not warrant a refund, but benefits remain active until the term ends.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-[#0c0b09] py-24 text-[#f7f1e6] md:py-32">
            <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-5 flex items-center gap-4 text-sm text-primary">
                        <span className="h-px w-12 bg-primary/70" />
                        Questions
                    </p>
                    <h2 className="font-serif text-5xl font-semibold leading-tight md:text-6xl">
                        Designed to be private before it is convenient.
                    </h2>
                </motion.div>

                <div className="border-t border-primary/20">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const contentId = `faq-${index}`;

                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border-b border-primary/20"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                >
                                    <span className="text-xl font-medium text-[#efe5d5]">{faq.question}</span>
                                    <span className="shrink-0 text-primary">
                                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={contentId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="max-w-2xl pb-7 text-base leading-8 text-[#c8bdae]">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
