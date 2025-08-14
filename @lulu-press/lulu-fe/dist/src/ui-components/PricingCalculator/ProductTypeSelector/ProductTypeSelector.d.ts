import React from "react";
import { ProductTypeEnum } from "../types";
interface Props {
    onChange: (printableType: ProductTypeEnum) => void;
}
export declare const ProductTypeSelector: React.FC<Props>;
export {};
