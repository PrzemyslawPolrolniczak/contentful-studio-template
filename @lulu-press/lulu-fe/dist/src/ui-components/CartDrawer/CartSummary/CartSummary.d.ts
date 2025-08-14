import React from "react";
import { Cart, CartDrawerProps, Price } from "../CartDrawer";
export type AppliedVolumeDiscount = {
    discountPercentage: number;
    discountAmount: Price[];
};
export interface CartSummaryProps extends Pick<Cart, "subtotal">, Pick<CartDrawerProps, "onClose" | "onRedirect" | "currency"> {
    isCartEmpty: boolean;
    withTopBorder?: boolean;
    onCartPage?: boolean;
    loading?: boolean;
    appliedVolumeDiscounts?: AppliedVolumeDiscount[];
    totalDiscountAmount?: Price[];
    locale?: string;
}
export declare const CartSummary: ({ subtotal, onClose, currency, onRedirect, isCartEmpty, withTopBorder, onCartPage, loading, appliedVolumeDiscounts, totalDiscountAmount, locale, }: CartSummaryProps) => React.JSX.Element;
