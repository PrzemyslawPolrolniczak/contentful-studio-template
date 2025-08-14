import React from "react";
import { ButtonProps } from "../Button/Button";
export type BasicCardType = "action" | "positive" | "negative" | "neutral" | "info";
type Cta = {
    action: () => void;
    title: string;
} & Omit<ButtonProps, "onClick" | "className" | "dataTestId">;
export interface BasicCardProps {
    dataTestId?: string;
    type?: BasicCardType;
    title?: string;
    content: React.ReactNode;
    cta?: Cta;
}
export declare const BasicCard: React.FC<BasicCardProps>;
export interface CardWithImageProps {
    dataTestId?: string;
    label: string;
    image?: string;
    textLine1: React.ReactNode;
    textLine2?: React.ReactNode;
}
export declare const CardWithImage: React.FC<CardWithImageProps>;
export interface ModularCardProps {
    dataTestId?: string;
    instanceSlot?: React.ReactNode;
    title?: string;
    content?: React.ReactNode;
    cta?: Cta[];
    isBoxed?: boolean;
}
export declare const ModularCard: React.FC<ModularCardProps>;
export {};
