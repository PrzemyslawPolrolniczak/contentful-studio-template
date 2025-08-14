import * as chrono from "chrono-node";
import React from "react";
import { Locale } from "../../../utils/locale";
export interface DatePickerValue {
    from: Date | null;
    to: Date | null;
}
interface DateModifier {
    range: DatePickerValue;
    disabled?: boolean;
    wrapperClassName?: string;
    cellClassName?: string;
    tooltipText?: string;
}
export interface DatePickerProps {
    dataTestId?: string;
    locale?: Locale;
    defaultValue?: DatePickerValue;
    value?: DatePickerValue;
    onChange?: (value: DatePickerValue) => void;
    disableFutureDates?: boolean;
    /**
     * Display variant of the date picker
     * @default "integrated"
     * @note "floating" variant lacks styling for mobile devices
     */
    pickerVariant?: "integrated" | "floating";
    dateModifiers?: DateModifier[];
    className?: string;
    selectionLimits?: {
        minDays?: number;
        maxDays?: number;
    };
}
export interface DatePickerConfig {
    parserFn: typeof chrono.parse;
    locale: Locale;
    weekdayNames: string[];
    monthNames: string[];
    placeholder: string;
    formatString: string;
}
export declare const DatePicker: React.FC<DatePickerProps>;
export {};
