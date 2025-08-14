import React from "react";
import { RevenueEntryRow } from "../../PricingCalculator/types";
interface RevenueTableProps {
    revenueEntryRows: RevenueEntryRow[];
    summary: string;
    baseCurrency: string;
    conversion?: boolean;
    locale: string;
    loading?: boolean;
    title?: string;
    theme?: "default" | "naked";
    showZeroValueRows?: boolean;
    summaryOnly?: boolean;
}
export declare const RevenueTable: ({ revenueEntryRows, summary, baseCurrency, conversion, locale, loading, title, theme, showZeroValueRows, summaryOnly, }: RevenueTableProps) => React.JSX.Element;
export {};
