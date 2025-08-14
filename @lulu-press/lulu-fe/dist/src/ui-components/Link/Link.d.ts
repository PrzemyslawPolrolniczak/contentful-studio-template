import React from "react";
export interface LinkProps {
    className?: string;
    dataTestId?: string;
    name?: string;
    description?: string;
    newTab?: boolean;
    url?: string | null;
    page?: {
        url?: string;
    } | null;
    __typename?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare const Link: React.FC<LinkProps>;
