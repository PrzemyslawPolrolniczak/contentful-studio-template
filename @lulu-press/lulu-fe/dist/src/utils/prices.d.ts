import { Price } from "../ui-components";
export declare const validInput: (input: string) => boolean;
export declare const validAmount: (amount: string) => boolean;
export declare const printMoney: (amount?: string | number, locale?: string) => string | null;
export declare const getAmountByCurrency: (prices: Price[], currency: string) => number | undefined;
