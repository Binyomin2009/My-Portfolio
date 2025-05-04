"use client";

import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    Linkedin,
    Github,
    Mail,
    Code,
    FileJson,
    Paintbrush,
    Component,
    Layout,
} from "lucide-react";
import Link from "next/link";

const skills = [
    { name: "Next.js", icon: <Code size={18} /> },
    { name: "React", icon: <Component size={18} /> },
    { name: "TypeScript", icon: <FileJson size={18} /> },
    { name: "Tailwind CSS", icon: <Paintbrush size={18} /> },
    { name: "shadcn/ui", icon: <Layout size={18} /> },
];

export default function AboutMe() {
    return (
        <section
            id="about"
            className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 bg-background"
        >
            <Card className="w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                    <Avatar className="w-24 h-24 sm:w-28 sm:h-28 ring-4 ring-primary/50">
                        <AvatarImage src="/avatar.jpg" alt="My photo" />
                        <AvatarFallback className="bg-primary text-white text-2xl font-bold">
                            BY
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                            Yusufov Binyomin
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                            Frontend Developer · React / Next.js
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6 text-center text-black dark:text-gray-200">
                    <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                        <p>
                            Hi! I m Binyomin, a passionate frontend developer focused on building modern and responsive web applications using React, Next.js, and Tailwind CSS.
                        </p>
                        <p>
                            I studied at Softclub where I created a fully functional online store using APIs, JSON-server, and reusable components. My goal is to grow into a fullstack developer and build high-quality digital products.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center pt-2">
                        <Button asChild variant="outline" className="gap-2 text-sm sm:text-base">
                            <Link href="https://www.linkedin.com/in/binyomin-yusufov" target="_blank">
                                <Linkedin size={18} /> LinkedIn
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="gap-2 text-sm sm:text-base">
                            <Link href="https://github.com/BinyominYusufov" target="_blank">
                                <Github size={18} /> GitHub
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="gap-2 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
                        >
                            <Link href="mailto:binyomin.yusufov@example.com">
                                <Mail size={18} /> Contact Me
                            </Link>
                        </Button>
                    </div>

                    {/* Skills (Технологии) */}
                    <div className="pt-8 border-t border-muted">
                        <h3 className="font-semibold text-base sm:text-lg mb-4">Skills</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 px-3 py-1 bg-muted dark:bg-neutral-800 rounded-full text-sm"
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
