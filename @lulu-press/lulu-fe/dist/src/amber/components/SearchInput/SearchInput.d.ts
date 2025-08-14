import React from "react";
export interface SearchInputProps {
    dataTestId?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    delay?: number;
    alwaysOpen?: boolean;
}
export declare const SearchInput: React.FC<SearchInputProps>;
