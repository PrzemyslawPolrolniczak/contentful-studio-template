import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import { Link as FeLink, LinkProps } from "../@lulu-press/lulu-fe";

interface LinkComponentProps extends Omit<LinkProps, "page"> {
  // page?: string;
}

export const Link = (props: LinkComponentProps) => <FeLink {...props} />; // page={{ url: props.page }}

export const LinkDefinition: ComponentDefinition = {
  id: "link",
  name: "Link",
  category: "Classic Lulu-fe",
  children: true,
  variables: {
    className: {
      type: "Text",
      displayName: "Custom class names",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    dataTestId: {
      type: "Text",
      displayName: "Test ID",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    name: {
      type: "Text",
      displayName: "Name",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    description: {
      type: "Text",
      displayName: "Description",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    newTab: {
      type: "Boolean",
      defaultValue: false,
      displayName: "Open in new tab?",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    url: {
      type: "Text",
      displayName: "URL",
      defaultValue: undefined,
      validations: {
        bindingSourceType: ["manual", "entry"],
        format: "URL",
      },
    },
    // This should not be required — the component detects whether the route is internal or not, so we don't need this prop in Studio.
    // page: {
    //   type: "Text",
    //   displayName: "Internal Page",
    //   validations: {
    //     bindingSourceType: ["manual", "entry"],
    //     format: "URL",
    //   },
    // },
  },
};
