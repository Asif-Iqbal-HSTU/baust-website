import React from "react";

interface GreenButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function GreenButton({ href, children }: GreenButtonProps) {
    return (
        <a
            href={href}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
        >
            {children}
        </a>
    );
}
