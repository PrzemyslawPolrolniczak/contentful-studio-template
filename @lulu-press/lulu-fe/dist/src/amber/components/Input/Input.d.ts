import React from "react";
import { Icons } from "../../icon-types";
type Currency = "USD" | "CAD" | "EUR" | "AUD" | "GBP";
export interface BaseInputProps {
    additionalHtmlProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "name" | "className" | "style" | "placeholder" | "disabled" | "value" | "required">;
    id?: string;
    name?: string;
    dataTestId?: string;
    disabled?: boolean;
    placeholder?: string;
    error?: boolean | string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    icon?: Icons;
    size?: "medium" | "small";
    required?: boolean;
    label?: string;
    variant?: "filled" | "outline";
    tooltip?: string;
    description?: string;
    ariaLabel?: string;
    currencyPrefix?: Currency;
}
interface InputWithCurrencyPrefix extends BaseInputProps {
    currencyPrefix?: Currency;
    icon?: never;
}
interface InputWithIconPrefix extends BaseInputProps {
    icon?: Icons;
    currencyPrefix?: never;
}
export type InputProps = InputWithCurrencyPrefix | InputWithIconPrefix;
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
