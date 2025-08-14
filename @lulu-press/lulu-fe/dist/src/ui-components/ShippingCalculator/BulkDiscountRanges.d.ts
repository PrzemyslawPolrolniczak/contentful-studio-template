import React from "react";
import { Money } from "../PricingCalculator/types";
interface BulkDiscountRangesProps {
    pricePerBook: Money;
    locale: string;
}
export declare const BulkDiscountRanges: ({ pricePerBook, locale }: BulkDiscountRangesProps) => React.JSX.Element;
export {};
