import React from "react";
export interface ErrorPageProps {
    header?: string;
    description?: string;
    actionText?: string;
    errorId?: string;
    actionFunction?: () => void;
}
export declare const ErrorPage: React.FC<ErrorPageProps>;
