import React from "react";
import { LinkType } from "./Footer";
type FooterLinkCollectionProps = {
    rootLink?: LinkType;
    linkClassnames?: string;
    subLinks: LinkType[];
    name: string;
};
export declare const FooterLinkCollection: React.FC<FooterLinkCollectionProps>;
export {};
