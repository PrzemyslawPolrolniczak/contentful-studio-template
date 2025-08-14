import React from "react";
import { FormatOption } from "../BookFormatSelectionContainer";
export interface BookFormatSelectionDropdownProps {
    options: FormatOption[];
    setFormat?: (selected: FormatOption) => void;
    selectedBookFormat: FormatOption | null;
    bookFormatDropdownSize: "medium-small" | "extra-small";
}
export declare const BookFormatSelectionDropdown: React.FunctionComponent<BookFormatSelectionDropdownProps>;
