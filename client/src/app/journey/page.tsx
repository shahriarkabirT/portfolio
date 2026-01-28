"use client";
import React from "react";
import JourneySection from "@/components/JourneySection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JourneyPage = () => {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <div className="pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-6 text-center">
                        My Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Journey</span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-center text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
                        A chronological gallery of milestones, experiences, and moments that have shaped my professional path in technology and engineering.
                    </p>
                </div>
                <JourneySection fullPage={true} />
            </div>
            <Footer />
        </div>
    );
};

export default JourneyPage;
