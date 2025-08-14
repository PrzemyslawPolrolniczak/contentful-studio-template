import React from "react";
export interface ToggleProps {
    dataTestId?: string;
    alignLabel?: "left" | "right";
    type: "bleed" | "margin" | "wrap" | "folds" | "trim" | "holePunch" | "all";
    active: boolean;
    label: string;
    onChange: (value: boolean) => void;
    /**
     * The width of the toggle container is not dynamic.
     * More details [here](https://app.clickup.com/t/8678vw7zm).
     */
    activeStateLabel?: string;
    inactiveStateLabel?: string;
    customClassNames?: string;
}
export declare const Toggle: React.FC<ToggleProps>;
