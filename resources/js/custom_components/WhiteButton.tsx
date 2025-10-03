import React from "react";

interface WhiteButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function WhiteButton({ href, children }: WhiteButtonProps) {
    return (
        <a
            href={href}
            className="bg-white text-green-700 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
        >
            {children}
        </a>
    );
}
