import React from "react";
export type Price = {
    amount: number;
    currency: string;
};
type ProductAttribute = {
    name: string;
    value: string | string[];
};
export type CartItemDiscount = {
    code: string;
    type: "FIXED" | "PERCENTAGE";
    value: number;
};
export type CartItemType = {
    product: {
        id: string;
        name: string;
        type: string;
        thumbnailUrl: string;
        attributes: ProductAttribute[];
    };
    quantity: number;
    unitPrice: Price[];
    totalPrice: Price[];
    discounts?: CartItemDiscount[];
    discountedTotalPrice?: Price[];
    itemRedirectURL: string;
};
export type Cart = {
    items: CartItemType[];
    lastAddedItemId?: string;
    subtotal: Price[];
};
export type CartDrawerProps = {
    visible?: boolean;
    loggedIn?: boolean;
    ignoreScroll?: boolean;
    customPageHeaderHeight?: number;
    classnames?: string;
    locale?: string;
    currency: string;
    totalItemsText: string;
    cart: Cart;
    onClose: () => void;
    onRedirect: () => void;
    onQuantityChange: (id: string, quantity: number) => Promise<any>;
};
export declare const CartDrawer: ({ visible, loggedIn, customPageHeaderHeight, onClose, onQuantityChange, cart: { items, lastAddedItemId, subtotal }, currency, classnames, onRedirect, totalItemsText, locale, ignoreScroll, }: CartDrawerProps) => React.JSX.Element | null;
export {};
