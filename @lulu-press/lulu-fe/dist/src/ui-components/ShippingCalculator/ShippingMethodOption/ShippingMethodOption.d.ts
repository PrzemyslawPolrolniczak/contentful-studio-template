import React from "react";
import { Money } from "../../../types";
import { OptionProps } from "../../InputDropdown/InputDropdown";
export interface ShippingMethodOptionProps extends OptionProps {
    description?: string;
    active?: boolean;
    money?: Money;
    locale?: string;
}
export declare const ShippingMethodOption: ({ label, money, description, active, locale, }: ShippingMethodOptionProps) => React.JSX.Element | null;
