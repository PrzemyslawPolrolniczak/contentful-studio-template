import React, { ComponentPropsWithoutRef } from "react";
import { AttributeOption } from "./AttributeOption";
export type AttributeOptionValue = Omit<ComponentPropsWithoutRef<typeof AttributeOption>, "onChange" | "nonInteractive" | "selected">;
interface Props {
    title: string;
    isSubSection?: boolean;
    onChange?: (option: string) => void;
    activeValue: string | null;
    values: AttributeOptionValue[];
    nonInteractive?: boolean;
    rowLayoutItem?: boolean;
    dataTestId?: string;
}
export declare const AttributeSelector: React.FC<Props>;
export {};
