import React from "react";
export type QuickLinkTextSize = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
export interface QuickLinkCollectionProps {
    separator: string;
    headingCopy: string;
    quickLinksCollection: {
        items: {
            idToScroll: string;
            text: string;
            textSize?: QuickLinkTextSize;
        }[];
    };
    classes?: string;
    children?: React.ReactNode;
    textColor?: string;
}
export declare const QuickLinkCollection: React.FC<QuickLinkCollectionProps>;
