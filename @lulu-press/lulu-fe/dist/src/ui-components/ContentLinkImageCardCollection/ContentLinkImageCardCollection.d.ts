import React from "react";
import { ContentLinkImageCardProps } from "../ContentLinkImageCard/ContentLinkImageCard";
import { ContentLinkTextBlockProps } from "../ContentLinkTextBlock/ContentLinkTextBlock";
export interface ContentLinkImageCardCollectionProps {
    dataTestId?: string;
    backgroundColor?: string;
    classes?: string;
    contentLinkTextBlockRef?: ContentLinkTextBlockProps;
    contentLinkImageCardsCollection?: {
        items: ContentLinkImageCardProps[];
    };
}
export declare const ContentLinkImageCardCollection: React.FC<ContentLinkImageCardCollectionProps>;
