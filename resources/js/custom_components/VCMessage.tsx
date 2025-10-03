import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, ChevronLeft, Calendar } from 'lucide-react';
const EVENT_SLIDES = [
    {
        id: 1,
        image: "/images/1.jpeg",
        title: "5th Annual Convocation Ceremony",
        date: "December 12, 2025",
    },
    {
        id: 2,
        image: "/images/2.jpeg",
        title: "Spring Cultural Festival & Gala",
        date: "February 28, 2026",
    },
    {
        id: 3,
        image: "/images/3.jpg",
        title: "National Research and Innovation Expo",
        date: "May 15, 2026",
    },
];
export default function VCMessage() {
    const [currentEvent, setCurrentEvent] = useState(0);
    const totalEvents = EVENT_SLIDES.length;

    const nextEvent = () => {
        setCurrentEvent((prev) => (prev + 1) % totalEvents);
    };

    const prevEvent = () => {
        setCurrentEvent((prev) => (prev - 1 + totalEvents) % totalEvents);
    };

    // ✅ Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEvent((prev) => (prev + 1) % totalEvents);
        }, 5000); // 5000ms = 5 seconds per slide

        return () => clearInterval(interval); // cleanup on unmount
    }, [totalEvents]);

    return (
        <section className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:divide-x divide-gray-200">
                {/* Left Column: VC's Message */}
                <div className="lg:pr-15">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 inline-block pb-1">
                        Honourable Vice Chancellor's Message
                    </h2>

                    <div className="text-gray-700 text-justify">
                        {/* VC Image with float */}
                        <img
                            src="/images/VC_Sir.jpeg"
                            alt="Br. Gen Mohammad Mobarak Hossain Majumder, psc"
                            className="w-[120px] sm:w-[150px] h-auto object-cover rounded-lg shadow-lg float-left mr-4 mb-2"
                        />

                        {/* Message Content */}
                        <p className="mb-4 text-base">
                            It is my great pleasure to welcome you to the Bangladesh Army University of Science and Technology (BAUST), Saidpur.
                            At BAUST, we are committed to providing world-class education in an environment that fosters creativity, discipline, and innovation.
                            Our mission is to prepare students with the knowledge, skills, and values they need to contribute meaningfully to society
                            and excel in their chosen careers. I invite you to explore our vibrant academic community, where talented faculty members, state-of-the-art facilities,
                            and an inspiring campus life come together to shape the leaders of tomorrow. Together, we strive to uphold academic
                            excellence and integrity while nurturing the holistic growth of our students.
                        </p>

                        {/* Signature */}
                        <p className="font-semibold text-gray-900 mt-2 text-lg clear-left">
                            Brig Gen Mohammad Mobarak Hossain Majumder, psc <br /> Vice Chancellor, BAUST
                        </p>
                    </div>
                </div>


                {/* Right Column: Important Events Slider */}
                <div className="lg:pl-10">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 inline-block pb-1">
                        Important Events
                    </h2>

                    <div className="relative w-full overflow-hidden rounded-xl shadow-lg group">
                        {/* Event Image */}
                        <img
                            src={EVENT_SLIDES[currentEvent].image}
                            alt={EVENT_SLIDES[currentEvent].title}
                            className="w-full h-72 object-cover transition-transform duration-500"
                        />

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent text-white">
                            <h3 className="text-xl font-semibold">{EVENT_SLIDES[currentEvent].title}</h3>
                            <p className="text-sm flex items-center space-x-1 mt-1">
                                <Calendar className="w-4 h-4" />
                                <span>{EVENT_SLIDES[currentEvent].date}</span>
                            </p>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevEvent}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 ml-2 bg-black/50 hover:bg-black/75 text-white rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                            aria-label="Previous event"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextEvent}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 mr-2 bg-black/50 hover:bg-black/75 text-white rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                            aria-label="Next event"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots/Indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                        {EVENT_SLIDES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentEvent(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentEvent ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to event ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
