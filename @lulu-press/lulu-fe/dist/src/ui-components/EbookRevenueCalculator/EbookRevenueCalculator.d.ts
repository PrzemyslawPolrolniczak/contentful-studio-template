import React from "react";
import { EbookDistributionChannelsEnum, Money, Pricing, ProductTypeEnum, QueryLike } from "../PricingCalculator/types";
export interface EbookRevenueCalculatorProps {
    dataTestId?: string;
    baseCurrency: string;
    locale: string;
    listPriceBoundsQuery: QueryLike<{
        minimumPrices: Money[];
        maximumPrices: Money[];
    } | null>;
    priceMapEbookQuery: QueryLike<Pricing | null>;
    onRequestListPriceBounds: (podPackageId: string, pageCount: number, projectType: ProductTypeEnum) => void;
    onRequestPriceMapEbook: (listPrice: Money, channels: EbookDistributionChannelsEnum[]) => void;
}
export declare const EbookRevenueCalculator: React.FC<EbookRevenueCalculatorProps>;
