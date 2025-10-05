import {
    Leaf,
    Bed,
    Syringe,
    Dumbbell,
    Monitor,
    FlaskConical,
    BookOpen,
    Bus,
    Coffee,
    Landmark
} from 'lucide-react';

export default function Facilities() {
    const GALLERY_ITEMS = [
        { title: "Green Campus", icon: Leaf, image: "/images/green_campus.jpg" },
        { title: "Residential Facility", icon: Bed, image: "https://placehold.co/300x400/0ea5e9/ffffff?text=Dorms" },
        { title: "Medical Facility", icon: Syringe, image: "https://placehold.co/300x200/ef4444/ffffff?text=Clinic" },
        { title: "Indoor & Outdoor Sports", icon: Dumbbell, image: "/images/outdoor_games.jpg" },
        { title: "Digital Classrooms", icon: Monitor, image: "https://placehold.co/400x300/6366f1/ffffff?text=Classroom" },
        { title: "Well Equipped Laboratory", icon: FlaskConical, image: "https://placehold.co/300x300/84cc16/ffffff?text=Lab+Equipment" },
        { title: "Large Collection Library", icon: BookOpen, image: "https://placehold.co/700x500/eab308/ffffff?text=Library+Reading" },
        { title: "Transport Facility", icon: Bus, image: "https://placehold.co/400x200/f97316/ffffff?text=University+Bus" },
        { title: "Cafeteria", icon: Coffee, image: "https://placehold.co/300x400/ec4899/ffffff?text=Cafeteria+Area" },
        { title: "Bank Facility", icon: Landmark, image: "https://placehold.co/400x300/475569/ffffff?text=Bank+Branch" },
    ];

    return (
        <section className="bg-[#fffff] py-16">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Experience Our Facilities
                    </h2>
                    <p className="text-lg text-gray-600">
                        A dynamic environment designed to support every aspect of student life.
                    </p>
                </div>

                {/* Collage Grid Layout */}
                <div
                    className="grid gap-4 auto-rows-[250px]"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    }}
                >
                    {GALLERY_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                relative overflow-hidden group rounded-lg shadow-sm
                                transition-all duration-500 bg-gray-200
                                ${index === 0 && 'sm:col-span-2 sm:row-span-2'}
                                ${index === 3 && 'sm:col-span-2'}
                                ${index === 6 && 'sm:col-span-2'}
                            `}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay with Icon + Title */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-5">
                                <div className="flex flex-col justify-end">
                                    <item.icon className="w-8 h-8 text-blue-300 mb-2" />
                                    <h3 className="text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
