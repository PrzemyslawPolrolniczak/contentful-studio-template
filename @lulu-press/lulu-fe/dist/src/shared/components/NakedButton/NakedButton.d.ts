import React from "react";
export interface NakedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    dataTestId?: string;
}
export declare const NakedButton: React.ForwardRefExoticComponent<NakedButtonProps & React.RefAttributes<HTMLButtonElement>>;
