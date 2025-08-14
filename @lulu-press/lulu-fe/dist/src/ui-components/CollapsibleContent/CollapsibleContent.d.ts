import React, { HTMLProps } from "react";
import { LinkProps } from "../Link/Link";
import { LinkedIconAndTextProps } from "../LinkedIconAndText/LinkedIconAndText";
import { RichTextContainerProps } from "../RichTextContainer/RichTextContainer";
export interface CollapsibleContentProps extends HTMLProps<HTMLDivElement> {
    dataTestId?: string;
    maxHeight: number;
    contentLink?: LinkedIconAndTextProps;
    gradientColor?: string;
}
export interface ContentfulCollapsibleContentProps {
    dataTestId?: string;
    classes?: string;
    showMoreText: string;
    showLessText: string;
    maxHeight?: number;
    linkRef?: LinkProps;
    gradientColor?: string;
    richTextContainerRef: RichTextContainerProps;
}
export declare const CollapsibleContent: React.FC<CollapsibleContentProps>;
export declare const ContentfulCollapsibleContent: React.FC<ContentfulCollapsibleContentProps>;
