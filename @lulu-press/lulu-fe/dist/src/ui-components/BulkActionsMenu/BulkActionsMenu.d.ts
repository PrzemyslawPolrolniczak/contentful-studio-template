import React from "react";
export interface BulkActionsMenuArgs<T extends {}> {
    selectedItems: T[];
}
export interface BulkActionsMenuProps<T extends {}> {
    dataTestId?: string;
    actions: (props: BulkActionsMenuArgs<T>) => React.ReactNode;
    allItems: T[];
    id?: string;
    selectedItems: T[];
    onSelectAll: () => void;
    onSelectNone: () => void;
}
export declare const BulkActionsMenu: <T extends {}>({ dataTestId, actions, allItems, id, selectedItems, onSelectAll, onSelectNone, }: BulkActionsMenuProps<T>) => React.ReactElement;
