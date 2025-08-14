import React from "react";
interface CommonProps {
    dataTestId?: string;
    scaleMarkers?: number;
    withScaleLegend?: boolean;
    min?: number;
    max?: number;
    step?: number;
    tooltip?: "top" | "bottom";
    className?: string;
    width?: number | string;
}
export interface SliderProps extends CommonProps {
    range?: never;
    onChange: (value: number) => void;
    value: number;
    withInput?: boolean;
    percentageInput?: boolean;
    pushable?: never;
}
export interface RangeSliderProps extends CommonProps {
    range: true;
    onChange: (value: {
        min: number;
        max: number;
    }) => void;
    value: {
        min: number;
        max: number;
    };
    withInput?: never;
    percentageInput?: never;
    pushable?: boolean;
}
export declare const Slider: React.FC<SliderProps | RangeSliderProps>;
export {};
