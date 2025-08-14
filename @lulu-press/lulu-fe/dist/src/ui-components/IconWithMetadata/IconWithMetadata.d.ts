import React from "react";
export interface IconWithMetadataProps {
    dataTestId?: string;
    icon: string;
    iconLinkUrl?: string;
    iconLinkPage?: {
        url?: string;
    };
    iconAltText?: string;
    newTab: boolean;
    iconColor?: string;
}
export declare const IconWithMetadata: React.FC<IconWithMetadataProps>;
