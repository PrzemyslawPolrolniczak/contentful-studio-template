import { ProductTypeEnum } from "./types";
export declare const useDownloadCoverTemplate: (productType: ProductTypeEnum, podPackageId: string | null, pageCount: number | null) => {
    downloadCoverTemplate: () => Promise<void>;
    downloadingCoverTemplate: boolean;
};
