import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import { Button as FeButton, ButtonProps } from "../@lulu-press/lulu-fe";

export const Button = (props: ButtonProps) => <FeButton {...props} />;

export const ButtonDefinition: ComponentDefinition = {
  id: "button",
  name: "Button",
  category: "Classic Lulu-fe",
  builtInStyles: ["cfMargin"],
  variables: {
    name: {
      type: "Text",
      displayName: "Name",
      group: "content",
      defaultValue: "Button",
    },
    dataTestId: {
      type: "Text",
      displayName: "Test ID",
      group: "content",
    },
    downloadHref: {
      type: "Text",
      displayName: "Download Link",
      group: "content",
    },
    downloadTitle: {
      type: "Text",
      displayName: "Download Title",
      group: "content",
    },
    block: {
      type: "Boolean",
      displayName: "Display as block?",
      group: "style",
      defaultValue: false,
    },
    responsive: {
      type: "Boolean",
      displayName: "Responsive?",
      group: "style",
      defaultValue: false,
    },
    download: {
      type: "Boolean",
      displayName: "Download Button?",
      group: "style",
      defaultValue: false,
    },
    hasDownloadIcon: {
      type: "Boolean",
      displayName: "Has download icon?",
      group: "style",
      defaultValue: false,
    },
    isVerticallyStretched: {
      type: "Boolean",
      displayName: "Is vertically stretched?",
      group: "style",
      defaultValue: false,
    },
    buttonSize: {
      type: "Text",
      displayName: "Button Size",
      group: "style",
      validations: {
        in: [
          {
            value: "large",
            displayName: "Large",
          },
          {
            value: "medium",
            displayName: "Medium",
          },
          {
            value: "small",
            displayName: "Small",
          },
          {
            value: "extra-small",
            displayName: "Extra small",
          },
        ],
      },
    },
    hierarchy: {
      type: "Text",
      displayName: "Hierarchy",
      group: "style",
      validations: {
        in: [
          {
            value: "primary",
            displayName: "Primary",
          },
          {
            value: "secondary",
            displayName: "Secondary",
          },
          {
            value: "tertiary",
            displayName: "Tertiaty",
          },
          {
            value: "tertiary-white",
            displayName: "Tertiary white",
          },
        ],
      },
      defaultValue: "secondary",
    },
    icon: {
      type: "Text",
      displayName: "Icon",
      validations: {
        in: [
          {
            value: "",
            displayName: "None",
          },
          {
            value: "arrowRight",
            displayName: "Arrow Right",
          },
          {
            value: "arrowLeft",
            displayName: "Arrow Left",
          },
          {
            value: "chevronRight",
            displayName: "Chevron Right",
          },
          {
            value: "chevronLeft",
            displayName: "Chevron Left",
          },
        ],
      },
      defaultValue: undefined,
    },
    downloadForceNewTab: {
      type: "Boolean",
      displayName: "Force download in new tab?",
      group: "content",
      defaultValue: false,
    },
    hasModalStyles: {
      type: "Boolean",
      displayName: "Has modal styles?",
      group: "style",
      defaultValue: false,
    },
    children: {
      type: "Text",
      displayName: "Text",
      group: "content",
      defaultValue: "Click Me!",
    },
  },
};
