"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Image from "next/image";
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
    },
    {
        name: "Todo-RTK-Query",
        description: "Приложение для управления задачами с использованием Redux Toolkit Query для работы с API.",
        link: "https://github.com/Binyomin2009/Todo-RTK-Query",
        image: "/images/rtkq.png",
    },
    {
        name: "Todo Next.js",
        description: "Приложение для управления задачами, созданное с использованием Next.js и современных React-технологий.",
        link: "https://github.com/Binyomin2009/todoNext.js",
        image: "/images/nextJs.png",
    },
    {
        name: "Todo SSR",
        description: "Приложение для управления задачами с серверной генерацией (SSR) на базе Next.js.",
        link: "https://github.com/Binyomin2009/Todo-SSR",
        image: "/images/SSR.png",
    },
    {
        name: "Margiela service",
        description: "Сервис для бронирования и обслуживания клиентов с использованием современных веб-технологий.",
        link: "https://github.com/Binyomin2009/MARGIELA-SERVICE",
        image: "/images/merg.png",
    },
    {
        name: "Lasting Memories",
        description: "Интерактивный сайт с возможностью хранения и отображения воспоминаний, реализованный с помощью Next.js и Tailwind CSS.",
        link: "https://github.com/Binyomin2009/Lasting-Memories",
        image: "/images/image.png",
    }
];

export default function MyProjects() {
    return (
        <section className="w-full flex flex-col items-center py-20 px-4 bg-background">
            {/* Заголовок */}
            <h2 className="text-5xl font-bold mb-14 text-center tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
                Several Projects
            </h2>

            {/* Сетка карточек */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "group relative overflow-hidden flex flex-col bg-white dark:bg-neutral-900 p-6 rounded-3xl shadow-xl transition-all duration-300",
                            "hover:scale-[1.03] hover:shadow-2xl hover:ring-2 hover:ring-purple-500"
                        )}
                    >
                        {/* Изображение проекта */}
                        {project.image && (
                            <div className="relative mb-5">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        )}
                        <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                            {project.name}
                        </h3>
                        <p className="text-base text-center text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {project.description}
                        </p>
                        <Link href={project.link} target="_blank">
                            <button className="w-full flex justify-center items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors shadow-md">
                                <Github size={20} /> View on GitHub
                            </button>
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    );
}
