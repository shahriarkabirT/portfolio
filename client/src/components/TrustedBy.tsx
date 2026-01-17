"use client";
import React from "react";
import Image from "next/image";
import { Building2, GraduationCap, Briefcase, Heart, Home, Leaf } from "lucide-react";

const companies = [
    {
        name: "Vidyamayee Govt. Girls Highschool",
        logo: "/vidyamayeelogo.png",
        gradient: "from-rose-500 to-pink-600",
        icon: GraduationCap,
        category: "Education",
    },
    {
        name: "Gonoshasthaya Samaj Vittik Medical College",
        logo: "/gono.jpg",
        gradient: "from-emerald-500 to-teal-600",
        icon: Heart,
        category: "Healthcare",
    },
    {
        name: "Okobiz - IT Firm",
        logo: "/okobiz.png",
        gradient: "from-blue-500 to-indigo-600",
        icon: Briefcase,
        category: "Technology",
    },
    {
        name: "CloudGen",
        logo: "/cloudgen.png",
        gradient: "from-sky-400 to-blue-500",
        icon: Building2,
        category: "Technology",
    },
    {
        name: "Nikki Banana Powder",
        logo: "/nikki.png",
        gradient: "from-yellow-400 to-orange-500",
        icon: Leaf,
        category: "Food & Agriculture",
    },
    {
        name: "All Age Fashion",
        logo: "/all-age.webp",
        gradient: "from-purple-500 to-violet-600",
        icon: Briefcase,
        category: "E-commerce",
    },
    {
        name: "Al Arabia Carbon",
        logo: "/alarabia.png",
        gradient: "from-slate-500 to-gray-700",
        icon: Building2,
        category: "Manufacturing",
    },
    {
        name: "Subaru Academy",
        logo: "/subaru.png",
        gradient: "from-indigo-500 to-purple-600",
        icon: GraduationCap,
        category: "Education",
    },
    {
        name: "Save Life Healthcare",
        logo: "/healthcare.jpeg",
        gradient: "from-green-500 to-emerald-600",
        icon: Heart,
        category: "Healthcare",
    },
    {
        name: "KMS Properties Limited",
        logo: "/kms.png",
        gradient: "from-amber-500 to-orange-600",
        icon: Home,
        category: "Real Estate",
    },
];

const TrustedBy = () => {
    return (
        <section className="py-16 relative overflow-hidden bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted Partners</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                        Institutions & Organizations
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                            I&apos;ve Contributed To
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                        From government institutions to dynamic IT firms, I&apos;ve helped diverse organizations build and scale their digital infrastructure.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
                    {companies.map((company, index) => {
                        const IconComponent = company.icon;
                        return (
                            <div
                                key={index}
                                className="group relative transform hover:scale-[1.03] transition-transform duration-300"
                            >
                                <div className="relative flex flex-col items-center p-5 lg:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                                    {/* Category Badge */}
                                    <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r ${company.gradient} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                                        {company.category}
                                    </div>

                                    {/* Logo Container */}
                                    <div className="relative h-16 w-full flex items-center justify-center mb-4">
                                        {company.logo ? (
                                            <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-200">
                                                <Image
                                                    src={company.logo}
                                                    alt={company.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${company.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
                                                <IconComponent className="w-7 h-7 text-white" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Text */}
                                    <div className="text-center mt-auto">
                                        <p className="text-xs font-medium text-[var(--text-primary)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                                            {company.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">10+</div>
                        <div className="text-sm text-[var(--text-secondary)] mt-1">Organizations</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">6+</div>
                        <div className="text-sm text-[var(--text-secondary)] mt-1">Industries</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">5+</div>
                        <div className="text-sm text-[var(--text-secondary)] mt-1">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TrustedBy;

