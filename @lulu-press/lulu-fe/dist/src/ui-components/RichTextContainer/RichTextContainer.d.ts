import { Document } from "@contentful/rich-text-types";
import React from "react";
export interface RichTextFieldProps {
    textBlockContainerClassNames?: string;
    textAlignment: "center" | "right" | "left" | "justify";
    richTextContent: {
        json: Document;
    };
    headingTextColor?: string;
    headingClasses?: string;
    normalTextClasses?: string;
}
export interface RichTextContainerProps {
    dataTestId?: string;
    richTextContainerClassNames?: string;
    standaloneEntry: boolean;
    richTextFieldsCollection: {
        items: RichTextFieldProps[];
    };
}
export declare const RichTextContainer: React.FC<RichTextContainerProps>;
