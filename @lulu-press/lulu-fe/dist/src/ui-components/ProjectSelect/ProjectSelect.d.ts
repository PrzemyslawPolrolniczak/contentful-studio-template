import React from "react";
import { SingleValue } from "react-select";
import { Option } from "../CustomSelect/CustomSelect";
import { ProjectTileProps } from "../ProjectTile/ProjectTile";
import { ProjectFields } from "./types";
export interface ProjectSelectProps {
    selectedValue: ProjectFields | null;
    onChange: (value: SingleValue<SelectOption<ProjectFields>>) => void;
    fetchProjects: (input?: string) => void;
    projects: ProjectFields[];
    projectsLoading: boolean;
    label?: string;
    placeholder?: string;
    displaySelectedValue?: boolean;
    error?: string;
    stopFetchingProjects?: boolean;
    projectIdsToOmit?: string[];
    defaultValue?: ProjectFields | null;
    dataTestIdPrefix?: string;
    projectTileOptions: Pick<ProjectTileProps, "luluAppUrl" | "lineOfBusiness" | "displayVersionNumber" | "getDisplayValue" | "displayPrintCost">;
}
export declare const ProjectSelect: React.FC<ProjectSelectProps>;
type SelectOption<SelectType> = SelectType & Option;
export {};
