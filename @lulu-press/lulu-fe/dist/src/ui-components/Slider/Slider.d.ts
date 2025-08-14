import React from "react";
export interface SliderProps {
    onChange: (value: number) => void;
    value: number;
    suffix?: string;
    min?: number;
    max?: number;
    step?: number;
    withInput?: boolean;
}
export declare const Slider: React.FC<SliderProps>;
