import React from "react";
export interface BookRadioProps {
    dataTestIdCustomPrefix?: string;
    dataTestId?: string;
    disabled?: boolean;
    image?: string;
    imageSet?: string;
    label: string;
    description?: string;
    value: string;
    selected?: boolean;
    name?: string;
    hasDropdown?: boolean;
    icon?: boolean;
    type?: "product_type" | "configurator";
    onChange?: (value: string) => void;
    CustomImageComponent?: JSX.Element;
}
export declare const BookRadio: React.FC<BookRadioProps>;
