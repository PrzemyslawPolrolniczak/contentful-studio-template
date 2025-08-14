import React from "react";
import { RGBColor } from "../../utils/colors";
interface Props {
    color: string | number;
    hex: string;
    label: string;
    rgb: RGBColor;
    onChange: (color: string | RGBColor) => void;
}
export declare const HelperInput: React.FC<Props>;
export {};
