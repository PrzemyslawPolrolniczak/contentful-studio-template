import React from "react";
export interface PaginationInfoProps {
    dataTestId?: string;
    itemsCount: number;
    pageNumber: number;
    pageSize: number;
    pageCount: number;
    rightAligned?: boolean;
    sizeChoices?: number[];
    onPageSizeChange: (size: number) => void;
}
export interface PageSizeChoiceProps {
    pageSize: number;
    isSelected: boolean;
    onClick: () => void;
}
export declare const PaginationInfo: React.FC<PaginationInfoProps>;
export declare const PageSizeChoice: React.FunctionComponent<PageSizeChoiceProps>;
