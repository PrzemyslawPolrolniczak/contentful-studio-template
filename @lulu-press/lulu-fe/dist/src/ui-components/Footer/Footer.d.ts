import React from "react";
import { IconWithMetadataProps } from "../IconWithMetadata/IconWithMetadata";
import { LinkProps } from "../Link/Link";
export type LinkType = {
    name: string;
    newTab: boolean;
    page?: {
        url?: string;
    } | null;
    url?: string | null;
};
type LinkCollectionType = {
    name: string;
    rootLink?: LinkType;
    sublinksCollection: {
        items: LinkType[];
    };
};
type FooterData = {
    apiAltText?: string;
    bCorpAltText?: string;
    copyrightText?: string;
    legalLinksCollection?: Omit<LinkProps, "className" | "dataTestId" | "description" | "__typename">[];
    luluAltText?: string;
    luluJrAltText?: string;
    theTiltAltText?: string;
    navigationLinksCollection?: (LinkType | LinkCollectionType)[];
    newsletterText?: string;
    socialLinksCollection?: Omit<IconWithMetadataProps, "dataTestId">[];
};
export interface FooterProps {
    footerData?: FooterData;
    locale?: string;
    localeOptions?: {
        label: string;
        value: string;
    }[];
    newsletterForm?: React.ReactNode;
    updateLocale?: (arg: string) => void;
}
export declare const Footer: React.FC<FooterProps>;
export {};
