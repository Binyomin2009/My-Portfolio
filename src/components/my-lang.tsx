"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const languages = [
    { name: "Tajik", flag: "🇹🇯" },
    { name: "Russian", flag: "🇷🇺" },
    { name: "English", flag: "EN" },
];

export default function MyLanguages() {
    return (
        <section className="w-full flex flex-col items-center py-16 px-4 bg-background">
            {/* Заголовок */}
            <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Languages I Know
            </h2>

            {/* Сетка карточек */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center gap-6 w-full max-w-5xl">
                {languages.map((lang, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "flex flex-col items-center justify-center gap-4 py-10 px-6 rounded-2xl shadow-lg transition-all duration-300",
                            "hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-purple-400 dark:bg-neutral-900"
                        )}
                    >
                        <span className="text-6xl">{lang.flag}</span>
                        <h3 className="text-2xl font-semibold tracking-wide text-center">
                            {lang.name}
                        </h3>
                    </Card>
                ))}
            </div>
        </section>
    );
}
