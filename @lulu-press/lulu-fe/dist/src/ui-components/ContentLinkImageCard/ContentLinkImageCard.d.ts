import React from "react";
import { LinkedIconAndTextProps } from "../LinkedIconAndText/LinkedIconAndText";
import { VideoProps } from "../Video/Video";
export interface ContentLinkImageCardProps {
    dataTestId?: string;
    videoRef?: VideoProps;
    heading: string;
    description: string;
    classes?: string;
    linksCollection?: {
        items: LinkedIconAndTextProps[];
    };
}
export declare const ContentLinkImageCard: React.FC<ContentLinkImageCardProps>;
