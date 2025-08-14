import React from "react";
import { LinkProps } from "../Link/Link";
import { PricingCategoryData } from "../PricingTable/PricingTable";
export interface PricingTableAccordionFormProps {
    dataTestId?: string;
    title: string;
    description?: string;
    logo?: string;
    condensedLogo?: boolean;
    footnote?: React.ReactNode | React.ReactNode[];
    helperLink?: LinkProps;
    withCheckbox: boolean;
    value?: string;
    name?: string;
    currencies: string[];
    selected: boolean;
    disabled?: boolean;
    initiallyExpanded?: boolean;
    pricingInfo: PricingData;
    onChange?: () => void;
}
export interface PricingData {
    channel: string;
    data?: PricingCategoryData[];
}
export declare const PricingTableAccordionForm: React.FC<PricingTableAccordionFormProps>;
