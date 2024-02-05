"use client"
import {ThemeProvider} from "@/components/theme/Theme-Provider";
import { Toaster } from "@/components/ui/sonner";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {Suspense} from "react";

export default function LayoutProvider({children}){
    return(
        <>
            <Suspense>
                <ProgressBar
                    options={{ showSpinner: false }}
                />
            </Suspense>
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