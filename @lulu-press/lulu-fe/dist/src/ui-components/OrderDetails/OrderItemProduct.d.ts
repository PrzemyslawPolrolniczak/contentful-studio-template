import React from "react";
import { OrderLineItem, ProductLink } from "./types";
interface OrderItemProductProps extends OrderLineItem {
    renderProductLink: (productLinkAttributes: ProductLink) => React.ReactNode;
    orderId: string;
    locale: string;
    error?: boolean;
    productTypeName: string;
}
export declare const OrderItemProduct: React.FC<OrderItemProductProps>;
export {};
