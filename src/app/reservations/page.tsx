"use client";

import Link from "next/link";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { createReservation } from "../actions/reservation";

export default function Reservations() {
    const [mode, setMode] = useState<"delivery" | "reservation">("delivery");

    // Form state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; error?: string } | null>(null);
    const [partySize, setPartySize] = useState(2);

    // Removed useEffect and toggleTheme

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setSubmitStatus(null);
        formData.append('party_size', partySize.toString());

        const result = await createReservation(formData);

        if (result.error) {
            setSubmitStatus({ error: result.error });
        } else if (result.success) {
            setSubmitStatus({ success: true });
        }

        setIsSubmitting(false);
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
            <Navigation isTransparent={false} />

            <header className="pt-32 pb-12 md:pt-40 md:pb-20 bg-background-light dark:bg-background-dark text-center px-4">
                <h1 className="font-serif text-5xl md:text-6xl text-primary dark:text-white mb-6 uppercase tracking-widest font-bold">
                    Join Us
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-serif italic mb-10">
                    Experience the art of Algerian dining. Reserve your table or order for delivery.
                </p>
                <div className="inline-flex rounded-md shadow-sm border border-secondary p-1 bg-white dark:bg-[#1e293b]" role="group">
                    <button
                        type="button"
                        onClick={() => setMode("reservation")}
                        className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded ${mode === "reservation" ? "bg-secondary text-white shadow-md transform scale-105" : "text-primary dark:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                    >
                        Table Booking
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("delivery")}
                        className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded ${mode === "delivery" ? "bg-secondary text-white shadow-md transform scale-105" : "text-primary dark:text-secondary hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                    >
                        Delivery
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7">
                        <div className="bg-white dark:bg-[#2d2d2d] shadow-xl rounded-lg p-8 border border-secondary/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                            {submitStatus?.success ? (
                                <div className="text-center py-12 space-y-4">
                                    <span className="material-symbols-outlined text-6xl text-primary">check_circle</span>
                                    <h2 className="font-serif text-3xl text-primary dark:text-white">Reservation Confirmed!</h2>
                                    <p className="text-gray-600 dark:text-gray-400">We look forward to hosting you at Le 23. You will receive an SMS confirmation shortly.</p>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="mt-6 px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors rounded-full text-sm tracking-widest uppercase font-bold"
                                    >
                                        Make Another Booking
                                    </button>
                                </div>
                            ) : (
                                <form action={handleSubmit} className="space-y-6">
                                    {submitStatus?.error && (
                                        <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded text-sm mb-6 text-center">
                                            {submitStatus.error}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary">Select Date</label>
                                            <div className="relative">
                                                <input required name="date" className="w-full bg-transparent border-b border-secondary/50 focus:border-primary dark:focus:border-secondary focus:ring-0 text-[#333333] dark:text-[#e5e5e5] px-0 py-2 placeholder-gray-400" type="date" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary">Select Time</label>
                                            <select name="time" required className="w-full bg-transparent border-b border-secondary/50 focus:border-primary dark:focus:border-secondary focus:ring-0 text-[#333333] dark:text-[#e5e5e5] px-0 py-2 placeholder-gray-400">
                                                <option className="text-black" value="18:00">18:00</option>
                                                <option className="text-black" value="18:30">18:30</option>
                                                <option className="text-black" value="19:00">19:00</option>
                                                <option className="text-black" value="19:30">19:30</option>
                                                <option className="text-black" value="20:00">20:00</option>
                                                <option className="text-black" value="20:30">20:30</option>
                                                <option className="text-black" value="21:00">21:00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary">Party Size</label>
                                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                            {[1, 2, 3, 4, 5, 6].map((size) => (
                                                <button
                                                    key={size}
                                                    type="button"
                                                    onClick={() => setPartySize(size)}
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${partySize === size
                                                        ? 'bg-primary text-white border border-primary shadow-lg'
                                                        : 'border border-secondary text-secondary hover:bg-secondary hover:text-white'
                                                        }`}
                                                >
                                                    {size}{size === 6 ? '+' : ''}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary">Name</label>
                                            <input required name="name" className="w-full bg-transparent border-b border-secondary/50 focus:border-primary dark:focus:border-secondary focus:ring-0 text-[#333333] dark:text-[#e5e5e5] px-0 py-2 placeholder-gray-400 dark:placeholder-gray-600" placeholder="Your full name" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary">Phone</label>
                                            <input required name="phone" className="w-full bg-transparent border-b border-secondary/50 focus:border-primary dark:focus:border-secondary focus:ring-0 text-[#333333] dark:text-[#e5e5e5] px-0 py-2 placeholder-gray-400 dark:placeholder-gray-600" placeholder="+213 XX XX XX XX" type="tel" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-primary dark:text-secondary">Special Requests</label>
                                        <textarea name="special_requests" className="w-full bg-transparent border-b border-secondary/50 focus:border-primary dark:focus:border-secondary focus:ring-0 text-[#333333] dark:text-[#e5e5e5] px-0 py-2 placeholder-gray-400 dark:placeholder-gray-600 resize-none" placeholder="Allergies, special occasion, etc." rows={2}></textarea>
                                    </div>
                                    <div className="pt-4">
                                        <button disabled={isSubmitting} className="w-full bg-secondary hover:bg-yellow-600 disabled:opacity-50 text-white font-serif font-bold text-lg py-4 rounded shadow-lg transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest" type="submit">
                                            {isSubmitting ? 'Booking...' : 'Book Your Table'}
                                        </button>
                                        <p className="text-center text-xs text-gray-500 mt-4 italic">Confirmation will be sent via SMS within 15 minutes.</p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div >
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden group shadow-xl">
                            <img
                                alt="Traditional Algerian Tagine"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChv8K2uFEtnznPSNCK7q0lGB_HDdlolcN8lz5mxoEp4mFrbNxhWl3voJx8pbd1RFQbYcN6OpnT5uAa5SUDJGiv6A-NeMQDc8V9uMlP3NZjGr2gnxd62qgjOCrQz5g6hKC2ESVV9gNMeVpHrhcJQ4vym5OQht6A1ppYoPn9p0e-RjY0bqqMDGqxhc974U7gm-flrvvClt-ZhkYHwmoS4oNuBFdsLf-0ai_PTKw1XIRA6fFSIQy8JDjm0i_dJUekaDL_hKD4TInCXvc"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                <span className="text-secondary font-display text-2xl mb-1">
                                    Chef's Special
                                </span>
                                <h3 className="text-white font-serif text-2xl">
                                    Lamb Tagine with Prunes
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#2d2d2d] border-t-4 border-primary dark:border-secondary p-6 shadow-lg rounded-b-lg">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary dark:text-secondary">
                                        camera_alt
                                    </span>
                                    <h3 className="font-serif font-bold text-xl text-primary dark:text-white">
                                        @RestaurantLe23
                                    </h3>
                                </div>
                                <Link
                                    className="text-xs font-bold text-secondary uppercase tracking-widest hover:text-primary dark:hover:text-white transition-colors"
                                    href="#"
                                >
                                    Follow Us
                                </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Gourmet Pizza"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjXw57dwPy-RIqQ5WoHekCa9j2h6s4C1bW-qPKF2FDLEXchSLpvEtu0FYNAS5rZxvoZx2RHjhPWxDeW0HRFy2zzf-hHl2YcsEOtva8v7oCTEfFPsXrNY7kHLSKWJbBFHa67PmmUoLtQ5QfFXmGLyE5cwwQX5HPckGllrXyM-DzkZNSF7ydhPs5LnDLJtMFp0GiX9Txh3krs4RTQSzn2hiX5be2aqJX4sAi-9E4dhY9EL2mshhUJZyut_QNKY0Vfe16ZBz_aXVo3Hg"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Grilled skewers"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-9rhmLZPrsGgpzOIW_E74HqeQ42heOCe1OuIfpBr70-jVM6Ihj9MA6dcsaGZ9ENSrJXomPKbBfTBEZdxSb_V8_Cl30wTBtc4WcgpaLNgAezU9C4KaCrviQ5qF_zpYchnsZMzWDBSL5bpEdMloaLj9-G34nvBbX5rxCcbT6lzIRvRq0Yyn0x3dvnSSm9fnQMc3Bhvjcip8k_WxmI7YJ9dcBYqp_5Tj48pMeGet-253MW00dtwF4F5rhIme1bqW-ulTmZIXj3xSZSo"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Couscous dish"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8rdLw9U_uOlHlAVmd6f4c36xDFj0_AA2nz8lBoLxqK_MMoJ6sDDp4tO8r9n5cmy8QbZVXVJ30VOq2Zg3wtVp6m6AVtPfy40Mz4kPb8x0BE97WMsOboDkM2QtT7dNV34wxl2oLlfpc4ELdeHAdHGBfQPwbuVSPFcyRI7Psavn746wN-zPBNO6WWJx_nuD_rBiY-WvIswgBzDO8Ok8lEGS35MOcqLMxbgg9cdC3jHPxgwf172u73l56VG5fyqZRCHmCfr1mic9pIwQ"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Fresh Salad"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkSXVxdntaw8LPfZCrBQ6x0rDDT54jzzMJ75oSFQ_d0YgL0rdp7UyQ1RN8PnkWYewJsnVZOP6i2rdW8Ryc6ZwKnWglfuJMe5MwOCq2vM-JjmRjLl_t1UU_KuLF5w5OAMvokgogouYFAKYhMQjGcfhTWxASPQIbthgLj1medbkRDTd1nyKCLTDOY9RajnfBZptFvAQyqwv2X31xOl_RFEHHBE-ukFKTkJudADaUjoBpRn9I5k-1cpNTRqbnNv_0KCF8nWxBxTcbA_k"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Cocktail drink"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEEJoMAfaLZOYqSkEQRsbGJGaMAkJI_de-Kny1LLOwuNs0wg6A4T-N71fKW17dXsifcODrGWVLn1uZEZsEiRhSSbGzmDpbiFlO10BnisuD4OLGYIHCIpXvybk06DJzBLC2EfQSAaN1uOD5FE1iEppAx1sqWyruzt3yWTGzs0syWQDec9AXC5unMBsgsuCHsgMM9IGxpPOJmnwdrPwh1-fkqAa1Xd3VUqzQd8l_K6BO4n_LCJPzi-mJ3blqjLlBC1FKhe859_OJjww"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Appetizer platter"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6LOW7fhl-T28ibmAgU7caQYnPzsYw2b3c_rvnZQ7jYLShAQ8UOE_O8rox0emDKM5LeVsdadKZZjUcWW2x70xdUfhkvkcYIs93eRwSW5rt7yVkiFXfh7BHYHKutXnDCNgWG_B2Z8iXyZJ5bU0JsHv7aQOoH3iVxwN3dwY5mLN7lQJ1dqA1uw4TGJkdQThRwOQZsa8RkN5aEEX3xUFKPOShbNs-Rz5CDpoZJiIGTRiSoKSM8faHP7muNsjgyqtsyvq16iqzOG0OVzs"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Dessert with mint"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhBGXUEI4ep-McKvNT7joiidlJ8r7CwDiL8f8Dox6wlkwYEaNmTIVIj9iBwV7VuUqHkBnUoLudJ0aio1qy2TBK6i9o5BRdq-qCEsTsHD-GKRkdsXhryEwwHnyDXKXpmiZ6ko4FDupLC4QasY3tEZcQM7xLMsLU8MxxRZPBTWx6R6uRwg77EBy5XqavoETdgL7qmEPLQfVGxc60dqcE4VadZAcUA1QoDEc8-KDF4pDJdQTGfEybUC3qU6h4lDUITMRcGtd-ybBNXAU"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Restaurant Interior"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuATqloIBc1wnM3VyZKPjvDtAqjL9_4wY0bHkD-juNRfBTU5H91E0WcbZBGYYnIP6EC1aGOyF0VJJjrM7RmH4OoEzKlsRk_sxEGekbn-71I2PHsUNVrPIF1zqjnxNejFi-ThB3u-AzF0-6LNwp7Rrw7Wa2H0NjxHtuqoicBEtSAh64NywnD0fu0J51tY0ivwzFQOdUS3jfHPQQD_st-zrZL3E7IbfDEkdR-sRTLZn39DGP-wDdZA_J1DV6xDeSswnf_YK1Y_MAMcBuM"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <div className="aspect-square bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Fine Dining Plating"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCV-7NV4vncxyxFvyU51ndqnlnalGYq0seD6K_S4bUebVSJbP6qiq34w5hegTIAQl6cQ8flYQWpJdhGsoFLDVmZNleIFHfKfhi6rNblYgHaqyfqhQBzInAmD8HTeqE5w3vgrtat3MTYj6fNqICvbdbb9M0uK2bnvJgDHSNhq1_MqwxEYFseQhYQE_Z21eANiUzuVzCpuT8LJl0b542zBO9YgO_cCvD_or_kbnzkbKud9DgTuqFnKY2GBx6tJ9PdEbUkX3gOmD5c2A"
                                    />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-secondary p-3 rounded-full text-primary">
                                    <span className="material-symbols-outlined block">
                                        location_on
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-lg">Visit Us</h4>
                                    <p className="text-sm opacity-80 font-light">
                                        123 Rue de la Liberté, Algiers
                                    </p>
                                </div>
                            </div>
                            <button className="text-sm border border-white/30 hover:bg-white hover:text-primary px-4 py-2 rounded transition-colors uppercase tracking-wider">
                                Get Directions
                            </button>
                        </div>
                    </div>
                </div >
            </main >

            <footer className="bg-white dark:bg-[#2d2d2d] border-t border-gray-200 dark:border-gray-800 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="font-serif font-bold text-xl text-primary dark:text-white tracking-widest uppercase block mb-2">
                        Restaurant
                    </span>
                    <span className="font-display text-3xl text-primary dark:text-secondary block mb-6">
                        Le 23
                    </span>
                    <div className="flex justify-center space-x-6 mb-8">
                        <Link
                            className="text-gray-400 hover:text-primary dark:hover:text-secondary"
                            href="#"
                        >
                            <span className="sr-only">Facebook</span>FB
                        </Link>
                        <Link
                            className="text-gray-400 hover:text-primary dark:hover:text-secondary"
                            href="#"
                        >
                            <span className="sr-only">Instagram</span>IG
                        </Link>
                        <Link
                            className="text-gray-400 hover:text-primary dark:hover:text-secondary"
                            href="#"
                        >
                            <span className="sr-only">Twitter</span>TW
                        </Link>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2023 Le 23 Restaurant. All rights reserved.
                    </p>
                </div>
            </footer>
        </div >
    );
}
