import React from "react";
import { Order, ProductLink } from "./types";
export declare const ORDER_TRACKING_LINK_TEST_ID = "order-tracking-link";
export interface OrderDetailsProps {
    goBackUrl?: string;
    locale: string;
    onCancelOrder?: () => void;
    onDownloadInvoice?: () => void;
    onShowGiftReceipt?: () => void;
    order: Order;
    renderProductLink: (productLinkAttributes: ProductLink) => React.ReactNode;
    getDisplayValue: (rawString?: string, plural?: boolean) => string | undefined;
    getCountryName: (name: string | number, lang: string) => string;
    __debug__ignoreGiftReciptDateConstraints?: boolean;
}
export declare const OrderDetails: React.FunctionComponent<OrderDetailsProps>;
