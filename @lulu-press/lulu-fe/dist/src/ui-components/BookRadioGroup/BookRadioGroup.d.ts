import * as React from "react";
import { BookRadioProps } from "../BookRadio/BookRadio";
export type BookRadioGroupProps = Pick<BookRadioProps, "name" | "disabled" | "type" | "onChange" | "dataTestId"> & {
    values: BookRadioProps[];
    selected: string;
    dataTestIdCustomPrefix?: string;
};
export declare const BookRadioGroup: React.FunctionComponent<BookRadioGroupProps>;
