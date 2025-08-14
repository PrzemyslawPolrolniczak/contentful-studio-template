import React from "react";
import { ImageWithMetadataProps } from "../ImageWithMetadata/ImageWithMetadata";
import { LinkProps } from "../Link/Link";
export interface ImageTextBulletProps {
    dataTestId?: string;
    imageRef: ImageWithMetadataProps;
    title: string;
    linkedTitleRef?: LinkProps;
    description: string;
    buttonText: string;
    linkedButtonRef?: LinkProps;
    textAlign?: "center" | "right" | "left";
}
export declare const ImageTextBullet: React.FC<ImageTextBulletProps>;
