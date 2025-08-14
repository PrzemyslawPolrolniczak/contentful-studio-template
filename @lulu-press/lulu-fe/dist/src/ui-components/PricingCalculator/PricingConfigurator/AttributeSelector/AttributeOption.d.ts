import React from "react";
interface Props {
    image?: string;
    label: string;
    description?: string;
    selected?: boolean;
    value: string;
    onChange?: (option: string) => void;
    disabled?: boolean;
    unavailable?: boolean;
    nonInteractive?: boolean;
    isDistroEligible?: boolean;
    order?: number;
    colStart?: number;
}
export declare const AttributeOption: React.FC<Props>;
export {};
