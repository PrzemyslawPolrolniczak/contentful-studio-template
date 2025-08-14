import { PodPackage } from "./types";
export declare enum ConfiguratorActionType {
    RESET_CONFIGURATION = "RESET_CONFIGURATION",// nullify the configurator, keeps the pod packages, enables initial data
    CHANGE_POD_OPTION = "CHANGE_POD_OPTION",
    CHANGE_PAGE_COUNT = "CHANGE_PAGE_COUNT",
    SET_POD_PACKAGES = "SET_POD_PACKAGES",
    UPDATE_CONFIGURATION = "UPDATE_CONFIGURATION"
}
export interface ConfiguratorState {
    trimSize: string | null;
    bindingType: string | null;
    coverFinish: string | null;
    interiorInk: string | null;
    interiorPaper: string | null;
    pageCount: number | null;
    podPackages: PodPackage[];
}
type PodOption = Extract<keyof ConfiguratorState, "trimSize" | "bindingType" | "coverFinish" | "interiorInk" | "interiorPaper">;
export type ConfiguratorAction = {
    type: ConfiguratorActionType.RESET_CONFIGURATION;
    payload?: {
        configuration: Partial<ConfiguratorState>;
    };
} | {
    type: ConfiguratorActionType.CHANGE_POD_OPTION;
    payload: {
        option: PodOption;
        value: string;
    };
} | {
    type: ConfiguratorActionType.CHANGE_PAGE_COUNT;
    payload: {
        value: number | null;
    };
} | {
    type: ConfiguratorActionType.SET_POD_PACKAGES;
    payload: {
        podPackages: PodPackage[];
    };
} | {
    type: ConfiguratorActionType.UPDATE_CONFIGURATION;
    payload: {
        options: Partial<ConfiguratorState>;
    };
};
export declare const configuratorReducer: (state: ConfiguratorState, action: ConfiguratorAction) => ConfiguratorState;
export {};
