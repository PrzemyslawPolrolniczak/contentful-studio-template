import React from "react";
import { ProjectFields, ProjectLineOfBusiness } from "../ProjectSelect/types";
export interface ProjectTileProps extends ProjectFields {
    getDisplayValue: (rawString?: string | null) => string | undefined;
    luluAppUrl?: string;
    selectable?: boolean;
    displaySpecification?: boolean;
    dataTestIdPrefix?: string;
    displayVersionNumber?: boolean;
    whiteBackground?: boolean;
    lineOfBusiness: ProjectLineOfBusiness;
    ProjectStatus?: React.FC;
    displayPrintCost?: boolean;
    luluAdminUrl?: string;
    optionValues?: {
        option: string;
        value: string;
    }[];
}
export declare const ProjectTile: React.FC<ProjectTileProps>;
