import React from "react";
import { Colors } from "../../constants";
import { Icons } from "../../icon-types";
type Size = "small" | "medium";
type OpeningDirection = "down" | "up";
export type Item<T> = {
    label: string;
    value: T;
    leftIcon?: Icons;
    rightIcon?: Icons;
};
interface SharedProps<T> {
    dataTestId?: string;
    size?: Size;
    initialOpeningDirection?: OpeningDirection;
    onSelect: (value: T) => void;
    items: Item<T>[];
}
interface BaseActionableVariantProps {
    variant?: "actionable";
    leftIcon?: never;
    defaultValue?: never;
    labelColor?: never;
}
type ActionableVariantProps = (BaseActionableVariantProps & {
    asSplitButton: true;
    label: string;
}) | (BaseActionableVariantProps & {
    asSplitButton?: false;
    label?: never;
});
interface SelectableVariantProps<T> {
    variant?: "selectable";
    leftIcon?: Icons;
    defaultValue?: T;
    label?: string;
    labelColor?: Colors;
    asSplitButton?: never;
}
export type SelectProps<T> = (SharedProps<T> & ActionableVariantProps) | (SharedProps<T> & SelectableVariantProps<T>);
export declare const Dropdown: <T>({ dataTestId, variant, size, initialOpeningDirection, leftIcon, label, labelColor, onSelect, defaultValue, items, asSplitButton, }: SelectProps<T>) => React.JSX.Element;
export {};
