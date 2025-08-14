import React from "react";
type Images = {
    imageUrl?: string;
    mobileImageUrl?: string;
    mobileRetinaImageUrl?: string;
    desktopRetinaImageUrl?: string;
};
export declare const imageMimeTypes: {
    jpe: string;
    jpeg: string;
    jpg: string;
    svg: string;
    ico: string;
    webp: string;
};
export declare const getWebpPicture: (url?: string) => string | undefined;
export declare const checkIsVectorImage: (imageUrl?: string) => boolean | undefined;
export declare const prepareSVGImage: (imageUrl?: string) => string | undefined;
export declare const getImageExtension: (url: string) => keyof typeof imageMimeTypes;
export declare const getRetinaUrlForGoogleCloudImages: (url?: string) => string | undefined;
export declare const getRetinaSourceSet: (url?: string, retinaUrl?: string) => string;
export declare const getSourceProps: (url?: string, retinaUrl?: string) => {
    srcSet?: undefined;
    type?: undefined;
} | {
    srcSet: string | undefined;
    type: string;
};
export declare const getImageSources: ({ imageUrl, mobileImageUrl, mobileRetinaImageUrl, desktopRetinaImageUrl, }: Images) => React.JSX.Element | undefined;
export declare const IMAGES_BASE_URL = "https://assets.lulu.com/media/";
export {};
