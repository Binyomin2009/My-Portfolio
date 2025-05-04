"use client"

import { Card } from "@/components/ui/card"
import { Code, Figma, Github, Layers, Palette, Server, Terminal, Type } from "lucide-react"

export default function SkillsComponent() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML & CSS", icon: <Code className="h-5 w-5 text-orange-500" /> },
        { name: "Sass, Tailwind CSS", icon: <Palette className="h-5 w-5 text-pink-500" /> },
        { name: "JavaScript", icon: <Terminal className="h-5 w-5 text-yellow-500" /> },
        { name: "TypeScript", icon: <Type className="h-5 w-5 text-blue-500" /> },
        { name: "React", icon: <div className="text-sky-500">⚛️</div> },
        { name: "Next.js", icon: <div className="text-black dark:text-white">◼</div> },
      ],
    },
    {
      title: "UI Libraries",
      skills: [
        { name: "Material UI", icon: <div className="text-blue-600">🔷</div> },
        { name: "Ant Design", icon: <div className="text-blue-500">🐜</div> },
        { name: "Shadcn UI", icon: <Layers className="h-5 w-5 text-purple-500" /> },
      ],
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux Toolkit", icon: <div className="text-purple-600">🔄</div> },
        { name: "Zustand", icon: <div className="text-gray-700 dark:text-gray-300">🐻</div> },
        { name: "Jotai", icon: <div className="text-pink-600">⚛️</div> },
      ],
    },
    {
      title: "Data Fetching",
      skills: [
        { name: "RTK Query", icon: <div className="text-purple-600">🔄</div> },
        { name: "React Query", icon: <div className="text-red-500">🔄</div> },
        { name: "Fetch API", icon: <Server className="h-5 w-5 text-indigo-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: <Github className="h-5 w-5 text-orange-500" /> },
        { name: "VS Code", icon: <Code className="h-5 w-5 text-blue-500" /> },
        { name: "Figma", icon: <Figma className="h-5 w-5 text-purple-500" /> },
      ],
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-muted-foreground text-sm">Technologies I work with</p>
        </div>

        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="w-16 h-1 bg-purple-500"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <Card
                  key={skillIndex}
                  className="p-4 flex items-center justify-center flex-col gap-2 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 flex items-center justify-center">{skill.icon}</div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
