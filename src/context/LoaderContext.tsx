import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "@/components/Loader";

interface LoaderContextType {
    isLoading: boolean;
    showLoader: (duration?: number) => void;
    hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    // Show loader on page change (indefinite until handled by page)
    useEffect(() => {
        setIsLoading(true);
    }, [location.pathname, location.search]);

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
