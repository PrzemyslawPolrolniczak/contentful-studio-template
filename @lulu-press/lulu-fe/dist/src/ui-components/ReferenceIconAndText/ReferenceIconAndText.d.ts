import React from "react";
import { IconWithMetadataProps } from "../IconWithMetadata/IconWithMetadata";
export type ReferenceIconAndTextProps = {
    referenceIcon: IconWithMetadataProps;
    iconTextAlignment?: "left" | "center" | "right";
    referenceIconDescriptionText: string;
};
export declare const ReferenceIconAndText: ({ iconTextAlignment, referenceIcon, referenceIconDescriptionText, }: ReferenceIconAndTextProps) => React.JSX.Element;
