"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-sans transition-colors duration-500">
      <Navigation isTransparent={false} />

      <header className="parallax-hero flex items-center justify-center relative bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/90 dark:from-black/80 dark:via-black/50 dark:to-background-dark"></div>
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-24 pb-20"
          data-aos="fade-up"
        >
          <div className="mb-6 opacity-30 mt-10">
            <span className="text-primary text-6xl arabic-accent block mb-2">
              مرحبا بكم
            </span>
          </div>
          <h2 className="text-primary text-sm md:text-base uppercase tracking-[0.5em] mb-6 font-bold border-b border-primary/50 inline-block pb-2">
            Welcome to Le 23
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-none tracking-tight">
            Taste the <br />{" "}
            <span className="italic font-light text-primary font-display pr-4">
              Heritage
            </span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed font-serif italic">
            &quot;Where the azure coast of Algiers meets the golden sands of the Sahara.&quot;
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              className="group bg-transparent border border-primary text-secondary dark:text-white hover:bg-primary hover:text-white px-12 py-4 font-serif text-lg rounded-sm transition-all duration-500 relative overflow-hidden"
              href="/menu-shop"
            >
              <span className="relative z-10 uppercase text-sm tracking-widest font-bold">Explore Our Menu</span>
              <div className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">
            keyboard_arrow_down
          </span>
        </div>
      </header>

      <section className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none rotate-12">
          <span className="text-9xl text-secondary dark:text-white arabic-accent select-none">
            التقليد
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border border-primary/30 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 z-0 rounded-full blur-2xl"></div>
            <img
              alt="Chef preparing traditional couscous with elegant lighting"
              className="relative z-10 w-full h-[600px] object-cover shadow-2xl transition-all duration-700 brightness-95 group-hover:brightness-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ44BCuM6Ih5bi0jTQ7SIYDl8agN6ouTsUyfzbd5YhueC4u_nlPMoWZWB7vSWasvH1khy5OJh_TYU7FkUoEiuAUqiSt294Jc92FHq-4tRDAhsot02VX7EQsH-WdiiEwNb0buXWNaMink9qONERgNQzt7nXLiHRjGaIumuLYKgVHw2qDsLMUTfgeOZvoQcVhGkLcbzeOTT1zh05aHdRsh0cxB-CTCEGlwLAKKWdvPAUt4SX4fm9uzbrhqzQfQLjzuByN3pO9rBm13s"
            />
          </div>
          <div className="pl-0 md:pl-10">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span> Our Philosophy
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary dark:text-white mb-8 leading-tight">
              Tradition{" "}
              <span className="text-primary font-display text-6xl md:text-7xl">
                Refined
              </span>
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-gray-500 mb-6 text-xl font-light leading-relaxed font-serif">
              At Le 23, we embark on a culinary journey through the heart of
              Algeria. From the sun-drenched grains of our Couscous to the
              delicate, handcrafted ribbons of Rechta, every dish tells a story
              of generations past.
            </p>
            <p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
              We believe luxury lies in authenticity. Our ingredients are locally
              sourced, our spices hand-blended, and our recipes preserved with
              reverence, served in an atmosphere of Royal Blue elegance.
            </p>
            <Link
              className="inline-flex items-center text-secondary dark:text-primary font-bold uppercase tracking-widest hover:translate-x-2 transition-transform text-sm border-b border-transparent hover:border-primary pb-1"
              href="/our-story"
            >
              Discover Our Story{" "}
              <span className="material-symbols-outlined ml-2 text-lg">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary dark:bg-black relative border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-between items-end">
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-3 block">
              Gastronomy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary dark:text-white">
              Signature Dishes
            </h2>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="w-14 h-14 border border-[#081a36]/20 rounded-full flex items-center justify-center text-secondary dark:text-white hover:bg-[#081a36] hover:text-white transition-all duration-300 group">
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                west
              </span>
            </button>
            <button className="w-14 h-14 border border-[#081a36]/20 rounded-full flex items-center justify-center text-secondary dark:text-white hover:bg-[#081a36] hover:text-white transition-all duration-300 group">
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                east
              </span>
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto hide-scroll pb-16 px-4 space-x-8 max-w-[1920px] mx-auto">
          <div className="min-w-[320px] md:min-w-[420px] card-hover-effect group cursor-pointer bg-background-light dark:bg-background-dark pb-6 rounded-sm shadow-lg overflow-hidden">
            <div className="relative overflow-hidden h-[450px]">
              <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-sm">
                <span className="text-secondary dark:text-white font-serif font-bold text-lg">
                  3800 DA
                </span>
              </div>
              <img
                alt="Royal Couscous served in ceramic plate"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACDBc9dj76eDN01wnuoZsvPofNTqafrnrBSJe7H8wTpMGctKeat32Wy05TBgichyTgNtjdQP7Hdp5QfSajTfvBpFW8fTPquqOyPc87OEXkkclo0clJ-ZqtQSMI12CNGg_qENlbYqHfpLLGNL-sdFAbpWRcgTUIiUhS1es1t3J_xfuYI6fLSFLvCJYOfE_IPQ254VA5K5fDfzEkTQrS9zIg_uvtFV7M1UTKHwQjz0nYdnJqRKo9q-9AXCVU9HRnV3oye_m-5OQU0nw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500"></div>

              { }
              <button
                className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary dark:text-white hover:bg-[#081a36] hover:text-white transition-all duration-300 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                aria-label="Add to cart"
              >
                <span className="material-symbols-outlined font-light">shopping_bag</span>
              </button>
            </div>
            <div className="text-center px-6 pt-10 pb-4 relative">
              <h3 className="text-3xl font-serif text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                Royal Couscous
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic font-light font-serif">
                Lamb shank, seven vegetables, fine semolina
              </p>
            </div>
          </div>
          <div className="min-w-[320px] md:min-w-[420px] card-hover-effect group cursor-pointer bg-background-light dark:bg-background-dark pb-6 rounded-sm shadow-lg overflow-hidden">
            <div className="relative overflow-hidden h-[450px]">
              <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-sm">
                <span className="text-secondary dark:text-primary font-serif font-bold text-lg">
                  3200 DA
                </span>
              </div>
              <img
                alt="Traditional Rechta noodles with chicken and chickpeas"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeuYKZHdMAzcN1DIxoD--tmPKllt0pjmltfaFPciiUYF3AOiiQDB3U4mLctZnuULngU-grfzHTJIn5K-umck20ITJVjkCEmy68GHHh61-nnFNojPEb439uXrdcllg2rE5mNyukK6uHPYHvvV9XHJTt1UKr8UQ7D_Emy_koi46EHZuLWvDbU6pMYSH9X08_qW8qjhAMjjEgC8tB27hZyviFFW4GkvGAff1RJpmd6c1VBGRx4pruMHrpu9hakNsr8GJAyucaXyFGbE8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500"></div>

              <button
                className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary dark:text-white hover:bg-[#081a36] hover:text-white transition-all duration-300 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                aria-label="Add to cart"
              >
                <span className="material-symbols-outlined font-light">shopping_bag</span>
              </button>
            </div>
            <div className="text-center px-6 pt-10 pb-4 relative">
              <h3 className="text-3xl font-serif text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                Rechta Algiers
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic font-light font-serif">
                Handmade noodles, chicken, white sauce, cinnamon
              </p>
            </div>
          </div>
          <div className="min-w-[320px] md:min-w-[420px] card-hover-effect group cursor-pointer bg-background-light dark:bg-background-dark pb-6 rounded-sm shadow-lg overflow-hidden">
            <div className="relative overflow-hidden h-[450px]">
              <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-sm">
                <span className="text-secondary dark:text-primary font-serif font-bold text-lg">
                  3400 DA
                </span>
              </div>
              <img
                alt="Olive Tajine in clay pot"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQzEHrEO0-ZS8aGy8yScA9cSP0ZGDqeG-ucYFLTi1P-2DZmAAKCqiIYf0jn03NbG52oD69l7TpdYsDqYM3rfIfiJAHwbpggJ7_Im4HvfgDzn_5j9-QJPak7v3CKB0_NjAT_9zUDg5olRksNKIOdLIEsswZI-8-bxj6q0HsWg_cJJexFr9hvtnJbQ0XaQEzT95Rq0sbPCQPMiz3G6eh6qxWR0W0Zk5_FxG2CjnDe1n2n86QhliLdxYJyiVgtk-M1ULbrvKR4e5gtso"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500"></div>

              <button
                className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary dark:text-white hover:bg-[#081a36] hover:text-white transition-all duration-300 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                aria-label="Add to cart"
              >
                <span className="material-symbols-outlined font-light">shopping_bag</span>
              </button>
            </div>
            <div className="text-center px-6 pt-10 pb-4 relative">
              <h3 className="text-3xl font-serif text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                Tajine Zitoune
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic font-light font-serif">
                Braised chicken, olives, carrots, preserved lemon
              </p>
            </div>
          </div>
          <div className="min-w-[320px] md:min-w-[420px] card-hover-effect group cursor-pointer bg-background-light dark:bg-background-dark pb-6 rounded-sm shadow-lg overflow-hidden">
            <div className="relative overflow-hidden h-[450px]">
              <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-sm">
                <span className="text-secondary dark:text-primary font-serif font-bold text-lg">
                  3600 DA
                </span>
              </div>
              <img
                alt="Sweet meat dish with almonds"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMig_uf2WYJ5d4FbJJPoNnAF8HAVuZU0OYnPAtoPFpO2NXDf9dCNEMGCIewqBb6zRfbLVp3V9w2ZEOB1ZE2XN9erGljJuhHWU4Lv0DJl2zsaBtz8xAB6UF1O07Gef140A2X5WC3Pd5Fy301i9cN3BrZsksEsViXGgWlsM3n0x-W152lyQMyP1qjfVfQYGmyaGeJurlaXDs_Q__y9R3BCyPs_2uTyoikgVNrtKQQkXYCkeneY0vuOuG2AC7Bz5W2VOiK-7P53Z7SJs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/60 transition-colors duration-500"></div>

              <button
                className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary dark:text-white hover:bg-[#081a36] hover:text-white transition-all duration-300 z-30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                aria-label="Add to cart"
              >
                <span className="material-symbols-outlined font-light">shopping_bag</span>
              </button>
            </div>
            <div className="text-center px-6 pt-10 pb-4 relative">
              <h3 className="text-3xl font-serif text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                Sweet Mthuewem
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm italic font-light font-serif">
                Meatballs, almonds, garlic cream sauce
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-secondary dark:bg-black">
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <img
            alt="Dark restaurant interior background"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb4cO6LH0DbwtkiEVB4EYUw-pWKBwxHlHuOIoPkyBoJ2T4d0CDm55K695rX-mx0qKpGVHT3IBYeIzCH3wuJeh60WBlXLooQ4lp0SIXNrq8OoF4oLCu1la1LyFXRjr_U-P9cCsAQKXMpuR6hm5J2LE-QYNMjyBJGgkrYgYzUC1SJx2kMvaMxP9l86dudlF9kn8N16IebM3BESq4V-RzSEM889tLM0OVBOwADaBAWfyAWCxuyrOkAvNOnHGpPaAIkwqE6S-Bk8QxK0U"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-6">
            star_rate
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-secondary dark:text-white mb-8">
            An Unforgettable Evening
          </h2>
          <div className="flex justify-center mb-8">
            <span className="text-primary text-4xl arabic-accent opacity-50">
              تجربة فريدة
            </span>
          </div>
          <p className="text-gray-500 text-xl font-light mb-12 italic font-serif">
            &quot;Le 23 captures the essence of Algerian soul food and elevates it to
            fine dining heights. A must-visit for connoisseurs.&quot;
          </p>
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-sm border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <form className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-widest text-secondary dark:text-white mb-2 font-bold text-left">
                  Date
                </label>
                <input
                  className="w-full bg-white border border-gray-200 text-secondary dark:text-white rounded-sm px-4 py-3 focus:ring-[#081a36] focus:border-[#081a36] font-serif placeholder-gray-400"
                  type="date"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-widest text-secondary dark:text-white mb-2 font-bold text-left">
                  Guests
                </label>
                <select className="w-full bg-white border border-gray-200 text-secondary dark:text-white rounded-sm px-4 py-3 focus:ring-[#081a36] focus:border-[#081a36] font-serif [&>option]:text-black">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-widest text-secondary dark:text-white mb-2 font-bold text-left">
                  Time
                </label>
                <select className="w-full bg-white border border-gray-200 text-secondary dark:text-white rounded-sm px-4 py-3 focus:ring-[#081a36] focus:border-[#081a36] font-serif [&>option]:text-black">
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                </select>
              </div>
              <div className="flex-none flex items-end">
                <button
                  className="w-full md:w-auto bg-primary hover:bg-[#b8952b] text-white font-bold uppercase tracking-widest px-10 py-3.5 rounded-sm transition-all shadow-lg transform hover:-translate-y-1"
                  type="submit"
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white dark:bg-[#0f172a] border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#081a36] dark:text-white mb-12">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
            <div className="p-8 border border-gray-100 dark:border-gray-800 rounded shadow-sm bg-gray-50 dark:bg-[#1e293b] hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">location_on</span>
              <h3 className="font-serif text-xl text-[#081a36] dark:text-white mb-2">Location</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm">23 Boulevard Zighoud Youcef<br />Algiers, Algeria</p>
            </div>
            <div className="p-8 border border-gray-100 dark:border-gray-800 rounded shadow-sm bg-gray-50 dark:bg-[#1e293b] hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">call</span>
              <h3 className="font-serif text-xl text-[#081a36] dark:text-white mb-2">Phone</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm">+213 21 00 00 23<br />+213 55 00 00 00</p>
            </div>
            <div className="p-8 border border-gray-100 dark:border-gray-800 rounded shadow-sm bg-gray-50 dark:bg-[#1e293b] hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 block">mail</span>
              <h3 className="font-serif text-xl text-[#081a36] dark:text-white mb-2">Email</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm">contact@le23.dz<br />reservations@le23.dz</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background-light dark:bg-background-dark border-t border-primary/20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="text-left group cursor-pointer mb-8">
                <div className="text-xs tracking-[0.3em] font-bold text-secondary dark:text-white uppercase mb-[-2px]">
                  Restaurant
                </div>
                <div className="flex items-baseline">
                  <span className="font-display text-5xl text-secondary dark:text-white mr-2">
                    Le
                  </span>
                  <span className="font-serif text-5xl font-bold text-secondary dark:text-white">
                    23
                  </span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-light text-base leading-relaxed font-serif">
                An ode to Algerian heritage, served with passion and precision
                in the heart of the city.
              </p>
            </div>
            <div className="col-span-1">
              <h4 className="text-secondary dark:text-white uppercase tracking-[0.2em] text-sm font-bold mb-8 border-b border-primary/30 pb-2 inline-block">
                Location
              </h4>
              <address className="not-italic text-gray-500 dark:text-gray-400 font-light text-sm leading-loose">
                23 Boulevard Zirout Youcef
                <br />
                Algiers, 16000
                <br />
                Algeria
              </address>
            </div>
            <div className="col-span-1">
              <h4 className="text-secondary dark:text-white uppercase tracking-[0.2em] text-sm font-bold mb-8 border-b border-primary/30 pb-2 inline-block">
                Contact
              </h4>
              <p className="text-gray-500 dark:text-gray-400 font-light text-sm leading-loose flex flex-col">
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="tel:+21321000023"
                >
                  <span className="material-symbols-outlined text-xs">call</span>{" "}
                  +213 21 00 00 23
                </Link>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="mailto:reservations@le23.dz"
                >
                  <span className="material-symbols-outlined text-xs">email</span>{" "}
                  reservations@le23.dz
                </Link>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  href="mailto:press@le23.dz"
                >
                  <span className="material-symbols-outlined text-xs">
                    newspaper
                  </span>{" "}
                  press@le23.dz
                </Link>
              </p>
            </div>
            <div className="col-span-1">
              <h4 className="text-secondary dark:text-white uppercase tracking-[0.2em] text-sm font-bold mb-8 border-b border-primary/30 pb-2 inline-block">
                Hours
              </h4>
              <div className="text-gray-500 dark:text-gray-400 font-light text-sm leading-loose">
                <span className="flex justify-between border-b border-gray-200 dark:border-gray-800 py-1">
                  <span>Mon-Thu</span> <span>12pm - 11pm</span>
                </span>
                <span className="flex justify-between border-b border-gray-200 dark:border-gray-800 py-1">
                  <span>Fri-Sat</span> <span>12pm - 12am</span>
                </span>
                <span className="flex justify-between py-1 text-primary">
                  <span>Sun</span> <span>Closed</span>
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs font-light mb-4 md:mb-0">
              © 2023 Restaurant Le 23. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                href="#"
              >
                FB
              </Link>
              <Link
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                href="#"
              >
                IG
              </Link>
              <Link
                className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                href="#"
              >
                TR
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
