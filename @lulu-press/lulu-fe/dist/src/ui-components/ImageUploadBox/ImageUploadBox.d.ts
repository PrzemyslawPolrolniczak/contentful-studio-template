import React from "react";
export interface ImageUploadBoxProps {
    dataTestId?: string;
    deleting?: boolean;
    multiple?: boolean;
    uploading?: boolean;
    fileUrl?: string;
    uploadError?: boolean;
    errorMessage?: string;
    onDrop?: (files: File[]) => void;
    fileValidation?: {
        maxSizeInMB?: number;
        formats?: string[];
    };
    deleteImage?: () => void;
    hasDragIcon?: boolean;
    width?: number | string;
    height?: number | string;
    displayCornerAction?: boolean;
    disable?: {
        isDisabled: boolean;
        disableCopy: string;
    };
    select?: {
        onSelect: () => void;
        isSelected: boolean;
    };
    cta?: {
        action: () => void;
        title: string;
    };
    isUploaded?: boolean;
}
export declare const ImageUploadBox: React.FC<ImageUploadBoxProps>;
