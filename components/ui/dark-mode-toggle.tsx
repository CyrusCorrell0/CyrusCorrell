"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../app/contexts/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg transition-colors duration-200 
        ${theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        }
      `}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}
