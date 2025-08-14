import React from "react";
export interface MoneyDisplayProps {
    money?: {
        amount?: number | null;
        currency?: string | null;
    } | null;
    onlyAmount?: boolean;
    locale?: string;
    className?: string;
    fallback?: string;
}
export declare const MoneyDisplay: React.FC<MoneyDisplayProps>;
