import React from "react";
import { ProductTypeEnum } from "../PricingCalculator/types";
export type BookTeaserOrientationType = "landscape" | "portrait" | "square";
export interface BookTeaserProps {
    author?: string;
    dataTestId?: string;
    name?: string;
    orientation?: BookTeaserOrientationType;
    productUrl: string;
    thumbnailUrl: string;
    onImageLoaded?: () => void;
    type?: ProductTypeEnum;
}
export declare const BookTeaser: React.FC<BookTeaserProps>;
