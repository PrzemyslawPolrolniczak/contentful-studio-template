import React from "react";
import { Icons } from "../../icon-types";
type CheckboxWithLabelProps = {
    label: React.ReactNode;
    caption?: string;
};
type CheckboxWithoutLabelProps = {
    label?: undefined;
    caption?: never;
};
type CheckboxCommonProps = {
    id?: string;
    name?: string;
    dataTestId?: string;
    value?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelIconName?: Icons;
    checked: boolean;
    asRadio?: boolean;
    asSwitch?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    ariaLabel?: string;
    additionalHtmlProps?: React.InputHTMLAttributes<HTMLInputElement>;
} & (CheckboxWithLabelProps | CheckboxWithoutLabelProps);
type NormalCheckboxProps = {
    wrappedInCard?: never;
    maxCardWidth?: never;
    instanceSlot?: never;
    hasCheckboxRight?: boolean;
} & CheckboxCommonProps;
type CheckboxWrappedInCardProps = {
    wrappedInCard?: boolean;
    maxCardWidth?: number;
    instanceSlot?: React.ReactNode;
    hasCheckboxRight?: never;
} & CheckboxCommonProps;
export type CheckboxProps = CheckboxWrappedInCardProps | NormalCheckboxProps;
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
