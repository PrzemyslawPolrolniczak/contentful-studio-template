import "./reactDatePicker.scss";
import React from "react";
import { ReactDatePickerProps } from "react-datepicker";
import { Icons } from "../../icon-types";
import { Locale } from "../../utils/locale";
export interface DatePickerProps extends Omit<ReactDatePickerProps, "onChange"> {
    dataTestId?: string;
    name?: string;
    className?: string;
    icon?: Icons;
    date: Date | null;
    label: string;
    locale: Locale;
    maxDate?: Date;
    minDate?: Date;
    onChange(arg: Date): void;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export declare const MonthPicker: React.FC<DatePickerProps>;
