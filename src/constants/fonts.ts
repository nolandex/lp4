// src/constants/fonts.ts
import { Inter, Poppins } from "next/font/google";

export const satoshi = Poppins({
    subsets: ["latin"],
    variable: "--font-satoshi",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
