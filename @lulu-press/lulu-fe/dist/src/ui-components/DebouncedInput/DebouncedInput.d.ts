import React from "react";
import { InputProps } from "../Input/Input";
export type DebouncedInputProps = InputProps & {
    delay?: number;
};
export declare const DebouncedInput: React.FC<DebouncedInputProps>;
