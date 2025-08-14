import React from "react";
import { ContentfulButtonLinkProps } from "../ButtonLink/ButtonLink";
import { ImageWithMetadataProps } from "../ImageWithMetadata/ImageWithMetadata";
import { RichTextContainerProps } from "../RichTextContainer/RichTextContainer";
export interface MainBannerProps {
    dataTestId?: string;
    backgroundColor?: string;
    contentBlockClassNames: string;
    idForQuickLink?: string;
    fullWidthImage: boolean;
    isVerticallyCentered: boolean;
    unsetTopPadding?: boolean;
    highPriority?: boolean;
    containerHeight: "short" | "medium" | "tall";
    containerHeightForMobile?: "short" | "medium" | "tall";
    backgroundVideo?: {
        url: string;
    };
    backgroundImageRef: ImageWithMetadataProps;
    buttonLinkRef?: ContentfulButtonLinkProps;
    richTextContainerRef: RichTextContainerProps;
    CustomImageComponent?: JSX.Element;
    externalVideoUrl?: string;
}
export declare const MainBanner: React.FC<MainBannerProps>;
