import React, { ReactNode } from "react";
type Theme = "app" | "brand";
interface ThemeContextValue {
    theme: Theme;
}
export declare const ThemeContext: React.Context<ThemeContextValue>;
interface ThemeProviderProps {
    children: ReactNode;
    theme?: Theme;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
