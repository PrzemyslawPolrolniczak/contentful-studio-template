import React from "react";
import { ButtonProps } from "../Button/Button";
import { LinkProps } from "../Link/Link";
export interface ButtonLinkProps extends Pick<ButtonProps, "block" | "buttonSize" | "hierarchy" | "responsive" | "disabled" | "target"> {
    className?: string;
    dataTestId?: string;
    url: string;
    children?: React.ReactNode;
}
export type ContentfulButtonLinkProps = Pick<ButtonProps, "buttonSize" | "hierarchy"> & {
    buttonAlignment?: "left" | "center" | "right" | "bottom-left" | "bottom-center" | "bottom-right";
    buttonText?: string;
    linkRef: LinkProps;
    linkedButtonClassNames?: string;
};
export declare const ButtonLink: React.FC<ButtonLinkProps>;
export declare const LinkedButton: React.FC<ContentfulButtonLinkProps & {
    dataTestId?: string;
}>;
