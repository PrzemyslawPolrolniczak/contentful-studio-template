import React from "react";
import { CartDrawerProps, CartItemType } from "../CartDrawer";
export interface CartItemProps {
    item: CartItemType;
    onQuantityChange?: CartDrawerProps["onQuantityChange"];
    isLoading?: boolean;
    isRemoved?: boolean;
    currency: string;
    totalItemsText?: string;
    locale?: string;
}
export declare const CartItem: ({ isLoading, item, currency, onQuantityChange, isRemoved, totalItemsText, locale, }: CartItemProps) => React.JSX.Element;
