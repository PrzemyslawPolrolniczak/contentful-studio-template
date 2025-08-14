import React from "react";
export interface ContentLinkTextBlockProps {
    dataTestId?: string;
    text: string;
    backgroundColor?: string;
    textColor?: string;
    centeredText?: boolean;
    idAttribute?: string;
}
export declare const ContentLinkTextBlock: React.FC<ContentLinkTextBlockProps>;
