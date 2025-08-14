import React from "react";
import { LinkProps } from "../Link/Link";
export interface BannerTextOnlyProps {
    dataTestId?: string;
    headingCopy: string;
    subheadingCopy: string;
    linkedButtonRef?: LinkProps;
    linkButtonCopy?: string;
    buttonOnClick?: () => void;
    downloadDropdown?: boolean;
    downloadDropdownFieldLabel?: string;
    downloadDropdownOptionsCollection?: {
        items: DownloadDropdownOption[];
    };
    downloadButtonCopy?: string;
    backgroundColor: string;
}
export interface DownloadDropdownOption {
    title: string;
    url: string;
}
export declare const BannerTextOnly: React.FC<BannerTextOnlyProps>;
