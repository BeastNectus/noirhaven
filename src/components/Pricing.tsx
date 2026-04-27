"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Member",
        price: 2500,
        description: "For travelers who want trusted access and dependable personal support.",
        features: ["Global Access", "24/7 Concierge", "Event Invites", "Partner Perks"],
    },
    {
        name: "Noir",
        price: 5000,
        description: "For members who expect elevated handling across travel, events, and aviation.",
        features: ["Everything in Member", "Private Aviation", "Dedicated Liaison", "Black Card", "VVIP Access"],
        popular: true,
    },
    {
        name: "Corporate",
        price: 10000,
        description: "For executive teams that need discreet travel, hospitality, and expense support.",
        features: ["Up to 5 Members", "Corporate Travel", "Expense Management", "Priority Support"],
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="bg-[#070706] py-24 text-[#f7f1e6] md:py-32">
            <div className="container mx-auto px-6">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-5 flex items-center gap-4 text-sm text-primary">
                            <span className="h-px w-12 bg-primary/70" />
                            Membership
                        </p>
                        <h2 className="max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
                            A small circle, priced for attention.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="lg:justify-self-end"
                    >
                        <p className="mb-5 max-w-md text-base leading-7 text-[#c8bdae]">
                            Choose a level of access. Yearly members receive preferred committee review and a reduced annual rate.
                        </p>
                        <div className="inline-flex border border-white/15 bg-[#11100d] p-1">
                            <button
                                onClick={() => setIsYearly(false)}
                                aria-pressed={!isYearly}
                                className={cn(
                                    "px-5 py-3 text-sm transition-colors",
                                    !isYearly ? "bg-primary text-primary-foreground" : "text-[#c8bdae] hover:text-[#f7f1e6]"
                                )}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                aria-pressed={isYearly}
                                className={cn(
                                    "px-5 py-3 text-sm transition-colors",
                                    isYearly ? "bg-primary text-primary-foreground" : "text-[#c8bdae] hover:text-[#f7f1e6]"
                                )}
                            >
                                Yearly
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-14 grid gap-5 lg:grid-cols-3">
                    {plans.map((plan, index) => {
                        const displayPrice = isYearly ? plan.price * 12 * 0.8 : plan.price;

                        return (
                            <motion.article
                                key={plan.name}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ delay: index * 0.07 }}
                                className={cn(
                                    "relative rounded-[6px] border p-7 md:p-8",
                                    plan.popular
                                        ? "border-primary/60 bg-[#16130e]"
                                        : "border-white/10 bg-[#0d0c0a]"
                                )}
                            >
                                {plan.popular && (
                                    <div className="mb-6 inline-flex border border-primary/35 bg-primary/10 px-3 py-2 text-sm text-primary">
                                        Most requested
                                    </div>
                                )}

                                <div className="border-b border-white/10 pb-8">
                                    <h3 className="font-serif text-4xl font-semibold">{plan.name}</h3>
                                    <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#c8bdae]">
                                        {plan.description}
                                    </p>
                                    <div className="mt-7 flex items-end gap-2">
                                        <span className="font-serif text-5xl font-semibold">
                                            ${displayPrice.toLocaleString()}
                                        </span>
                                        <span className="pb-2 text-[#a99f8f]">/{isYearly ? "yr" : "mo"}</span>
                                    </div>
                                </div>

                                <ul className="my-8 grid gap-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#efe5d5]">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={cn(
                                        "group inline-flex w-full items-center justify-between px-5 py-4 font-semibold transition-colors",
                                        plan.popular
                                            ? "bg-primary text-primary-foreground hover:bg-[#f0d393]"
                                            : "border border-white/15 text-[#f7f1e6] hover:border-primary/60 hover:text-primary"
                                    )}
                                >
                                    Start Application
                                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
