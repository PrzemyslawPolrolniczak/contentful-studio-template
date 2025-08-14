import React, { CSSProperties } from "react";
export type BreadcrumbsProps = {
    dataTestId?: string;
    containerStyles?: CSSProperties;
    backLinks: {
        name: string;
        url: string;
    }[];
    currentPage: string;
};
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
