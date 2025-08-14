import React from "react";
import { ButtonProps } from "../Button/Button";
interface Cta extends ButtonProps {
    action: () => void;
    title: string;
}
interface MainCta extends Cta {
    stayOpenAfterAction?: boolean;
}
interface InnerSection {
    title?: string;
    button?: Cta;
    content: React.ReactNode;
}
export interface BottomSheetProps {
    dataTestId?: string;
    cta: MainCta[];
    title: string;
    onClose: () => void;
    hideCloseButton?: boolean;
    sections: InnerSection[];
    isOpen?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
export declare const BottomSheet: React.FC<BottomSheetProps>;
export {};
