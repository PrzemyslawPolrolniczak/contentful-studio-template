import React, { InputHTMLAttributes, ReactElement } from "react";
import { Icons } from "../../icon-types";
export interface OptionProps {
    value: string;
    label: string;
    [key: string]: any;
}
export interface InputDropdownProps<T extends OptionProps> {
    dataTestId?: string;
    wrapperClassName?: string;
    inputClassName?: string;
    options: Array<T>;
    optionsValue?: Array<T>;
    name?: string;
    label: string;
    onChange: (value: string, reset?: boolean) => void;
    onTextChange?: (value: string) => void;
    error?: string;
    value?: string | null;
    defaultValue?: string | null;
    defaultText?: string | undefined | null;
    onBlur?: (value?: string) => void;
    preferredOptions?: Array<string>;
    optionsClassname?: string;
    disabled?: boolean;
    iconName?: Icons;
    Option?: ({ label, ...rest }: OptionProps) => ReactElement | null;
    selectOnly?: boolean;
    disableOptionBorder?: boolean;
    shortInputOnComma?: boolean;
    search?: boolean;
    FooterElement?: () => ReactElement;
    dropdownText?: string;
    hideNoResults?: boolean;
    noOptionsText?: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}
export declare const InputDropdown: <T extends OptionProps>({ options, name, label, onChange, error, value: controlledValue, onBlur, preferredOptions, optionsClassname, wrapperClassName, inputClassName, disabled, iconName, Option, dataTestId, defaultValue, defaultText, selectOnly, disableOptionBorder, onTextChange, optionsValue, shortInputOnComma, search, FooterElement, dropdownText, hideNoResults, noOptionsText, inputProps, }: InputDropdownProps<T>) => React.JSX.Element;
