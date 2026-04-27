import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const explore = ["Concierge", "Travel", "Events", "Real Estate", "Private Jets"];
const company = ["About", "Careers", "Press", "Contact"];

export default function Footer() {
    return (
        <footer className="border-t border-primary/15 bg-[#070706] text-[#f7f1e6]">
            <div className="mx-auto w-full max-w-[1540px] px-6 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-4">
                        <Link href="/" className="font-serif text-5xl font-semibold">
                            Noir Haven
                        </Link>
                        <p className="mt-7 max-w-sm text-base leading-8 text-[#a99f8f]">
                            Curating the exceptional for the exceptional. Private lifestyle management for members who value discretion, judgment, and time.
                        </p>
                        <div className="mt-9 flex gap-3">
                            {[
                                { icon: Instagram, label: "Instagram" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Linkedin, label: "LinkedIn" },
                            ].map(({ icon: Icon, label }) => (
                                <Link
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#d8cec0] transition-colors hover:border-primary/60 hover:text-primary"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-6">
                        <div>
                            <h4 className="mb-6 text-sm font-semibold text-primary">Explore</h4>
                            <ul className="grid gap-4">
                                {explore.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[#a99f8f] transition-colors hover:text-[#f7f1e6]">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="mb-6 text-sm font-semibold text-primary">Company</h4>
                            <ul className="grid gap-4">
                                {company.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-[#a99f8f] transition-colors hover:text-[#f7f1e6]">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-10">
                        <h4 className="mb-6 text-sm font-semibold text-primary">Private Notes</h4>
                        <p className="mb-6 text-sm leading-7 text-[#a99f8f]">
                            A quiet digest of partner openings, seasonal routes, and member-only invitations.
                        </p>
                        <form className="flex border-b border-white/20 pb-3 focus-within:border-primary">
                            <input
                                type="email"
                                placeholder="Email address"
                                aria-label="Email address"
                                className="min-w-0 flex-1 bg-transparent text-[#f7f1e6] outline-none placeholder:text-[#6e665b]"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="inline-flex h-10 w-10 items-center justify-center text-[#f7f1e6] transition-colors hover:text-primary"
                            >
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-[#7d756b] md:flex-row md:items-center md:justify-between">
                    <div className="grid gap-2">
                        <p>&copy; {new Date().getFullYear()} Noir Haven. All rights reserved.</p>
                        <p>Developed by John Charles Frederick Mamanao.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="transition-colors hover:text-[#f7f1e6]">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="transition-colors hover:text-[#f7f1e6]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
