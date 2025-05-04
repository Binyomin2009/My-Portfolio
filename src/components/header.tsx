"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <header className="sticky relative top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1e1e1e] to-[#2e2e2e] shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-white text-xl font-serif italic">Yusufov Binyomin</div>
                <nav className="hidden md:flex gap-6 text-sm">
                    <Link
                        href="/"
                        className={cn('text-gray-300 hover:text-white transition-colors', currentPath === '/' && 'font-semibold text-white')}
                    >
                        Home
                    </Link>
                    <Link
                        href="/skils"
                        className={cn('text-gray-300 hover:text-white transition-colors', currentPath === '/skils' && 'font-semibold text-white')}
                    >
                        Skills
                    </Link>
                    <Link
                        href="/projects"
                        className={cn('text-gray-300 hover:text-white transition-colors', currentPath === '/projects' && 'font-semibold text-white')}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className={cn('text-gray-300 hover:text-white transition-colors', currentPath === '/contact' && 'font-semibold text-white')}
                    >
                        Contact
                    </Link>
                </nav>

                <button
                    className="md:hidden text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#1e1e1e] px-4 py-2 space-y-2">
                    <Link
                        href="/"
                        className={cn('block text-gray-300 hover:text-white transition-colors', currentPath === '/' && 'font-semibold text-white')}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/skils"
                        className={cn('block text-gray-300 hover:text-white transition-colors', currentPath === '/skils' && 'font-semibold text-white')}
                        onClick={() => setIsOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        href="/projects"
                        className={cn('block text-gray-300 hover:text-white transition-colors', currentPath === '/projects' && 'font-semibold text-white')}
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className={cn('block text-gray-300 hover:text-white transition-colors', currentPath === '/contact' && 'font-semibold text-white')}
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}
