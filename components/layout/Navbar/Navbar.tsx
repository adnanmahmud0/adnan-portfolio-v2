'use client';


import Logo from './Logo';
import MenuItems from './MenuItems';
import { FiMenu, FiX } from 'react-icons/fi';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Logo />

                    <div className="flex items-center lg:order-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded bg-gray-200 dark:bg-gray-700"
                        >
                            {theme === 'dark' ? '🌞' : '🌙'}
                        </button>
                        <InteractiveHoverButton>Download CV</InteractiveHoverButton>


                        {/* Mobile Menu Toggle */}
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            aria-controls="mobile-menu-2"
                            aria-expanded={isOpen}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Toggle menu</span>
                            {isOpen ? (
                                <FiX className="w-6 h-6" />
                            ) : (
                                <FiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Responsive Menu */}
                    <div
                        className={`${isOpen ? 'flex' : 'hidden'
                            } flex-col lg:flex lg:flex-row lg:space-x-8 lg:items-center w-full lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`}
                        id="mobile-menu-2"
                    >
                        <MenuItems />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
