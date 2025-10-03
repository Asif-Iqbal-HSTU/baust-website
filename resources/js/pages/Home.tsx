import React from "react";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import Navbar from "@/custom_components/Navbar";
import GreenButton from "@/custom_components/GreenButton";
import WhiteButton from "@/custom_components/WhiteButton";
import HeroBanner from '@/custom_components/HeroBanner';
import VCMessage from '@/custom_components/VCMessage';
export default function Home() {
    return (
        <>
            <Head title="BAUST - Bangladesh Army University of Science and Technology" />

            <Navbar/>

            <HeroBanner />

            <VCMessage />



            {/* About Section */}
            {/*<section className="py-16 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold text-gray-800">About BAUST</h2>
                <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Bangladesh Army University of Science and Technology (BAUST), established in 2015 in Saidpur Cantonment,
                    is a pioneering higher education institution under the supervision of the Bangladesh Army.
                    Our mission is to produce skilled graduates with strong moral and ethical values, capable of serving
                    the nation and competing globally.
                </p>
                <a href="/about" className="mt-6 inline-block text-green-700 font-semibold hover:underline">
                    Learn More →
                </a>
            </section>*/}

            {/* Programs Section */}
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800">Our Academic Programs</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
                    {["B.Sc. in CSE", "B.Sc. in EEE", "B.Sc. in CE", "BBA", "BA in English"].map((program, i) => (
                        <motion.div key={i}
                                    className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-green-700">{program}</h3>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <a href="/programs" className="text-green-700 font-semibold hover:underline">
                        View All Programs →
                    </a>
                </div>
            </section>

            {/* Notices Section */}
            <section className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-800">Latest Notices & News</h2>
                <div className="mt-10 max-w-4xl mx-auto space-y-4">
                    {[
                        "📢 Admission Circular – Spring 2025",
                        "📢 Midterm Exam Routine – Fall 2025",
                        "📢 Convocation Announcement",
                    ].map((notice, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                            <p className="text-gray-700">{notice}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <a href="/notices" className="text-green-700 font-semibold hover:underline">
                        View All Notices →
                    </a>
                </div>
            </section>

            {/* Why BAUST Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl font-bold text-gray-800">Why Choose BAUST?</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
                    {[
                        { icon: "🎓", title: "Quality Education" },
                        { icon: "🏫", title: "Modern Campus Facilities" },
                        { icon: "🌍", title: "Research & Innovation" },
                        { icon: "💼", title: "Industry & Military Links" },
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                            <div className="text-4xl">{item.icon}</div>
                            <h3 className="mt-3 text-xl font-semibold text-green-700">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
{/*            <section className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-800">Life at BAUST</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
                    {[1,2,3,4,5,6,7,8].map((i) => (
                        <div key={i} className="relative group">
                            <img src={`/images/gallery${i}.jpeg`} alt="Campus" className="rounded-xl shadow-md group-hover:opacity-80 transition"/>
                        </div>
                    ))}
                </div>
            </section>*/}

            {/* Contact Section */}
            <section className="py-16 bg-green-700 text-white text-center">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="mt-4">📍 Saidpur Cantonment, Nilphamari, Bangladesh</p>
                <p>📞 +880-xxx-xxxxxxx</p>
                <p>📧 info@baust.edu.bd</p>
                <div className="mt-6">
                    <iframe
                        title="BAUST Map"
                        src="https://maps.google.com/maps?q=BAUST%20Saidpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full max-w-2xl h-64 mx-auto rounded-xl border-4 border-white shadow-lg"
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 text-center py-6">
                <p>© {new Date().getFullYear()} Bangladesh Army University of Science and Technology (BAUST). All rights reserved.</p>
            </footer>
            </>

    );
}
