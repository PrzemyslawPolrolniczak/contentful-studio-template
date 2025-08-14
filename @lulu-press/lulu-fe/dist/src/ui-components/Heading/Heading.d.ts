import React from "react";
export interface HeadingProps {
    dataTestId?: string;
    title: string;
    description?: string;
    noPaddingTop?: boolean;
}
export declare const Heading: React.FC<HeadingProps>;
