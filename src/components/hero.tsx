import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import me from "../../public/me.jpg"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800 py-16">
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-sm md:text-base uppercase tracking-widest font-light text-gray-500 dark:text-gray-400">
                        Welcome
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        I'm Yusufov Binyomin
                    </h1>
                    <p className="text-lg md:text-xl font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase">
                        Junior Front-end Developer
                    </p>

                    <Link href={"/MY CV.pdf"} download>
                        <Button className="mt-6 md:mt-10 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-blue-500/20 dark:shadow-purple-500/20 px-8 py-5 text-white text-lg rounded-xl flex items-center gap-3">
                            <Download size={20} />
                            Download CV
                        </Button>
                    </Link>
                </div>

                {/* Profile Image */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 dark:shadow-purple-700/10 transition-transform hover:scale-105 duration-500">
                        <Image
                            src={me}
                            alt="Yusufov Binyomin"
                            className="object-cover w-full h-full"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
