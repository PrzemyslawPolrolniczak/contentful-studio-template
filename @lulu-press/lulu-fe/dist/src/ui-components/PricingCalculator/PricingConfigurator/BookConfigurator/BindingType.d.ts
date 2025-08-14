import React from "react";
import { AttributeOptionValue } from "../AttributeSelector/AttributeSelector";
interface Props {
    onChange: (option: string) => void;
    activeBindingType: string | null;
    values: AttributeOptionValue[];
}
export declare const BindingType: React.FC<Props>;
export {};
