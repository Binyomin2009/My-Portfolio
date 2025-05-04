import Link from 'next/link'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About me', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1e1e1e] to-[#2e2e2e] text-gray-300 py-8 mt-12 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Левая часть: Логотип */}
        <div className="text-xl font-serif italic text-white">Yusufov Binyomin</div>

        {/* Ссылки */}
        <nav className="flex gap-6 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Нижний текст */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Barre Amou. Все права защищены.
      </div>
    </footer>
  )
}
