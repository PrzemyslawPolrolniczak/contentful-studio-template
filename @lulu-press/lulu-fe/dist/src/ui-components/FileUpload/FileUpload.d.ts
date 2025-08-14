import React from "react";
import { Icons } from "../../icon-types";
export interface FileUploadProps {
    dataTestId?: string;
    file?: FileObject;
    uploading: boolean;
    requirements?: string | React.ReactNode;
    type: FileType;
    accept?: string[];
    success?: boolean;
    successMessage?: string;
    successIcon?: Icons;
    fileCopy: string;
    fileCopyPrefix?: string;
    formatErrorCopy: string;
    uploadError?: boolean;
    UploadWarning?: React.FC | null;
    uploadErrorCopy?: string;
    fileStalledMessage?: string;
    warningAction?: MessageActionType;
    errorAction?: MessageActionType;
    successAction?: MessageActionType;
    label?: string;
    onDrop: (acceptedFile: File) => void;
    onLoadingCancel?: () => void;
    disabled?: boolean;
    customUploadMessage?: string;
    forceLoadingProgress?: boolean;
    height?: string;
    fontSize?: {
        icon?: string;
        text?: string;
    };
    customProgress?: number;
    preventProgressDecrementation?: boolean;
}
export interface FileUploadMessagesProps {
    messages: Message[];
    type: "error" | "warning" | "success";
    action?: MessageActionType;
    icon?: Icons;
}
export interface Message {
    code?: number;
    message?: string | JSX.Element;
}
export interface FileObject {
    errors?: Message[];
    filename?: string;
    pageCount?: number;
    progress?: number;
    status?: string;
    warnings?: Message[];
    isStalled?: boolean;
}
export type FileType = "cover" | "interior" | "ebook" | "event" | "orders";
export interface MessageActionType {
    title: string;
    action: () => void;
    loading: boolean;
    error: boolean;
}
export declare const FileUpload: React.FC<FileUploadProps>;
