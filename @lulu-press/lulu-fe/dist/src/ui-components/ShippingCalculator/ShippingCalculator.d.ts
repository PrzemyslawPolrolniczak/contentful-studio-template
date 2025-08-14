import React from "react";
import { Country, CountryState, QueryLike, ShippingMethod, TotalPricing } from "../PricingCalculator/types";
import { Money } from "../PricingCalculator/types";
import { ProjectFields } from "../ProjectSelect/types";
import { ProjectTileProps } from "../ProjectTile/ProjectTile";
export interface ShippingCalculatorProps {
    dataTestId?: string;
    locale: string;
    getCountryName: (countryName: string, locale: string) => string;
    shippingCountriesQuery: QueryLike<Country[]>;
    shippingMethodsQuery: QueryLike<ShippingMethod[]>;
    totalPricesQuery?: QueryLike<TotalPricing | null>;
    onRequestTotalPrices?: (podPackageId: string, pageCount: number, quantity: number) => void;
    onRequestShippingMethods: (podPackageId: string, pageCount: number, quantity: number, country: string, state?: string) => void;
    onRequestShippingCountries: () => void;
    onRequestCountryStates?: (countryCode: string) => void;
    podPackageId: string;
    pageCount: number;
    pricePerBook?: Money | null;
    usStatesRequired?: boolean;
    countryStatesQuery?: QueryLike<CountryState[] | null>;
    projectSelect?: {
        onRequestProjects: () => void;
        projects: ProjectFields[];
        projectsLoading: boolean;
        projectTileOptions: Pick<ProjectTileProps, "luluAppUrl" | "lineOfBusiness" | "displayVersionNumber" | "getDisplayValue" | "displayPrintCost">;
    };
    shippingAndHandlingOnly?: boolean;
}
export declare const ShippingCalculator: React.FC<ShippingCalculatorProps>;
