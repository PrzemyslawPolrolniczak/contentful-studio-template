import React from "react";
export interface BookFormatSelectionProps {
    dataTestId?: string;
    options: FormatOption[];
    multipleOptions: boolean;
}
export interface FormatOption {
    iconName?: string;
    value?: string;
    label: string | React.ReactElement;
    price: string;
    priceBeforeDiscount?: string;
}
export declare const BookFormatSelectionContainer: React.FC<BookFormatSelectionProps>;
