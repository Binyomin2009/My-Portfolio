"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";


const projects = [
    {
        name: "Интернет-магазин",
        description: "Полностью функциональный интернет-магазин с использованием React и Next.js.",
        link: "https://github.com/Binyomin2009/Internet-store-Eccomerce",
        image: "/images/ecc.png"
    },
    {
        name: "Todo Next.js",
        description: "Простой Todo list на Next.js с возможностью добавления и редактирования постов.",
        link: "https://github.com/Binyomin2009/Todo-SSR",
        image: "/images/todo.png",
    },
    {
        name: "Доставка товара",
        description: "Простой процесс доставки товаров с возможностью отслеживания и быстрой доставки.",
        link: "https://github.com/Binyomin2009/Food-Delivery",
        image: "/images/delivert.png",
    }

];

export default function MyProjects() {
    return (
        <section className="w-full flex flex-col items-center py-16 px-4 bg-background">
            {/* Заголовок */}
            <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Several projects
            </h2>

            {/* Сетка карточек */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "flex flex-col p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300",
                            "hover:ring-2 hover:ring-purple-500 dark:bg-neutral-900"
                        )}
                    >
                        {/* Изображение проекта */}
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                        )}
                        <h3 className="text-2xl font-semibold text-center text-black dark:text-white mb-4">
                            {project.name}
                        </h3>
                        <p className="text-base text-center text-gray-700 dark:text-gray-300 mb-6">
                            {project.description}
                        </p>
                        <Link href={project.link} target="_blank">
                            <button className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                                <Github size={20} /> Посмотреть на GitHub
                            </button>
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    );
}
