import React from "react";
import { ImageWithMetadataProps } from "../ImageWithMetadata/ImageWithMetadata";
export interface GridProps {
    dataTestId?: string;
    backgroundColor?: string;
    gridClassNames?: string;
    columnsCollection: {
        items: Array<{
            classes: string;
            childrenCollection: {
                items: Array<any>;
            };
        }>;
    };
    backgroundImage?: ImageWithMetadataProps;
    children?: React.ReactNode;
    idForQuickLink?: string;
}
export declare const Grid: React.FC<GridProps>;
