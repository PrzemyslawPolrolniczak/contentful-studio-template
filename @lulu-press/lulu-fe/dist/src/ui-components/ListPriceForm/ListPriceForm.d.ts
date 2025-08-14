import React from "react";
export interface ListPriceFormProps {
    dataTestId?: string;
    active?: boolean;
    prices: ListPriceData[];
    disabled?: boolean;
    onChange: (listPrices: {
        amount: number;
        currency: string;
    }[]) => void;
    onInvalidInput?: () => void;
}
export interface ListPriceData {
    currency: string;
    listPrice: string;
    minimumPrice: string;
    maximumPrice?: string | null;
    referencePrice?: string | null;
}
export declare const ListPriceForm: React.FC<ListPriceFormProps>;
