import React from "react";
export interface SearchFilterBarProps {
    actions?: React.ReactNode;
    className?: string;
    dataTestId?: string;
    filters?: React.ReactNode;
    open?: boolean;
    onOpenToggle?(open: boolean): void;
    search?: React.ReactNode;
    style?: React.CSSProperties;
}
export declare const SearchFilterBar: React.FC<SearchFilterBarProps>;
