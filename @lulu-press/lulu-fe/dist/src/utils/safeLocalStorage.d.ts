export declare const safeLocalStorage: {
    setItem: (key: string, value: string, onError?: (error: unknown) => void) => void;
    getItem: (key: string, onError?: (error: unknown) => void) => string | null;
    removeItem: (key: string, onError?: (error: unknown) => void) => void;
};
