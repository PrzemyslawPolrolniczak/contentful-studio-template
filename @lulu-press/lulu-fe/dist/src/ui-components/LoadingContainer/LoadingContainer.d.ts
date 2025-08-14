import React, { CSSProperties } from "react";
export interface LoadingContainerProps {
    dataTestId?: string;
    loading: boolean;
    containerStyles?: CSSProperties;
    fogOpacity?: number;
    children?: React.ReactNode;
}
export declare const LoadingContainer: React.FC<LoadingContainerProps>;
