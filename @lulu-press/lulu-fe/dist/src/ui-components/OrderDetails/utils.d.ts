import { Icons } from "../../icon-types";
import { Order } from "./types";
export declare const getProductTypeIcon: (type?: string) => Icons.FormatsBook | Icons.FormatsCalendar | Icons.FormatsEbook;
export declare const showGiftReceipt: (order: Order, ignoreDate?: boolean) => boolean;
