import React from "react";
import { CartDrawerProps, CartItemType } from "../CartDrawer";
export type OptimisticItemType = {
    item: CartItemType;
    isLoading: boolean;
    isRemoved: boolean;
};
interface ChildrenInterface extends OptimisticItemType {
    onQuantityChange: (id: string, quantity: number) => Promise<any>;
}
export interface OptimisticItemsControllerProps {
    items: CartItemType[];
    lastAddedItemId?: string;
    onQuantityChange: CartDrawerProps["onQuantityChange"];
    children: ({ item, onQuantityChange, isRemoved, isLoading }: ChildrenInterface) => JSX.Element;
    hideRemovedItems?: boolean;
    onlyDisplayLastAddedItem?: boolean;
}
export declare const OptimisticItemsController: ({ items, onQuantityChange, children, hideRemovedItems, lastAddedItemId, onlyDisplayLastAddedItem, }: OptimisticItemsControllerProps) => React.JSX.Element;
export {};
