import React, { ReactElement } from "react";
export interface AccordionProps {
    dataTestId?: string;
    items?: ReactElement<AccordionItemProps>[] | ReactElement<AccordionItemProps>;
    allowMultiSelect?: boolean;
    activeIndices?: number[] | null;
    unmountCollapsedItems?: boolean;
    children?: React.ReactNode;
}
export interface AccordionItemProps {
    dataTestId?: string;
    title: React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const Accordion: React.FC<AccordionProps>;
export declare const AccordionItem: React.FC<AccordionItemProps>;
