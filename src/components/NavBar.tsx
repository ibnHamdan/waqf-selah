import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export function NavBar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    const navLinks = [
        { name: 'الرئيسية', to: '/' },
        { name: 'عن الوقف', to: '/about' },
        { name: 'المشاريع', to: '/projects' },
        { name: 'تواصل معنا', to: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 glass border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo & Brand */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                            {/* <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg> */}
                            <img src="/waqf-selah/1.png" />
                        </div>
                        <span className="font-extrabold text-xl text-primary dark:text-white hidden sm:block tracking-tight">وقف البر والصلة</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex space-x-8 space-x-reverse items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-bold transition text-sm lg:text-base"
                                activeProps={{ className: 'text-primary dark:text-primary border-b-2 border-primary' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition transform hover:rotate-12"
                        >
                            {isDark ? (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                            )}
                        </button>
                        <Link
                            to="/projects"
                            className="hidden sm:inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-primary hover:bg-teal-700 transform hover:-translate-y-0.5 transition active:scale-95"
                        >
                            تبرع الآن
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
