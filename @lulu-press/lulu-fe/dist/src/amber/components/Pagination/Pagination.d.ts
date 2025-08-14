import React from "react";
export interface PaginationProps {
    dataTestId?: string;
    pageNumber: number;
    pageSize: number;
    pageCount: number;
    itemsTotal: number;
    itemsTotalLabel: string;
    onPageChange: (page: number) => void;
    onPageSizeSelect: (value: number) => void;
}
export declare const Pagination: React.FC<PaginationProps>;
