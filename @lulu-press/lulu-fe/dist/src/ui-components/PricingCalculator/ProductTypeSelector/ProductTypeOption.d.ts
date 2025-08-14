import React from "react";
interface Props {
    isSelected?: boolean;
    image: string;
    label: string;
    onClick: (value: string) => void;
    value: string;
}
export declare const ProductTypeOption: React.FC<Props>;
export {};
