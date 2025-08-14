import { Row, RowData, RowSelectionState, SortingState, TableOptions } from "@tanstack/react-table";
import React from "react";
import { Icons } from "../../icon-types";
export declare const useSorting: (initialValue?: SortingState) => {
    sorting: SortingState;
    setSorting: React.Dispatch<React.SetStateAction<SortingState>>;
};
export declare const useRowSelection: (initialValue?: RowSelectionState) => {
    rowSelection: RowSelectionState;
    setRowSelection: React.Dispatch<React.SetStateAction<RowSelectionState>>;
};
declare module "@tanstack/react-table" {
    interface ColumnMeta<TData extends RowData, TValue> {
        isAlignedRight: boolean;
    }
}
interface SwipeActionConfig {
    type: string;
    iconName: Icons;
    label: string;
    onSwipeAction: (type: string, rowId: string) => void;
}
export interface TableProps<T> extends Omit<TableOptions<T>, "getCoreRowModel"> {
    dataTestId?: string;
    hasRowSelectionIcon?: boolean;
    hasTableHeaderDisplayed?: boolean;
    headerClassName?: string;
    headerStyle?: React.CSSProperties;
    rowSwipeActionEnabled?: (row: Row<T>) => SwipeActionConfig | null;
}
export declare const Table: <T extends {}>({ dataTestId, hasRowSelectionIcon, hasTableHeaderDisplayed, headerClassName, headerStyle, rowSwipeActionEnabled, ...restProps }: TableProps<T>) => React.JSX.Element;
export {};
