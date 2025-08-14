import React, { CSSProperties } from "react";
import { LinkProps } from "../Link/Link";
export interface PriceFormContainerProps {
    dataTestId?: string;
    title: string;
    titleStyles?: CSSProperties;
    active?: boolean;
    invalid?: boolean;
    reference?: string | string[];
    footnote?: string;
    helperText?: string;
    helperLink?: LinkProps;
    children?: React.ReactNode;
}
export declare const PriceFormContainer: React.FC<PriceFormContainerProps>;
