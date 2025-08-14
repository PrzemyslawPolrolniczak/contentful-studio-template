import React from "react";
import { SingleValue } from "react-select";
import { DownloadDropdownOption } from "../BannerTextOnly/BannerTextOnly";
import { ButtonProps } from "../Button/Button";
import { Option } from "../CustomSelect/CustomSelect";
export interface DownloadDropdownProps {
    label: string;
    placeholder: string;
    errorText?: string;
    buttonText?: string;
    helpText?: string;
    hasDownloadIcon?: boolean;
    hasTooltip?: boolean;
    isDisabled?: boolean;
    buttonHierarchy?: ButtonProps["hierarchy"];
    downloadContentfulAssetCollection: {
        items: DownloadDropdownOption[];
    };
    downloadExternalAssetCollection: {
        items: DownloadDropdownOption[];
    };
    onChange?: (event: SingleValue<Option>) => void;
}
export declare const DownloadDropdown: React.FC<DownloadDropdownProps>;
