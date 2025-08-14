import React from "react";
import { MultiValue, Props, SingleValue } from "react-select";
export type Option = {
    value: string;
    label: string;
};
export type CustomSelectProps<T = unknown> = {
    dataTestId?: string;
    error?: string;
    label?: string;
    asyncSelect?: boolean;
    disabled?: boolean;
    required?: boolean;
    isShowErrorMessage?: boolean;
    loadOptions?: (value: string) => Promise<T[]>;
    onChange?: (value: SingleValue<T> | MultiValue<T>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    withCreate?: boolean;
    animated?: boolean;
    ariaLabel?: string;
} & Pick<Props<T & Option>, "components" | "isClearable" | "isLoading" | "isSearchable" | "onInputChange" | "placeholder" | "formatOptionLabel" | "name" | "options" | "value" | "defaultValue">;
export declare const CustomSelect: <T extends Option>({ asyncSelect, components, dataTestId, disabled, error, formatOptionLabel, isClearable, isLoading, isSearchable, isShowErrorMessage, loadOptions, onChange, onInputChange, options, placeholder, label, name, required, withCreate, defaultValue, animated, onBlur, ariaLabel, }: CustomSelectProps<T>) => React.JSX.Element;
