import React from "react";
import { DocumentDimension } from "../PricingCalculator/types";
export interface AdvancedProductSpecsTableProps {
    dataTestId?: string;
    podPackageId?: string;
    minPages?: number;
    maxPages?: number;
    dimensionsIn?: DocumentDimension;
    dimensionsMm?: DocumentDimension;
}
export declare const AdvancedProductSpecsTable: React.FC<AdvancedProductSpecsTableProps>;
