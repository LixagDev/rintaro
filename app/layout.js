import "./globals.css";
import {ThemeProvider} from "@/components/theme/Theme-Provider";
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
    title: "Rintaro",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem>
                    {children}
                </ThemeProvider>
                <Toaster/>
            </body>
        </html>
    );
}