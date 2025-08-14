import { Option } from "../ui-components";
export interface TrimSizeType extends Option {
    previewImage: string;
    previewRetinaImage: string;
    mobilePreviewImage: string;
    comparisonImage: string;
    mobileComparisonImage: string;
    mobilePreviewRetinaImage: string;
    comparisonRetinaImage: string;
    mobileComparisonRetinaImage: string;
    description: string;
    availableForGlobalDistribution: boolean;
}
export declare const useTrimSizes: () => TrimSizeType[];
