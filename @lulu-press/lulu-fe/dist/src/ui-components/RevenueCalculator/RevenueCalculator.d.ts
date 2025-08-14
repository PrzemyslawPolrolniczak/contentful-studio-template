import React from "react";
import { DistributionChannelsEnum, Money, Pricing, ProductTypeEnum, QueryLike } from "../PricingCalculator/types";
export type PanelId = "distro" | "luluDirect";
export interface RevenueCalculatorProps {
    dataTestId?: string;
    locale: string;
    baseCurrency: string;
    podPackageId: string;
    podPackageIsEligibleForGlobalDistro: boolean;
    pageCount: number;
    productType: ProductTypeEnum;
    priceMapQuery: QueryLike<Pricing | null>;
    manufacturingCostQuery: QueryLike<Money | null>;
    listPriceBoundsQuery: QueryLike<{
        minimumPrices: Money[];
        maximumPrices: Money[];
    } | null>;
    onRequestPriceMap: (podPackageId: string, pageCount: number, listPrice?: Money, channels?: DistributionChannelsEnum[], currency?: string) => void;
    onRequestListPriceBounds: (podPackageId: string, pageCount: number, projectType: ProductTypeEnum) => void;
}
export declare const RevenueCalculator: React.FC<RevenueCalculatorProps>;
