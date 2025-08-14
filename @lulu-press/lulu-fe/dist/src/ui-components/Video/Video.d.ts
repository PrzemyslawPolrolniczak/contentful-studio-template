import React from "react";
export interface VideoProps {
    dataTestId?: string;
    videoEmbedCode?: string;
    videoAsset?: {
        url?: string;
    };
    autoplay?: boolean;
    controls?: boolean;
    muted?: boolean;
    loop?: boolean;
}
export declare const Video: React.FC<VideoProps>;
