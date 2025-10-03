import {
    Facebook,
    Youtube,
    Twitter,
    Instagram,
    Phone,
    Mail,
    BookOpen,
    ClipboardList,
    Briefcase,
    Search,
} from "lucide-react";

const TopBar1 = () => {

    // Marquee content component
    const MarqueeText = () => (
        <div className="animate-marquee whitespace-nowrap flex space-x-10">
            <span className="text-gray-900 font-medium">
                📢 Admission for Spring 2025 is now open!
            </span>
            <span className="text-gray-900 font-medium">
                🎓 Convocation will be held on December 12th.
            </span>
            <span className="text-gray-900 font-medium">
                📝 Mid-term exams start from October 20th.
            </span>
            <span className="text-gray-900 font-medium">
                💡 New Research Grants available for faculty members.
            </span>
        </div>
    );

    // Left side (social + contact)
    const socialContactLinks = (
        <>
            <a href="#" className="p-1 hover:text-green-300 transition-colors">
                <Facebook className="w-3 h-3" />
            </a>
            <a href="#" className="p-1 hover:text-green-300 transition-colors">
                <Youtube className="w-3 h-3" />
            </a>
            <a href="#" className="p-1 hover:text-green-300 transition-colors">
                <Twitter className="w-3 h-3" />
            </a>
            <a href="#" className="p-1 hover:text-green-300 transition-colors">
                <Instagram className="w-3 h-3" />
            </a>

            <div className="h-4 w-px bg-white/30 mx-2 hidden sm:block"></div>

            <a
                href="tel:+880222233344"
                className="flex items-center space-x-1 hover:text-green-200 transition-colors whitespace-nowrap"
            >
                <Phone className="w-3 h-3" />
                <span>+880222233344</span>
            </a>
            <a
                href="mailto:info@baust.edu.bd"
                className="flex items-center space-x-1 hover:text-green-200 transition-colors whitespace-nowrap"
            >
                <Mail className="w-3 h-3" />
                <span>info@baust.edu.bd</span>
            </a>
        </>
    );

    // Right side (utility links) - not used in final desktop layout but kept for completeness
    // const utilityLinks = (
    //     <>
    //         <a
    //             href="/ums"
    //             className="flex items-center space-x-1 text-gray-900 hover:text-gray-700 transition-colors"
    //             title="University Management System"
    //         >
    //             <BookOpen className="w-3 h-3" />
    //             <span>UMS</span>
    //         </a>
    //         <a
    //             href="/verify"
    //             className="flex items-center space-x-1 text-gray-900 hover:text-gray-700 transition-colors"
    //             title="Verify Degree"
    //         >
    //             <ClipboardList className="w-3 h-3" />
    //             <span>Verify Degree</span>
    //         </a>
    //         <a
    //             href="/jobs"
    //             className="flex items-center space-x-1 text-gray-900 hover:text-gray-700 transition-colors"
    //             title="Job Opportunities"
    //         >
    //             <Briefcase className="w-3 h-3" />
    //             <span className="relative">
    //       Jobs{" "}
    //                 <span className="absolute -top-2 -right-6 bg-red-500 text-white text-[8px] px-1 rounded-full">
    //         NEW
    //       </span>
    //     </span>
    //         </a>
    //         <button
    //             className="p-1 rounded-full text-gray-900 hover:text-gray-700 transition-colors"
    //             title="Search"
    //         >
    //             <Search className="w-4 h-4" />
    //         </button>
    //     </>
    // );


    return (
        <div className="text-xs relative z-10 shadow-inner">
            {/* ========================= */}
            {/* Desktop (with skew design) */}
            {/* ========================= */}
            <div className="hidden lg:block bg-green-700 text-white relative z-10">
                <div className="max-w-screen-xl mx-auto h-full relative">
                    {/* Right side half-cut skew background (Light Green) */}
                    <div className="absolute top-0 right-0 h-full w-1/2 bg-green-500 transform -skew-x-12 origin-top-right z-0"></div>

                    {/* Row content */}
                    {/* Ensure h-full for the inset-y-0 absolute positioning to work correctly */}
                    <div className="relative z-20 px-4 py-2 flex items-center h-full">
                        {/* Left side: Social/Contact Links (Over Dark Green) */}
                        <div className="flex items-center space-x-4 z-30 relative">
                            {socialContactLinks}
                        </div>

                        {/* Right side: Marquee Container (Over Light Green) */}
                        {/* This absolute container is exactly 50% width and handles the clipping via overflow-hidden */}
                        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden z-20">
                            {/* Inner div to maintain vertical centering and horizontal padding */}
                            <div className="h-full flex items-center px-4">
                                <MarqueeText />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ========================= */}
            {/* Mobile (stacked, no skew) */}
            {/* ========================= */}
            <div className="lg:hidden flex flex-col w-full">
                {/* Dark Green Top (Social/Contact) */}
                <div className="bg-green-700 text-white px-4 py-2">
                    <div className="flex justify-center flex-wrap items-center space-x-4">
                        {socialContactLinks}
                    </div>
                </div>

                {/* Light Green Bottom (Notices scrolling) */}
                {/* Mobile version still needs the overflow-hidden wrapper for clipping */}
                <div className="bg-green-500 text-gray-900 px-4 border-t border-green-400">
                    <div className="overflow-hidden relative w-full h-6">
                        <MarqueeText />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar1;
