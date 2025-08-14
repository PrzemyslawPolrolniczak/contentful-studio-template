import { DragEvent, HTMLAttributes, InputHTMLAttributes, RefObject } from "react";
type FileError = {
    message: string;
    code: string;
};
type FileRejection = {
    file: File;
    errors: FileError[];
};
type UseFileUploadProps = {
    acceptedFileTypes: string[];
    onDrop: (acceptedFile: File[]) => void;
    maxSize?: number;
    multiple?: boolean;
    onDropRejected?: (fileRejections: FileRejection[]) => void;
};
interface InputExtendedProps extends InputHTMLAttributes<HTMLInputElement> {
    ref: RefObject<HTMLInputElement>;
}
interface DivExtendedProps extends HTMLAttributes<HTMLDivElement> {
    ref: RefObject<HTMLDivElement>;
    onDrop: (evt: DragEvent) => void;
}
export declare const useFileUpload: ({ acceptedFileTypes, onDrop, maxSize, multiple, onDropRejected, }: UseFileUploadProps) => {
    acceptedFiles: File[];
    fileWasRejected: boolean;
    getInputProps: () => InputExtendedProps;
    getRootProps: () => DivExtendedProps;
};
export {};
