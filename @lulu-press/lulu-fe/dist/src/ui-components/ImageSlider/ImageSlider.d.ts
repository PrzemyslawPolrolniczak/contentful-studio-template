import React, { Dispatch, SetStateAction } from "react";
import { ImageWithMetadataProps } from "../ImageWithMetadata/ImageWithMetadata";
import { ReferenceIconAndTextProps } from "../ReferenceIconAndText/ReferenceIconAndText";
import { RichTextContainerProps } from "../RichTextContainer/RichTextContainer";
export type ImageSliderOption = {
    header: RichTextContainerProps;
    description: RichTextContainerProps;
    color?: string;
    image: ImageWithMetadataProps;
    displayReferenceIcon: boolean;
};
export interface ImageSliderProps extends Partial<ReferenceIconAndTextProps> {
    richTextContainerRef?: RichTextContainerProps;
    variant: "color" | "image";
    imageAlignment?: "left" | "right";
    classes?: string;
    optionsTitle: string;
    optionsCollection: {
        items: ImageSliderOption[];
    };
    imagesContainerMinHeight?: number;
}
export interface OptionsViewProps {
    options: ImageSliderOption[];
    setActiveIndex: Dispatch<SetStateAction<number>>;
    activeIndex: number;
    handleNext?: () => void;
    handlePrevious?: () => void;
}
export declare const ImageSlider: ({ classes, richTextContainerRef, referenceIcon, iconTextAlignment, referenceIconDescriptionText, imageAlignment, optionsCollection: { items: options }, imagesContainerMinHeight, variant, optionsTitle, ...props }: ImageSliderProps) => React.JSX.Element;
