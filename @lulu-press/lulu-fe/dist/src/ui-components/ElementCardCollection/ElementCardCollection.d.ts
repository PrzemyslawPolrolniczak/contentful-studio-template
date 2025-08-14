import React from "react";
import { ElementCardProps } from "../ElementCard/ElementCard";
import { ReferenceIconAndTextProps } from "../ReferenceIconAndText/ReferenceIconAndText";
import { RichTextContainerProps } from "../RichTextContainer/RichTextContainer";
export interface ElementCardCollectionProps extends Partial<ReferenceIconAndTextProps> {
    elementCardsCollection: {
        items: ElementCardProps[];
    };
    richTextContainerRef?: RichTextContainerProps;
    backgroundColor?: string;
    paddingClasses?: string[];
    columnClasses?: string;
    idForQuickLink?: string;
}
export declare const ElementCardCollection: React.FC<ElementCardCollectionProps>;
