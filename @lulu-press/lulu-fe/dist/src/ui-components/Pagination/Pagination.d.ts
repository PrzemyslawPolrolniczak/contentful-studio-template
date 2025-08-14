import React from "react";
export interface PaginationProps {
    dataTestId?: string;
    pageNumber: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    info?: string;
    fullWidth?: boolean;
    hierarchy?: "primary" | "secondary" | "tertiary";
}
export declare const Pagination: React.FC<PaginationProps>;
