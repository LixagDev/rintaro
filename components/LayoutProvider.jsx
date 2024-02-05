"use client"
import {ThemeProvider} from "@/components/theme/Theme-Provider";
import { Toaster } from "@/components/ui/sonner";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function LayoutProvider({children}){
    return(
        <>
            <ProgressBar
                options={{ showSpinner: false }}
            />
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem>
                {children}
            </ThemeProvider>
            <Toaster/>
        </>
    );
}