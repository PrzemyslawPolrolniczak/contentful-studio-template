import React from "react";
export interface PricingTableProps {
    dataTestId?: string;
    channelSelected: boolean;
    tableCollapsed: boolean;
    currencies: string[];
    prices: PricingCategoryData[];
}
export interface PricingCategoryData {
    label: string;
    values: PricingValue[];
}
export interface PricingValue {
    amount: number;
    currency: string;
    strikethrough?: boolean;
}
export declare const PricingTable: React.FC<PricingTableProps>;
