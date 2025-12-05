/**
 * PLAP - Punjab Land Analytics Portal
 * Centralized Tailwind CSS Configuration
 *
 * Modify colors here to update across all pages
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Primary Green Palette - Main brand color
                primary: {
                   '50': '#ebfef3',
                    '100': '#d0fbe1',
                    '200': '#9ef5c4',
                    '300': '#6aebab',
                    '400': '#2ed989',
                    '500': '#0abf70',
                    '600': '#009b5b',
                    '700': '#007c4c',
                    '800': '#03623d',
                    '900': '#035134',
                    '950': '#012d1e',
                },

                // Secondary/Accent Colors
                secondary: {
                    50:  "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",   // Purple accent
                    600: "#9333ea",
                    700: "#7c3aed",
                    800: "#6b21a8",
                    900: "#581c87"
                },

                // Accent/Warning Colors (Amber)
                accent: {
                    50:  "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",   // Default accent
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f"
                },

                // Info Colors (Blue)
                info: {
                    50:  "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a"
                },

                // Success Colors
                success: {
                    50:  "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d"
                },

                // Danger/Error Colors
                danger: {
                    50:  "#fef2f2",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#ef4444",
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d"
                }
            },

            // Custom font families (optional)
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace']
            }
        }
    }
};

// Log for debugging (can be removed in production)
console.log('PLAP Tailwind Config Loaded');
