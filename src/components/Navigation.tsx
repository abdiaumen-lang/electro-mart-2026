"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation({ isTransparent = true }: { isTransparent?: boolean }) {
    const [isDark, setIsDark] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Initial theme check
        if (document.documentElement.classList.contains("dark")) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setIsDark(true);
        }
    };

    const navClasses = isTransparent
        ? "fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#081a36]/10 transition-all duration-300"
        : "fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-[#081a36]/10 transition-colors duration-300";

    return (
        <>
            <nav className={navClasses}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">

                        {/* Mobile Menu Button - Left */}
                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="text-secondary dark:text-primary hover:text-primary p-2 transition-colors"
                                type="button"
                                aria-label="Open Menu"
                            >
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>

                        {/* Desktop Logo */}
                        <div className="flex-shrink-0 hidden sm:flex flex-1 justify-center items-center absolute left-1/2 transform -translate-x-1/2">
                            <Link href="/" className="text-center group cursor-pointer block">
                                <div className="text-[10px] tracking-[0.3em] font-bold text-[#081a36] uppercase mb-[-5px] group-hover:text-primary transition-colors text-center pl-1">
                                    Restaurant
                                </div>
                                <div className="flex items-baseline justify-center">
                                    <span className="font-display text-4xl text-[#081a36] mr-2">
                                        Le
                                    </span>
                                    <span className="font-serif text-4xl font-bold text-[#081a36]">
                                        23
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Mobile Logo */}
                        <div className="flex-shrink-0 flex items-center justify-center sm:hidden absolute left-1/2 transform -translate-x-1/2">
                            <Link href="/" className="text-center block">
                                <div className="text-[9px] tracking-[0.3em] font-bold text-[#081a36] uppercase mb-[-5px]">
                                    Restaurant
                                </div>
                                <div className="flex items-baseline justify-center">
                                    <span className="font-display text-2xl text-[#081a36] mr-1">
                                        Le
                                    </span>
                                    <span className="font-serif text-2xl font-bold text-[#081a36]">
                                        23
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden sm:flex space-x-6 lg:space-x-10 items-center flex-1">
                            <Link
                                className="relative text-[13px] uppercase tracking-widest text-[#081a36] hover:text-primary transition-colors group font-bold"
                                href="/menu-shop"
                            >
                                Menu
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
                            </Link>
                            <Link
                                className="relative text-[13px] uppercase tracking-widest text-[#081a36] hover:text-primary transition-colors group font-bold"
                                href="/reservations"
                            >
                                Reservations
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
                            </Link>
                            <Link
                                className="relative text-[13px] uppercase tracking-widest text-[#081a36] hover:text-primary transition-colors group font-bold"
                                href="/our-story"
                            >
                                Our Story
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
                            </Link>
                            <Link
                                className="relative text-[13px] uppercase tracking-widest text-[#081a36] hover:text-primary transition-colors group font-bold"
                                href="/#contact"
                            >
                                Contact
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
                            </Link>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden sm:flex items-center space-x-4 lg:space-x-6 flex-1 justify-end">
                            <button
                                className="text-[#081a36] hover:text-primary transition-colors p-1"
                                aria-label="Search"
                            >
                                <span className="material-symbols-outlined font-light">search</span>
                            </button>
                            <Link href="/menu-shop" className="text-[#081a36] hover:text-primary p-1 relative flex items-center transition-colors">
                                <span className="material-symbols-outlined font-light">shopping_bag</span>
                                <span className="absolute top-0 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    0
                                </span>
                            </Link>
                            <Link href="/menu-shop" className="bg-[#081a36] text-white hover:bg-primary px-5 py-2.5 rounded-sm uppercase tracking-widest font-bold text-xs transition-colors shadow-sm cursor-pointer">
                                Order Now
                            </Link>
                            <button
                                onClick={toggleTheme}
                                className="text-[#081a36] hover:text-primary transition-colors p-1"
                                id="theme-toggle"
                            >
                                {isDark ? (
                                    <span className="material-symbols-outlined font-light block">
                                        light_mode
                                    </span>
                                ) : (
                                    <span className="material-symbols-outlined font-light block">
                                        dark_mode
                                    </span>
                                )}
                            </button>

                            {/* Language Selectors Desktop */}
                            <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-4 ml-2">
                                <button className="w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-[10px] font-bold text-[#081a36] hover:bg-primary hover:text-white dark:text-white dark:hover:bg-primary transition-colors flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                                    EN
                                </button>
                                <button className="w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-[10px] font-bold text-gray-400 hover:text-[#081a36] hover:border-[#081a36] dark:hover:text-white dark:hover:border-white transition-colors flex items-center justify-center">
                                    FR
                                </button>
                                <button className="w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-[10px] font-bold text-gray-400 hover:text-[#081a36] hover:border-[#081a36] dark:hover:text-white dark:hover:border-white transition-colors flex items-center justify-center font-arabic">
                                    AR
                                </button>
                            </div>
                        </div>

                        <div className="flex sm:hidden items-center relative gap-4">
                            {/* Mobile Shopping Cart/Purchase button */}
                            <Link href="/menu-shop" className="bg-[#081a36] text-white hover:bg-primary px-4 py-2 rounded-sm uppercase tracking-widest font-bold text-[10px] transition-colors shadow-sm">
                                Order Now
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-background-light dark:bg-background-dark flex flex-col justify-between overflow-y-auto">
                    <div className="flex justify-between items-center p-6 border-b border-primary/20">
                        <div className="flex items-baseline">
                            <span className="font-display text-3xl text-secondary dark:text-primary mr-2">Le</span>
                            <span className="font-serif text-3xl font-bold text-secondary dark:text-white">23</span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-secondary dark:text-primary hover:text-primary transition-colors p-2"
                            aria-label="Close Menu"
                        >
                            <span className="material-symbols-outlined text-3xl">close</span>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center space-y-8 p-8">
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-serif text-secondary dark:text-white uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/our-story"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-serif text-secondary dark:text-white uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/menu-shop"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-serif text-secondary dark:text-white uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            Menu & Shop
                        </Link>
                        <Link
                            href="/reservations"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-serif text-secondary dark:text-white uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            Reservations
                        </Link>

                        <button
                            onClick={() => {
                                toggleTheme();
                            }}
                            className="mt-8 flex items-center gap-3 text-lg font-serif text-gray-500 hover:text-secondary dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-full px-6 py-3 transition-colors"
                        >
                            {isDark ? (
                                <>
                                    <span className="material-symbols-outlined">light_mode</span>
                                    Switch to Light Mode
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">dark_mode</span>
                                    Switch to Dark Mode
                                </>
                            )}
                        </button>

                        {/* Language Selectors Mobile */}
                        <div className="mt-8 flex items-center justify-center gap-4 w-full">
                            <button className="flex-1 py-3 rounded border border-primary bg-primary text-white text-xs font-bold transition-colors text-center">
                                English
                            </button>
                            <button className="flex-1 py-3 rounded border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-secondary dark:text-gray-400 dark:hover:text-white transition-colors text-xs font-bold text-center">
                                Français
                            </button>
                            <button className="flex-1 py-3 rounded border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-secondary dark:text-gray-400 dark:hover:text-white transition-colors text-xs font-bold font-arabic text-center">
                                العربية
                            </button>
                        </div>
                    </div>

                    <div className="p-8 pb-12 w-full text-center bg-gray-50 dark:bg-[#1a1a1a]">
                        <Link
                            href="/menu-shop"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full inline-block bg-primary hover:bg-[#b8952b] text-white font-serif px-8 py-4 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:-translate-y-0.5"
                        >
                            <span className="flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">shopping_cart_checkout</span>
                                Order Now
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
