import React from "react";
interface Props {
    onClick: (event: React.MouseEvent) => void;
    label: string;
    expanded: boolean;
}
export declare const ExpandToggle: React.FC<Props>;
export {};
