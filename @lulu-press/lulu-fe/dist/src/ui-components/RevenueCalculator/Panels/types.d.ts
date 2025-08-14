import { Money, Pricing } from "../../PricingCalculator/types";
export interface PanelProps {
    pricing: Pricing | null | undefined;
    minimumListPrice?: Money;
    initialPriceAmount?: number;
    isGlobalDistro?: boolean;
    eligibleForGlobalDistro?: boolean;
    baseCurrency: string;
    locale: string;
    onListPriceChange: (newListPrice: number, includeGlobalDistribution?: boolean) => void;
    error?: string;
    loading?: boolean;
}
