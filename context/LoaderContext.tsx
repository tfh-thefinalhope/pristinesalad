"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";

interface LoaderContextType {
    isLoading: boolean;
    showLoader: (duration?: number) => void;
    hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Show loader on page change
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Keep loader for 1.5s on page transition for effect
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    const showLoader = (duration?: number) => {
        setIsLoading(true);
        if (duration) {
            setTimeout(() => {
                setIsLoading(false);
            }, duration);
        }
    };

    const hideLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
            {isLoading && <Loader />}
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    const context = useContext(LoaderContext);
    if (context === undefined) {
        throw new Error("useLoader must be used within a LoaderProvider");
    }
    return context;
}
