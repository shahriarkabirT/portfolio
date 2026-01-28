"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, Camera, Video, MapPin, Calendar } from "lucide-react";
import VideoModal from "./VideoModal";

interface JourneyItem {
    id: number;
    type: "image" | "video";
    src: string;
    title: string;
    description: string;
    location?: string;
    date?: string;
}

const journeyItems: JourneyItem[] = [
    {
        id: 1,
        type: "image",
        src: "/journey/graduation_iubat.jpg",
        title: "B.Sc. in CSE Graduation",
        description: "Successfully graduated from IUBAT with a Bachelor of Science in Computer Science and Engineering. A significant academic milestone marking the commencement of my professional career.",
        location: "IUBAT, Dhaka",
        date: "2024"
    },
    {
        id: 2,
        type: "image",
        src: "/journey/alphanet_withlogo.jpg",
        title: "CloudGen & Alpha Net Strategic Meet",
        description: "CloudGen delegates visited the headquarters of our sister concern, Alpha Net. This engagement reinforced our shared technological vision and strengthened organizational synergies.",
        location: "Alpha Net HQ, Dhaka",
        date: "Jan 2025"
    },
    {
        id: 3,
        type: "image",
        src: "/journey/alphanet_meeting_room.jpeg",
        title: "Corporate Engagement at Alpha Net",
        description: "Participated in a formal gathering and dinner at Alpha Net's office. The event facilitated cross-team collaboration and professional networking within the corporate ecosystem.",
        location: "Alpha Net HQ, Dhaka",
        date: "Jan 2025"
    },
    {
        id: 4,
        type: "image",
        src: "/journey/placeholder1.jpg", // Users will replace these
        title: "Project Milestone",
        description: "Celebrating the successful launch of a major healthcare portal.",
        location: "Dhaka, Bangladesh",
        date: "Jan 2025"
    },
    {
        id: 5,
        type: "video",
        src: "/journey/placeholder_video.mp4", // Mock video path
        title: "Speaking at Tech Event",
        description: "Sharing insights about modern full-stack architecture.",
        location: "Mymensingh",
        date: "Dec 2024"
    },
    {
        id: 6,
        type: "image",
        src: "/journey/placeholder2.jpg",
        title: "Team Collaboration",
        description: "Working deeply with the development team at Okobiz.",
        location: "Office",
        date: "Nov 2024"
    },
    // Add more as needed
];

export default function JourneySection({ fullPage = false }: { fullPage?: boolean }) {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const displayItems = fullPage ? journeyItems : journeyItems.slice(0, 3);

    return (
        <section id="journey" className={`bg-[var(--background)] ${fullPage ? "min-h-screen py-16" : "pb-16 pt-0"}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {!fullPage && (
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Professional Journey</span>
                        </div>

                        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                            My{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                Journey
                            </span>
                        </h2> */}

                        <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
                            Moments from my professional life, captured and shared.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Media Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                {item.type === "image" ? (
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full relative cursor-pointer" onClick={() => setSelectedVideo(item.src)}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-8 h-8 text-white fill-white" />
                                            </div>
                                        </div>
                                        {/* Fallback image or thumbnail could go here */}
                                        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                            <Video className="w-12 h-12 text-[var(--text-secondary)] opacity-20" />
                                        </div>
                                    </div>
                                )}

                                {/* Overlay Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-full border border-white/10 flex items-center gap-1.5">
                                        {item.type === "image" ? <Camera className="w-3 h-3" /> : <Video className="w-3 h-3" />}
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                                    {item.date && (
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {item.date}
                                        </span>
                                    )}
                                    {item.location && (
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {item.location}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2 italic">
                                    &quot;{item.description}&quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {!fullPage && (
                    <div className="mt-16 text-center">
                        <a
                            href="/journey"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--text-primary)] hover:text-blue-600 transition-colors group"
                        >
                            See All Stories
                            <div className="w-8 h-[2px] bg-blue-600 scale-x-50 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    </div>
                )}
            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoUrl={selectedVideo || ""}
            />
        </section>
    );
}
