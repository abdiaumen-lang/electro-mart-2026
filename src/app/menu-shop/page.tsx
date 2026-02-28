"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { getMenuItems } from "../actions/menu";

// Add a type for the menu item
type MenuItem = {
    id: string;
    category: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    tags: string[];
    prep_time: string;
};

export default function MenuShop() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {        // Fetch menu items on load
        async function fetchMenu() {
            setLoading(true);
            const res = await getMenuItems();
            if (res.data) {
                setMenuItems(res.data);
            }
            setLoading(false);
        }

        fetchMenu();
    }, []);

    // Removed toggleTheme
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            <Navigation isTransparent={false} />

            <header className="pt-32 pb-12 md:pt-40 md:pb-20 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-primary dark:text-white mb-4 font-medium">
                        Taste of Algeria
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light italic font-serif">
                        Authentic flavors, refined presentation. Experience the culinary
                        heritage of Algiers.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-32 bg-white dark:bg-[#1e293b] p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="font-serif text-2xl text-primary dark:text-white mb-6 border-b border-secondary pb-2 inline-block">
                                Menu
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <button className="w-full flex justify-between items-center group text-secondary font-bold">
                                        <span>Starters</span>
                                        <span className="material-symbols-outlined text-sm opacity-100 transition-opacity">
                                            chevron_right
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex justify-between items-center group text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors">
                                        <span>Traditional Mains</span>
                                        <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            chevron_right
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex justify-between items-center group text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors">
                                        <span>Grills &amp; Roasts</span>
                                        <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            chevron_right
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex justify-between items-center group text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors">
                                        <span>Desserts</span>
                                        <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            chevron_right
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex justify-between items-center group text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors">
                                        <span>Beverages</span>
                                        <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            chevron_right
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div className="mt-10 p-4 bg-background-light dark:bg-slate-800 rounded border border-secondary/20">
                                <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center">
                                    "Every dish tells a story of tradition."
                                </p>
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="flex justify-between items-end mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <div>
                                <h2 className="font-serif text-3xl text-gray-900 dark:text-white">
                                    Our Menu
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Discover our culinary creations
                                </p>
                            </div>
                            <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">
                                {loading ? 'Loading...' : `Showing ${menuItems.length} results`}
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        ) : menuItems.length === 0 ? (
                            <div className="text-center py-20 text-gray-500">
                                No menu items found. Please add some to the database!
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {menuItems.map((item) => (
                                    <div key={item.id} className="group bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                                        <div className="relative h-64 overflow-hidden flex-shrink-0">
                                            <img
                                                alt={item.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                src={item.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
                                            />
                                            {item.tags && item.tags.length > 0 && item.tags[0] && (
                                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-wider uppercase">
                                                    {item.tags[0]}
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                                                    {item.name}
                                                </h3>
                                                <span className="font-serif text-lg font-bold text-secondary">
                                                    ${Number(item.price).toFixed(2)}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4">
                                                <span className="text-xs text-gray-400 font-medium">
                                                    {item.prep_time || 'Made to order'}
                                                </span>
                                                <button className="bg-primary text-white hover:bg-secondary px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 flex-shrink-0 w-full sm:w-auto">
                                                    <span>Order Now</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-16 flex justify-center">
                            <nav className="flex items-center space-x-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-sm">
                                        chevron_left
                                    </span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-medium">
                                    1
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    2
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    3
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined text-sm">
                                        chevron_right
                                    </span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white dark:bg-[#1e293b] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        <div className="text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start mb-6">
                                <span className="text-[10px] tracking-[0.2em] font-bold text-primary dark:text-blue-300 uppercase">
                                    Restaurant
                                </span>
                                <span className="font-serif italic text-3xl text-primary dark:text-blue-300 font-bold leading-none">
                                    Le 23
                                </span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                                Experience the warmth of Algerian hospitality with every bite.
                                Authentic recipes passed down through generations.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <Link
                                    className="text-gray-400 hover:text-secondary transition-colors"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined block text-sm">
                                        public
                                    </span>
                                </Link>
                                <Link
                                    className="text-gray-400 hover:text-secondary transition-colors"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined block text-sm">
                                        camera_alt
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="font-serif text-lg text-gray-900 dark:text-white mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                                        href="/our-story"
                                    >
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                                        href="/menu-shop"
                                    >
                                        Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                                        href="/reservations"
                                    >
                                        Private Dining
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors"
                                        href="#"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-right">
                            <h4 className="font-serif text-lg text-gray-900 dark:text-white mb-6">
                                Visit Us
                            </h4>
                            <address className="not-italic text-sm text-gray-600 dark:text-gray-400 space-y-3">
                                <p>23 Boulevard Zighoud Youcef</p>
                                <p>Algiers, Algeria</p>
                                <p className="mt-4">
                                    <a
                                        className="hover:text-secondary transition-colors"
                                        href="tel:+21321000000"
                                    >
                                        +213 21 00 00 00
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="hover:text-secondary transition-colors"
                                        href="mailto:contact@le23.dz"
                                    >
                                        contact@le23.dz
                                    </a>
                                </p>
                            </address>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
                        <p className="text-xs text-gray-400">
                            © 2023 Restaurant Le 23. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
