import React from "react";
import { ConfiguratorState } from "../../../reducer";
import { ProductTypeEnum } from "../../../types";
interface BookSizeSelectProps {
    productType: ProductTypeEnum;
    bookConfiguratorState: ConfiguratorState;
    onTrimSizeChange: (value: string) => void;
    onPageCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const BookSizeSelect: ({ productType, bookConfiguratorState, onTrimSizeChange, onPageCountChange, }: BookSizeSelectProps) => React.JSX.Element;
export {};
