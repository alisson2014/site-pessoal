import { createContext, useContext } from "react";
import { AboutJsonContextType } from "./types";

export const AboutJsonContext = createContext<AboutJsonContextType | null>(null);

export const useAboutJson = (): AboutJsonContextType => {
    const context = useContext(AboutJsonContext);

    if (!context) {
        throw new Error('useAboutJson must be used within an AboutJsonProvider');
    }
    
    return context;
};