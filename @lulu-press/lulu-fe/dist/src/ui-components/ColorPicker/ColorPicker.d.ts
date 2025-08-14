import React from "react";
import { RGBColor } from "../../utils/colors";
interface ColorBubbleProps {
    className?: string;
    style?: React.CSSProperties;
    transparent?: boolean;
}
export declare const ColorBubble: ({ className, style, transparent }: ColorBubbleProps) => React.JSX.Element;
interface BaseColorPickerProps {
    color: string | RGBColor;
}
interface ColorPickerWithTransparent extends BaseColorPickerProps {
    allowTransparent: true;
    onChange: (color: {
        hex: string;
        rgb: RGBColor;
    } | "transparent") => void;
}
interface ColorPickerWithoutTransparent extends BaseColorPickerProps {
    allowTransparent?: false;
    onChange: (color: {
        hex: string;
        rgb: RGBColor;
    }) => void;
}
type ColorPickerProps = ColorPickerWithTransparent | ColorPickerWithoutTransparent;
export declare const ColorPicker: React.FC<ColorPickerProps>;
export {};
