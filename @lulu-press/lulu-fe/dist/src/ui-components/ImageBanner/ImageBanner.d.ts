import React from "react";
import { ContentfulButtonLinkProps } from "../ButtonLink/ButtonLink";
import { ImageWithMetadataProps } from "../ImageWithMetadata/ImageWithMetadata";
export interface ImageBannerProps {
    contentBlockClassNames?: string;
    dataTestId?: string;
    headingText?: string;
    imageBannerClassNames?: string;
    subheadingText?: string;
    backgroundColor?: string;
    whiteText: boolean;
    withMaxWidthContainer?: boolean;
    linkedButtonRef?: ContentfulButtonLinkProps;
    backgroundImageRef: ImageWithMetadataProps;
    gridClassNames?: string;
    borderRadius?: number;
}
export declare const ImageBanner: React.FC<ImageBannerProps>;
