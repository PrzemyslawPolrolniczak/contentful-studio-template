import { FC } from "react";
interface FooterSelectProps {
    label: string;
    name: string;
    onClick: (arg: string) => void;
    options: {
        label: string;
        value: string;
    }[];
    selectedValue: string;
}
export declare const FooterSelect: FC<FooterSelectProps>;
export {};
