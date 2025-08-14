import React from "react";
interface Props {
    uploading: boolean;
    progress: number | null;
    status?: string;
    fileName?: string;
    customUploadMessage?: string;
    forceLoadingProgress?: boolean;
    preventProgressDecrementation?: boolean;
}
export declare const FileUploadProgress: React.FC<Props>;
export {};
