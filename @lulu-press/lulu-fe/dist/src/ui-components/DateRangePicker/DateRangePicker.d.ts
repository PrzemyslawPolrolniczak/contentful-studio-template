import React from "react";
import { DatePickerProps } from "../DatePicker/DatePicker";
export type DateRange = {
    from: Date;
    to: Date;
};
export type DateRangePickerProps = Pick<DatePickerProps, "locale"> & {
    startDate?: Date;
    endDate?: Date;
    fromLabel?: string;
    toLabel?: string;
    onChange: (range: DateRange) => void;
    pickerClassname?: string;
    dataTestId?: string;
    maxDays?: number;
};
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
