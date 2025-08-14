import { Money, QueryLike } from "../PricingCalculator/types";
export declare const usePriceCalculation: (baseCurrency: string, listPriceBoundsQuery: QueryLike<{
    minimumPrices: Money[];
    maximumPrices: Money[];
} | null>, manufacturingCostQuery: QueryLike<Money | null>) => {
    error: string | undefined;
    distroPrice: number | undefined;
    setDistroPrice: import("react").Dispatch<import("react").SetStateAction<number | undefined>>;
    validatePrice: (price: number, isGlobalDistro?: boolean) => boolean;
    calculateMinMax: (isGlobalDistro?: boolean) => {
        distroMinimumListPrice: Money | undefined;
        distroMaximumListPrice: Money | undefined;
    };
};
