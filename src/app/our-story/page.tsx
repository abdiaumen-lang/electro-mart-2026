"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function OurStory() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
        .gold-accent {
            background: linear-gradient(45deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        .pattern-overlay {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2311d483' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      ` }} />
            <Navigation isTransparent={false} />

            <main className="pt-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pattern-overlay z-0 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="inline-block relative">
                            <span className="text-secondary font-display text-3xl lg:text-4xl block mb-2">
                                Heritage &amp; Passion
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-primary dark:text-white mb-6">
                                Our Story
                            </h1>
                            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                        </div>
                        <p className="mt-8 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            A journey through taste, memory, and the vibrant soul of Algeria,
                            served on a plate in the heart of the city.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 border-2 border-primary dark:border-primary/50 transform translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
                            <div className="absolute -inset-4 border border-secondary/30 rounded-sm transform -rotate-1 z-0"></div>
                            <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[4/5] z-10">
                                <img
                                    alt="Traditional warm kitchen scene with hands preparing dough on a wooden table"
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105 filter sepia-[0.2]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2hlN7SkUIW3dF2r1RpRr1zcsie0OSPLIhfc7-0W5xjJ1DzM6RxtF4ErKWkkOpp8Ed9LJNXbFpjLu4Mcgq6_evBkmqWVvAZyFkuFDV-9FFUDxMUW41wktcXDRvVJFsi5ywHtcbSpIEIUNYsfhLj5zSYYQpmN01bB0kPJilE8wvLkkzt5RZ-13vYWNu54EHUmm0ozmHOUsAC6VU3A42ikJdij7zdG9amL31EwI5Q3qjyI3MfZ0JccWvhX8pBDmNK4R61giXINJzHvA"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="block font-display text-2xl text-secondary mb-1">
                                        Since 1985
                                    </span>
                                    <span className="uppercase tracking-widest text-xs font-bold opacity-90">
                                        The Art of Traditional Cooking
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 bg-background-light dark:bg-background-dark p-4 rounded-full shadow-lg border border-secondary/20 z-20 w-24 h-24 flex items-center justify-center flex-col animate-bounce-slow">
                                <span className="text-primary font-bold text-2xl block">23</span>
                                <span className="text-[0.6rem] uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center leading-tight">
                                    Secret
                                    <br />
                                    Spices
                                </span>
                            </div>
                        </div>
                        <div className="lg:pl-8 space-y-8">
                            <div className="border-l-4 border-secondary pl-6 py-2">
                                <h2 className="text-3xl lg:text-4xl font-serif text-slate-800 dark:text-slate-100 mb-2">
                                    From Algiers with{" "}
                                    <span className="italic text-primary font-serif">Love</span>
                                </h2>
                            </div>
                            <div className="prose prose-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                                    It began in a small, sun-drenched kitchen in the Casbah of
                                    Algiers. Here, amidst the aroma of roasting cumin and simmering
                                    chorba, the seeds of{" "}
                                    <strong className="text-primary font-medium">Le 23</strong> were
                                    sown. Not in a business plan, but in a grandmother&apos;s tattered
                                    notebook, filled with recipes passed down like precious
                                    heirlooms.
                                </p>
                                <p>
                                    We believe that food is more than sustenance; it is a
                                    storyteller. Every tagine we serve carries the whisper of olive
                                    groves, the heat of the Sahara, and the gentle breeze of the
                                    Mediterranean. Our chefs honor these traditions, using
                                    techniques that have remained unchanged for centuries.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                <div className="flex items-start space-x-3">
                                    <span className="material-symbols-outlined text-primary text-2xl mt-1">
                                        eco
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-lg text-slate-800 dark:text-white mb-1">
                                            Authentic Ingredients
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            Sourced directly from local farmers and Algerian markets.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="material-symbols-outlined text-primary text-2xl mt-1">
                                        restaurant
                                    </span>
                                    <div>
                                        <h3 className="font-serif text-lg text-slate-800 dark:text-white mb-1">
                                            Generational Recipes
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            Preserved secrets from our family archives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                                <blockquote className="italic text-slate-500 dark:text-slate-400 font-serif text-lg">
                                    &quot;To dine at Le 23 is to be welcomed into our home. We don&apos;t just
                                    serve customers; we host guests.&quot;
                                </blockquote>
                                <div className="mt-4 flex items-center">
                                    <img
                                        alt="Chef Portrait"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABnkehHjqX-P3dCKH6MKEbDcxCj8cPci7tBUSpvUkrnLbwTZ0tz1RIeEW6iIgt-J4oWYzCCFmdsokFhmBegIkAMDBmB0M-YBoIqO-Zekdi0qYve-7cbwgW6i7bkK7GS1aItt4bloF3mrVF-R6RaSCSZXHOneiWAg92bO6rS7--UHYLbD3Hxhp25uehuEIJtC1BQPlVr78zuNmgH3mPGSw6n0pL2IKCQxPMZwH5J_U7oqUtk7rHOKFLC48d0VLl5aNWFaGHhbE08rs"
                                    />
                                    <div className="ml-3">
                                        <span className="block text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                                            Amine &amp; Sarah
                                        </span>
                                        <span className="block text-xs text-primary font-medium">
                                            Founders
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link href="/menu-shop">
                                    <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-slate-900 transition-all duration-300 px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold">
                                        Explore Our Menu
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 mb-16 relative h-64 rounded-sm overflow-hidden flex items-center justify-center">
                        <img
                            alt="Abstract close up of spices and textures"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA56VRIMMI0GF-sR0Zu9KvHnT61qeZywPhAZVWS1X-SxihgOwt9td4_orYquC7VBkKN7NoGFotQ0qAPREn_kULsdRm9tL-khbRCnPxYkt0lC0-I0eL7VsO4ndlog9PsiASn2uqQ7JnrQ1oFkaFjNbKXAxWaXH-APXkdkV42zKAOIPpGLbrbNJIpfLeUplElf4-seVRWrfNHWWdU8VwgoB4Ugn6uAqTWTXcecfahnfSkTCia2AyqVgsym4oGAXgD6qTPJ70wCsTbBTU"
                        />
                        <div className="relative z-10 text-center px-4">
                            <span className="material-symbols-outlined text-secondary text-5xl mb-4">
                                star
                            </span>
                            <h3 className="text-3xl md:text-4xl font-serif text-white italic mb-2">
                                &quot;A Culinary Masterpiece&quot;
                            </h3>
                            <p className="text-slate-300 uppercase tracking-widest text-xs font-bold">
                                — The Gastronomy Review
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-primary text-white py-12 border-t-4 border-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h4 className="font-display text-2xl mb-4">Le 23</h4>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Experience the timeless elegance of Algerian cuisine. Where every
                            dish tells a story.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-4 mb-4">
                            <Link
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">public</span>
                            </Link>
                            <Link
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    camera_alt
                                </span>
                            </Link>
                        </div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">
                            © 2023 Le 23 Restaurant
                        </p>
                    </div>
                    <div className="md:text-right">
                        <h4 className="font-display text-xl mb-4">Contact</h4>
                        <p className="text-slate-300 text-sm mb-1">123 Rue de la Liberté</p>
                        <p className="text-slate-300 text-sm mb-1">Algiers, Algeria</p>
                        <p className="text-secondary text-sm mt-2 font-bold">
                            +213 21 23 45 67
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
