import { KeyboardEvent } from "react";
type KeyboardDropdownControlsProps = {
    trigger: React.RefObject<HTMLElement> | HTMLElement | undefined | null;
    wrapper: React.RefObject<HTMLElement> | HTMLElement | undefined | null;
    onClose: () => void;
};
export declare const getKeyboardDropdownControlsHandler: ({ trigger, wrapper, onClose, }: KeyboardDropdownControlsProps) => (event: KeyboardEvent<HTMLDivElement>) => false | void;
export {};
