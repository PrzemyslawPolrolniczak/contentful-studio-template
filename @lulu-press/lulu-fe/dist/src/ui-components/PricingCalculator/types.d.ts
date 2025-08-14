import { ReactNode } from "react";
import { Locale } from "../../utils/locale";
import { ConfiguratorState } from "./reducer";
export interface PricingCalculatorProps {
    dataTestId?: string;
    availableProductTypes: ProductTypeConfig[];
    podPackagesQuery: QueryLike<PodPackage[]>;
    shippingCountriesQuery: QueryLike<Country[]>;
    manufacturingCostQuery: QueryLike<Money | null>;
    listPriceBoundsQuery: QueryLike<{
        minimumPrices: Money[];
        maximumPrices: Money[];
    } | null>;
    totalPricesQuery: QueryLike<TotalPricing | null>;
    shippingMethodsQuery: QueryLike<ShippingMethod[]>;
    priceMapQuery: QueryLike<Pricing | null>;
    priceMapEbookQuery: QueryLike<Pricing | null>;
    podPackageDimensionsQuery?: QueryLike<DocumentDimension[] | null>;
    countryStatesQuery?: QueryLike<CountryState[] | null>;
    onRequestPodPackages: (printableType: PrintableTypeEnum) => void;
    onRequestShippingCountries: () => void;
    onRequestListPriceBounds: (podPackageId: string, pageCount: number, productType: ProductTypeEnum) => void;
    onRequestManufacturingCost: (podPackageId: string, pageCount: number) => void;
    onRequestTotalPrices: (podPackageId: string, pageCount: number, quantity: number) => void;
    onRequestShippingMethods: (podPackageId: string, pageCount: number, quantity: number, country: string, state?: string) => void;
    onRequestPriceMap: (podPackageId: string, pageCount: number, listPrice?: Money, channels?: DistributionChannelsEnum[], currency?: string) => void;
    onRequestPriceMapEbook: (listPrice: Money, channels: EbookDistributionChannelsEnum[]) => void;
    onRequestPodPackageDimensions?: (podPackageId: string, pageCount: number) => void;
    onRequestCountryStates?: (countryCode: string) => void;
    getDisplayValue: (rawString?: string, plural?: boolean) => string | undefined;
    productsUrl: string;
    getCountryName: (alpha2orAlpha3orNumeric: string | number, lang: string) => string;
    locale: Locale;
    initialConfiguration?: Partial<ConfiguratorState>;
    baseCurrency?: string;
    wizardUrl?: string;
    isDeveloperPortalVersion?: boolean;
    mainColumnAddons?: ReactNode;
}
export type PodPackage = {
    id?: string | null;
    distributionEligible?: boolean | null;
    minPages?: number | null;
    maxPages?: number | null;
    interiorInkColor?: string | null;
    interiorPaperColor?: string | null;
    interiorPaperWeight?: number | null;
    interiorPaperCoating?: string | null;
    exteriorFinish?: string | null;
    printQuality?: string | null;
    linenMaterial?: string | null;
    foilStamp?: string | null;
    active?: boolean | null;
    printableProductType?: Array<string | null> | null;
    trimSize?: {
        key?: string | null;
        name?: string | null;
    } | null;
    bindingType?: {
        key?: string | null;
    } | null;
};
export type Country = {
    code: string;
    name: string;
};
export type CountryState = {
    code: string;
    name: string;
};
export type Money = {
    amount: number;
    currency: string;
};
export type Discount = {
    discount?: Money;
    discountType?: "PERCENTAGE" | "VOLUME" | "TIER";
    percentage?: string;
};
export type TotalPricing = {
    basePrice?: Money;
    totalDiscounts?: Discount[];
    totalPrice?: Money;
    fulfillmentFee?: Money;
};
export type ShippingMethod = {
    id: string;
    /**
     * @deprecated Use {@link shippingCost.amount} instead.
     */
    cost?: number | null;
    /**
     * @deprecated Use {@link shippingCost.currency} instead.
     */
    currency?: string | null;
    name?: string | null;
    traceable?: boolean | null;
    /**
     * @deprecated Use {@link businessDaysMin} instead.
     */
    daysMin?: number | null;
    /**
     * @deprecated Use {@link businessDaysMax} instead.
     */
    daysMax?: number | null;
    businessDaysMin?: number | null;
    businessDaysMax?: number | null;
    shippingCost?: {
        amount?: number | null;
        currency?: string | null;
    } | null;
};
export type UnitEnum = "INCH" | "MILLIMETER" | "PRINT_POINT";
export type DocumentDimension = {
    unit?: UnitEnum | null;
    interiorWidth?: number | null;
    interiorHeight?: number | null;
    coverWidth?: number | null;
    coverHeight?: number | null;
    spineWidth?: number | null;
};
export type RevenueRowLabel = "AUTHOR_REVENUE" | "DISTRIBUTION_FEES" | "FULFILLMENT_FEE" | "GROSS_PROFIT" | "LIST_PRICE" | "LULU_SHARE" | "NON_PROMOTIONAL_AUTHOR_REVENUE" | "NON_PROMOTIONAL_LIST_PRICE" | "PRINT_COST";
export type DistributionChannelsEnum = "GLOBALREACH" | "IBOOKSTORE" | "KINDLE" | "KOBO" | "LULU" | "LULU_DIRECT" | "NOOK" | "OTHERS";
export type EbookDistributionChannelsEnum = "LULU" | "GLOBALREACH";
export type ProductTypeEnum = "CALENDAR" | "COMIC_BOOK" | "EBOOK" | "MAGAZINE" | "PREMIUM_PHOTO_BOOK" | "PRINTED_BOOK" | "YEARBOOK" | "BUNDLE";
export type PrintableTypeEnum = "BOOK" | "CALENDAR" | "COMIC_BOOK" | "MAGAZINE" | "PREMIUM_PHOTO_BOOK" | "YEARBOOK";
export type RevenueEntryRow = {
    label?: RevenueRowLabel | null;
    values?: Money[];
};
export type RevenueEntry = {
    channel?: DistributionChannelsEnum | null;
    data?: RevenueEntryRow[];
};
export type Pricing = {
    minimumPrice?: Money[];
    listPrice?: Money[];
    revenue?: RevenueEntry[];
};
export type ProductTypeConfig = {
    image: string;
    label: string;
    value: string;
};
export type QueryLike<T = any> = {
    loading: boolean;
    data: T | undefined;
    error?: Error;
};
export type ConfigurationOptions = {
    bindingTypeOptions?: string[];
    bindingTypeEnabledOptions?: string[];
    bindingTypeDistroEligibleOptions?: string[];
    coverFinishOptions?: string[];
    coverFinishEnabledOptions?: string[];
    coverFinishDistroEligibleOptions?: string[];
    interiorInkOptions?: string[];
    interiorInkEnabledOptions?: string[];
    interiorInkDistroEligibleOptions?: string[];
    interiorPaperOptions?: string[];
    interiorPaperEnabledOptions?: string[];
    interiorPaperDistroEligibleOptions?: string[];
    pageCountDistroEligible?: boolean;
    trimSizesDistroEligible?: string[];
};
export type PodPackageOptions = {
    bindingTypeOptions: string[];
    coverFinishOptions: string[];
    foilStampOptions: string[];
    interiorInkOptions: string[];
    interiorPaperOptions: string[];
    linenMaterialOptions: string[];
    trimSizes: string[];
};
