import React from "react";
import { ConfiguratorAction, ConfiguratorState } from "./reducer";
import { ConfigurationOptions, Money, PricingCalculatorProps, ProductTypeEnum } from "./types";
type PricingCalculatorProviderProps = Pick<PricingCalculatorProps, "availableProductTypes" | "podPackagesQuery" | "getDisplayValue" | "manufacturingCostQuery" | "getCountryName" | "shippingCountriesQuery" | "shippingMethodsQuery" | "totalPricesQuery" | "listPriceBoundsQuery" | "priceMapQuery" | "priceMapEbookQuery" | "podPackageDimensionsQuery" | "countryStatesQuery" | "onRequestTotalPrices" | "onRequestShippingMethods" | "onRequestPriceMap" | "onRequestPriceMapEbook" | "onRequestManufacturingCost" | "onRequestShippingCountries" | "onRequestListPriceBounds" | "onRequestPodPackageDimensions" | "onRequestCountryStates" | "baseCurrency" | "wizardUrl" | "locale" | "initialConfiguration" | "isDeveloperPortalVersion"> & {
    children?: React.ReactNode;
};
interface PricingCalculatorContextType extends PricingCalculatorProviderProps {
    productType: ProductTypeEnum;
    setProductType: React.Dispatch<React.SetStateAction<ProductTypeEnum>>;
    podPackageId: string | null;
    quantity: number | null;
    trimSizes: string[];
    setQuantity: React.Dispatch<React.SetStateAction<number | null>>;
    shippingCost: Money | null;
    setShippingCost: React.Dispatch<React.SetStateAction<Money | null>>;
    initialConfiguration?: Partial<ConfiguratorState>;
    state: ConfiguratorState;
    dispatch: React.Dispatch<ConfiguratorAction>;
    availableOptions: ConfigurationOptions;
    filteredOptions: ConfigurationOptions;
}
export declare const PricingCalculatorContext: React.Context<PricingCalculatorContextType>;
export declare const PricingCalculatorProvider: React.FC<PricingCalculatorProviderProps>;
export {};
