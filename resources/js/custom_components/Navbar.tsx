import React, { useState, useEffect, useRef } from "react";
// NOTE: Assuming Link and usePage are available from @inertiajs/react or similar routing solution
// For a standalone example, we'll use placeholder definitions.
import GreenButton from '@/custom_components/GreenButton';
import TopBar1 from '@/custom_components/TopBar1';
const Link = ({ href, children, className, onClick }) => (
    <a href={href} className={className} onClick={onClick}>
        {children}
    </a>
);
const usePage = () => ({ url: "/" }); // Placeholder for current page URL

import { ChevronDown, Menu, X, Mail, Phone, Search, ClipboardList, Briefcase, BookOpen, Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "About",
        children: [
            { name: "Overview", href: "/about" },
            { name: "Administration", href: "/administration" },
            {
                name: "Academics",
                children: [
                    { name: "Faculties", href: "/faculties" },
                    { name: "Departments", href: "/departments" },
                    { name: "Programs", href: "/programs" },
                ],
            },
        ],
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
];

// --- Utility Functions ---
/**
 * Generates a unique path key for nested items (e.g., "About-Academics").
 */
const generateKey = (item, parentPath = "") => {
    return parentPath ? `${parentPath}-${item.name}` : item.name;
};

/**
 * Recursively extracts all keys for items at the current level, used to close siblings.
 */
const getSiblingKeys = (items, parentPath = "") => {
    return items.map(item => generateKey(item, parentPath));
};


// --- Main Component (Contains TopBar and Main Nav) ---
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const { url } = usePage();
    const navbarRef = useRef(null);

    const isActive = (href) => href && url === href;

    // Reset and Outside Click logic (unchanged)
    useEffect(() => {
        setOpenDropdowns({});
    }, [mobileOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!mobileOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenDropdowns({});
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileOpen]);


    const toggleDropdown = (key, siblingKeys) => {
        setOpenDropdowns((prev) => {
            const isCurrentlyOpen = prev[key];
            const newState = { ...prev };

            if (isCurrentlyOpen) {
                newState[key] = false;
            } else {
                newState[key] = true;

                // Close all siblings at this level
                siblingKeys.forEach(siblingKey => {
                    if (siblingKey !== key) {
                        newState[siblingKey] = false;
                    }
                });
            }
            return newState;
        });
    };

    const renderNavItem = (item, siblingKeys = [], parentPath = "", level = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const active = isActive(item.href);
        const itemKey = generateKey(item, parentPath);
        const isOpen = openDropdowns[itemKey];

        const nextLevelSiblingKeys = hasChildren ? getSiblingKeys(item.children, itemKey) : [];
        const nextParentPath = itemKey;
        const nextLevel = level + 1;

        // Adjusted classes for black text on white background, using green accent
        const baseLinkClasses = `block py-2 px-3 rounded-sm transition-colors duration-150 ${
            active
                ? "text-green-600 font-bold dark:bg-gray-200 md:bg-transparent md:dark:bg-transparent" // Active: Green bold text
                : "text-gray-800 dark:text-gray-200" // Default: Dark gray text (black writings)
        } hover:bg-green-50 md:hover:bg-transparent md:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-green-400 md:dark:hover:bg-transparent md:dark:hover:text-green-400`;

        const desktopDropdownClasses = `absolute bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 min-w-[200px] z-50 transition-all duration-200`;

        return (
            <li key={itemKey} className={`relative`}>

                {item.href ? (
                    <Link
                        href={item.href}
                        className={baseLinkClasses}
                        onClick={() => {
                            setMobileOpen(false);
                            setOpenDropdowns({});
                        }}
                    >
                        {item.name}
                    </Link>
                ) : (
                    <button
                        onClick={() => toggleDropdown(itemKey, siblingKeys)}
                        className={`flex items-center justify-between w-full ${baseLinkClasses}`}
                        aria-expanded={isOpen}
                    >
                        {item.name}
                        <ChevronDown className={`ml-1 md:ml-2.5 w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                    </button>
                )}

                {/* Dropdown Menu (ul) */}
                {hasChildren && isOpen && (
                    <ul
                        className={`flex flex-col space-y-1 p-2 text-sm text-gray-700 dark:text-gray-200
                            md:block ${desktopDropdownClasses}
                            ${level === 0
                            ? "md:top-full md:left-0 md:mt-2"
                            : "md:top-[-8px] md:left-full md:ml-2"
                        }
                            ${level > 0 ? "ml-4 border-l border-gray-300 dark:border-gray-700 md:ml-0 md:border-l-0" : ""}
                        `}
                    >
                        {item.children.map((child) =>
                            renderNavItem(child, nextLevelSiblingKeys, nextParentPath, nextLevel)
                        )}
                    </ul>
                )}
            </li>
        );
    };

    const topLevelSiblingKeys = getSiblingKeys(navItems);

    return (
        // <div className="font-['Inter']">
        <div>
            {/* Load Tailwind CSS */}
            {/*<script src="https://cdn.tailwindcss.com"></script>*/}

            {/* 1. TOP BAR (New Half-Cut Section) */}
            <TopBar1 />

            {/* 2. MAIN NAVBAR ROW (Logo, Name, Menu) */}
            <nav ref={navbarRef} className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800">
                <div class="max-w-screen-xl mx-auto p-4
                            flex flex-wrap items-center justify-between
                            md:flex-col md:items-start md:space-y-4"> {/* Stack vertically on desktop */}

                    {/* TOP ROW: Logo, Title, and Mobile Button */}
                    <div className="flex w-full items-center justify-between">
                        {/* Logo and Title (Left) */}
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse transition-transform hover:scale-[1.01]">
                            <img
                                src="/images/logo.png"
                                className="h-18"
                                alt="University Logo"
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/10B981/ffffff?text=SEU"; }}
                            />
                            <div className="text-sm md:text-2xl font-bold text-gray-900 leading-tight">
                                Bangladesh Army University of Science and Technology (BAUST), Saidpur
                            </div>
                        </Link>

                        {/* Green Button (Right, hidden on mobile) */}
                        <div className="ml-auto hidden md:inline-flex">
                            <GreenButton href="/apply-now">Apply Online</GreenButton>
                        </div>

                        {/* Mobile menu button (Right on mobile) */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                            aria-controls="navbar-multi-level"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>


                    {/* BOTTOM ROW: Menu Items Container (w-full ensures it wraps below the logo) */}
                    <div className={`${mobileOpen ? 'block' : 'hidden'} w-full md:block md:w-full`} id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50
                   md:space-x-4 md:space-y-0 md:flex-row md:mt-0 md:border-0 md:bg-transparent
                   dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                            {/* Render all navigation items */}
                            {navItems.map((item) => renderNavItem(item, topLevelSiblingKeys))}

                            {/* Green Button for Mobile Only */}
                            <li className="mt-4 md:hidden">
                                <GreenButton href="/apply-now">Apply Online</GreenButton>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}
