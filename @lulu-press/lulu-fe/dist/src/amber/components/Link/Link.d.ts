import React from "react";
import { LinkProps as ClassicLinkProps } from "../../../ui-components/Link/Link";
export type LinkSize = "medium" | "small";
export type LinkVariant = "standard" | "highlighted" | "muted";
export interface LinkProps extends Omit<ClassicLinkProps, "className" | "description"> {
    variant?: LinkVariant;
    size?: LinkSize;
    underlined?: boolean;
}
export declare const Link: React.FC<LinkProps>;
