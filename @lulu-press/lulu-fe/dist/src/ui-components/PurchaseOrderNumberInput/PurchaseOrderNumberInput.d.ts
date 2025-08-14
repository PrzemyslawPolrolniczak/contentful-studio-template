import React from "react";
export interface PurchaseOrderNumberInputProps {
    onAdd: (orderNumber: string) => void;
}
export declare const PurchaseOrderNumberInput: React.FC<PurchaseOrderNumberInputProps>;
