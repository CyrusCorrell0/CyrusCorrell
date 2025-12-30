"use client";

import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function Navigation() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/philosophy", label: "Philosophy" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/80 backdrop-blur-sm">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 transition-opacity hover:opacity-70"
                aria-label="Toggle theme"
            >
                {isDark ? (
                    <Sun className="w-5 h-5" />
                ) : (
                    <Moon className="w-5 h-5" />
                )}
            </button>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-lg transition-opacity hover:opacity-70 ${pathname?.toLowerCase() === link.href.toLowerCase()
                            ? "underline underline-offset-4 italic"
                            : ""
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
