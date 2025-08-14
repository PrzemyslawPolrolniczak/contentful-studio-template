import React from "react";
import { BookTeaserProps } from "../BookTeaser/BookTeaser";
import { ContentfulButtonLinkProps } from "../ButtonLink/ButtonLink";
import { RichTextContainerProps } from "../RichTextContainer/RichTextContainer";
export interface CarouselProps {
    backgroundColor?: string;
    dataTestId?: string;
    elementsAligned: boolean;
    galleryBookTeaserClassNames?: string;
    headerTextBlockRef?: RichTextContainerProps;
    isCarousel: boolean;
    linkedButtonRef?: ContentfulButtonLinkProps;
    products: BookTeaserProps[];
    spacingClassNames?: string;
}
export declare const Carousel: React.FC<CarouselProps>;
