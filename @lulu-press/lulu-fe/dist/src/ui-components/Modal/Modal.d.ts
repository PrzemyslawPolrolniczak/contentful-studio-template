import React from "react";
import { Colors } from "../../constants";
import { Icons } from "../../icon-types";
import { ButtonProps } from "../Button/Button";
export type ModalCTAProps = {
    action: () => void;
    title: string;
} & Pick<ButtonProps, "disabled" | "hierarchy" | "loading">;
export interface ModalProps {
    dataTestId?: string;
    cta?: ModalCTAProps[];
    customHeaderIcon?: {
        height?: string | number;
        width?: string | number;
        src: string;
        alt: string;
    };
    headerIcon?: Icons;
    headerIconColor?: Colors;
    headerIconSize?: number;
    isOpen: boolean;
    modalStatus?: "info" | "warning" | "success" | "error";
    onClose?: () => void;
    title?: string;
    titlePosition?: "center" | "left";
    isTitleResponsiveHorizontalAlign?: boolean;
    increasedMinimumWidth?: boolean;
    width?: number | string;
    portalContainer?: HTMLElement;
    children?: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
