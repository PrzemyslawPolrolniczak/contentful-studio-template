import React from "react";
import { FormatOption } from "../BookFormatSelectionContainer";
export interface BookFormatSelectionButtonProps {
    bookFormatButtonSize: "large" | "medium-big";
    setFormat?: (selected: FormatOption) => void;
    options: FormatOption[];
    selectedBookFormat: FormatOption | null;
}
export declare const BookFormatSelectionButton: React.FunctionComponent<BookFormatSelectionButtonProps>;
