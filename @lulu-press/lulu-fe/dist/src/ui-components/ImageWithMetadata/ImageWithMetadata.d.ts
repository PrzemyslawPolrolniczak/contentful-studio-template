import React from "react";
export interface ImageWithMetadataProps {
    dataTestId?: string;
    image: {
        url: string;
        retina?: string;
    };
    imageForMobile?: {
        url?: string;
        retina?: string;
    };
    imageLinkUrl?: string;
    imageLinkPage?: {
        url?: string;
    };
    imageAltText?: string;
    newTab: boolean;
    highPriority?: boolean;
    imageClasses?: string;
    CustomImageComponent?: JSX.Element;
    externalImageUrl?: string;
    externalMobileImageUrl?: string;
}
export declare const ImageWithMetadata: React.FC<ImageWithMetadataProps>;
