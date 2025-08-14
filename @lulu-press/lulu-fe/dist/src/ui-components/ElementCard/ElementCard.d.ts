import React from "react";
import { LuluColor } from "../../utils/colors";
import { ContentfulButtonLinkProps } from "../ButtonLink/ButtonLink";
import { ContentfulCollapsibleContentProps } from "../CollapsibleContent/CollapsibleContent";
import { DownloadDropdownProps } from "../DownloadDropdown/DownloadDropdown";
import { ImageWithMetadataProps } from "../ImageWithMetadata/ImageWithMetadata";
import { LinkProps } from "../Link/Link";
import { LinkedIconAndTextProps } from "../LinkedIconAndText/LinkedIconAndText";
import { RichTextContainerProps } from "../RichTextContainer/RichTextContainer";
import { VideoProps } from "../Video/Video";
export interface ElementCardProps {
    dataTestId?: string;
    borderColor?: string;
    elementCardClassNames?: string;
    backgroundImageColor?: string;
    imageWidth?: number;
    isFullHeight?: boolean;
    isHorizontallyAligned?: boolean;
    borderLocation?: "Top" | "Right" | "Bottom" | "Left";
    imageVerticalAlignment?: "Top" | "Center" | "Bottom";
    buttonLinkRef?: ContentfulButtonLinkProps;
    imageWithMetadataRef?: ImageWithMetadataProps;
    linksCollection?: {
        items: LinkedIconAndTextProps[];
    };
    richTextContainerRef?: RichTextContainerProps;
    collapsibleContentRef?: ContentfulCollapsibleContentProps;
    videoRef?: VideoProps;
    downloadDropdownRef?: DownloadDropdownProps;
    containerEffect?: "Drop Shadow" | "Stroke" | "None";
    containerHoverEffect?: "Drop Shadow" | "Stroke" | "Only Image Animation" | null;
    backgroundColor?: LuluColor;
    borderRadius?: number;
    linkCardRef?: LinkProps;
    contentCollection?: {
        items: (VideoProps | ImageWithMetadataProps | ContentfulCollapsibleContentProps | DownloadDropdownProps | ContentfulButtonLinkProps | LinkedIconAndTextProps | RichTextContainerProps)[];
    };
}
export declare const ElementCard: React.FC<ElementCardProps>;
