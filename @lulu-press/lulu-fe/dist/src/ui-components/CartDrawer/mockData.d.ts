import { Cart, CartItemType } from "./CartDrawer";
export declare const cartItem: CartItemType;
export declare const cartItemWithDiscount: CartItemType;
export declare const emptyCart: Cart;
export declare const cartWithSingleItem: Cart;
export declare const cartWithMultipleItems: Cart;
export declare const tenPercentVolumeDiscount: {
    discountPercentage: number;
    discountAmount: {
        amount: number;
        currency: string;
    }[];
};
export declare const multipleVolumeDiscounts: {
    discountPercentage: number;
    discountAmount: {
        amount: number;
        currency: string;
    }[];
}[];
