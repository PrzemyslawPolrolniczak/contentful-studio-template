import { Icons } from "../icon-types";
import { Discount, Money } from "../types";
import { StatusInfoProps } from "../ui-components";
export declare const getOrderNumber: (id: string | null | undefined, referenceNo: string | null | undefined) => string | null | undefined;
export declare const getTotalProductPriceAfterDiscounts: (totalAmount: Money | undefined | null, discounts: Discount[]) => number;
export declare const useStatusIcons: () => Record<string, {
    icon: Icons;
    statusLabel: string;
    statusLevel: StatusInfoProps["statusLevel"];
}>;
