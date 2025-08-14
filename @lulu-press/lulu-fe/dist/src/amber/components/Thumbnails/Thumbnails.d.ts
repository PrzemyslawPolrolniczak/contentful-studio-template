import React from "react";
export type ThumbnailSize = "large" | "medium" | "small" | "extraSmall";
interface ThumbnailsProps {
    dataTestId?: string;
    thumbnailUrls: string[];
    count?: number;
    tag?: string;
    size?: ThumbnailSize;
    thumbnailsLimit?: number;
}
export declare const Thumbnails: React.FC<ThumbnailsProps>;
export {};
