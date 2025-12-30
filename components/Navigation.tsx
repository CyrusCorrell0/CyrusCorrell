"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial theme
        const html = document.documentElement;
        setIsDark(html.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.remove("dark");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            setIsDark(true);
        }
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/resume", label: "Resume" },
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
                        className={`text-sm transition-opacity hover:opacity-70 ${pathname === link.href
                                ? "underline underline-offset-4"
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
