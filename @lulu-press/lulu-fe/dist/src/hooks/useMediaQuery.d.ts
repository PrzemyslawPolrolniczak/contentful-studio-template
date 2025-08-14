export declare const MEDIA_BREAKPOINTS: {
    XXL: number;
    XL: number;
    L: number;
    M_BIG: number;
    M: number;
    S: number;
    XS: number;
};
export declare const useMediaQuery: (query: string) => boolean;
export declare const useMediaQueryLargerThan: (breakPoint: keyof typeof MEDIA_BREAKPOINTS) => boolean;
export declare const useMediaQuerySmallerThan: (breakPoint: keyof typeof MEDIA_BREAKPOINTS) => boolean;
