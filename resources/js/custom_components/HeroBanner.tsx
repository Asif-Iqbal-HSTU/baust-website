import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

// Sample placeholder images for the slideshow.
// In a real application, replace these with actual university photos.
const SLIDES = [
    {
        src: "/images/campus.jpeg",
        alt: "Modern University Campus View"
    },
    {
        src: "/images/campus.jpeg",
        alt: "Students collaborating on campus"
    },
    {
        src: "/images/campus.jpeg",
        alt: "Exterior view of the academic building"
    },
];

const CARD_DATA = [
    {
        title: "About BAUST",
        description: "Bangladesh Army University of Science and Technology (BAUST), Saidpur is a center of excellence where innovation meets discipline. With a strong academic environment, modern facilities, and a vibrant student community, BAUST nurtures future leaders to excel in both professional and personal spheres.",
        link: "/about-us",
    },
    {
        title: "Admission",
        description: "Join one of the most dynamic universities in Bangladesh. BAUST offers diverse programs, experienced faculty, and a student-focused environment. Start your journey with us today and step confidently toward a bright future.",
        link: "/admission",
    },
    {
        title: "Hall Facilities",
        description: "BAUST provides well-secured and comfortable accommodation with two halls for male students and two for female students. Each hall is designed to ensure a safe, supportive, and vibrant residential life, allowing students to focus on studies while building lifelong friendships.",
        link: "/hall-facilities",
    },
];


// Feature Card Component
const FeatureCard = ({ title, description, link }) => (
    <a
        href={link}
        className="
            flex flex-col items-center justify-between p-10 bg-white
            rounded-xl shadow-xl transition-transform hover:shadow-2xl
            transform hover:scale-[1.02] duration-300 h-full
            border border-gray-100
        "
    >
        <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-base text-gray-600 mb-6">{description}</p>
        </div>

        <div className="mt-auto">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all group-hover:bg-green-700">
                <ArrowRight className="w-5 h-5" />
            </div>
        </div>
    </a>
);
export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slideshow logic using useEffect and setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                (prevSlide + 1) % SLIDES.length
            );
        }, 5000); // Change slide every 5 seconds (5000ms)

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative">
            <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
                {/* 1. SLIDESHOW BACKGROUND */}
                <div className="absolute inset-0">
                    {SLIDES.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.src}
                            alt={slide.alt}
                            className={`
                            absolute inset-0 w-full h-full object-cover
                            transition-opacity duration-1000 ease-in-out
                            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
                        `}
                            // Optional: Add a dark overlay gradient for better text readability
                            style={{ filter: 'brightness(75%)' }}
                        />
                    ))}
                </div>

                {/* 2. CONTENT OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-start max-w-screen-xl mx-auto px-4 md:px-8">
                    {/* 3. TEXT CONTAINER WITH BLUR EFFECT (Glassmorphism) */}
                    <div
                        className="
                        p-6 md:p-10 rounded-xl max-w-full md:max-w-3xl
                        bg-black/35 backdrop-opacity-50 shadow-2xl border border-black/20
                        text-white
                    "
                    >
                        <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
                            Discipline. Knowledge. Morality.
                        </h1>
                        <p className="text-sm md:text-base mb-8 max-w-xl font-light">
                            Committed to academic excellence, moral values, and innovation to shape global citizens and future leaders.
                        </p>

                        {/* 4. CALL-TO-ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="/programs"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-lg text-white bg-green-600 hover:bg-green-700 transition duration-300"
                            >
                                View Program
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                            <a
                                href="/apply"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-sm font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-gray-900 transition duration-300"
                            >
                                Apply for Fall 2025
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE CARDS SECTION (OVERLAPPING) */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative z-30 -mt-10 md:-mt-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {CARD_DATA.map((card, index) => (
                        <FeatureCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );

}
