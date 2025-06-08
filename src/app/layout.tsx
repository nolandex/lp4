import "@/styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants"; // Pastikan ini sesuai dengan fonts.ts
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
                    inter.variable, // Gunakan variable untuk Inter
                    satoshi.variable // Gunakan variable untuk Poppins (satoshi)
                )}
            >
                <Toaster
                    richColors
                    theme="dark"
                    position="top-right"
                />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
