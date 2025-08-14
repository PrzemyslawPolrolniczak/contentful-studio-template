import React from "react";
import { Icons } from "../../icon-types";
import { LinkProps } from "../Link/Link";
export interface LinkedIconAndTextProps {
    dataTestId?: string;
    className?: string;
    iconSize?: number;
    linkRef: LinkProps;
    icon?: Icons;
}
export declare const LinkedIconAndText: React.FC<LinkedIconAndTextProps>;
