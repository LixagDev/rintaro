import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";

export const metadata = {
    title: "Rintaro",
    description: "Une application simple, efficace, toute en un.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <LayoutProvider>{children}</LayoutProvider>
                <span className={"absolute bottom-4 right-4 font-mono text-zinc-500 text-xs select-none"}>Rintaro Beta v0.1</span>
            </body>
        </html>
    );
}