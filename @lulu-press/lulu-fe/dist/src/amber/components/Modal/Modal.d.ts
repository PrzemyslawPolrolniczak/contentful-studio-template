import React from "react";
import { Icons } from "../../icon-types";
import { ButtonProps } from "../Button/Button";
import { CheckboxProps } from "../Checkbox/Checkbox";
type Cta = {
    action: () => void;
    title: string;
} & Omit<ButtonProps, "onClick" | "className" | "dataTestId">;
export interface ModalProps {
    dataTestId?: string;
    cta: Cta[];
    isOpen: boolean;
    onClose: () => void;
    title: string;
    titleIconName?: Icons;
    maxWidth?: number | string;
    portalContainer?: HTMLElement;
    content?: string;
    hideCloseButton?: boolean;
    bodyInstanceSlot?: React.ReactNode;
    headerInstanceSlot?: React.ReactNode;
    checkboxProps?: CheckboxProps;
    modalClassName?: string;
    footerClassName?: string;
}
export declare const Modal: React.FC<ModalProps>;
export {};
