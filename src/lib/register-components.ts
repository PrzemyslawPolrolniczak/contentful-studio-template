import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";
import { SiteButtonDefinition, SiteButtonComponent } from "@studio/SiteButton";
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from "@studio/ExternalVideo";
import {
  Badge,
  Button,
  Carousel,
  Colors,
  Heading,
  Icons,
  Link,
  MEDIA_BREAKPOINTS,
} from "../../@lulu-press/lulu-fe";
import { SimpleButton } from "../../components/SimpleButton";
import {
  MainBannerDefinition,
  WrappedMainBanner,
} from "../../components/MainBanner";
import { ButtonDefinition } from "../../components/Button";
import { LinkDefinition } from "../../components/Link";
import { CarouselDefinition } from "../../components/Carousel";

const mappedIcons = Object.values(Icons).map((icon) => {
  return {
    value: icon,
    displayName: icon,
  };
});

defineComponents([
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
  {
    component: SimpleButton,
    definition: {
      id: "simple-button",
      name: "Simple Button",
      category: "Custom Components",
      variables: {
        text: {
          displayName: "Text",
          type: "Text",
          defaultValue: "Click me",
        },
      },
    },
  },
  {
    component: Heading,
    definition: {
      id: "classic-lulu-fe-heading",
      name: "Heading",
      category: "Classic Lulu-fe",
      variables: {
        dataTestId: {
          displayName: "Data Test Id",
          type: "Text",
          defaultValue: undefined,
        },
        title: {
          displayName: "Title",
          type: "Text",
          defaultValue: "Title",
        },
        description: {
          displayName: "Description",
          type: "Text",
          defaultValue: undefined,
        },
        noPaddingTop: {
          displayName: "Without top padding",
          type: "Boolean",
          defaultValue: false,
          group: "style",
        },
      },
    },
  },
  {
    component: Badge,
    definition: {
      id: "amber-lulu-fe-badge",
      name: "Badge",
      category: "Amber Lulu-fe",
      variables: {
        text: {
          displayName: "Text",
          type: "Text",
          defaultValue: "Click me",
        },
        variant: {
          displayName: "Variant",
          type: "Text",
          defaultValue: "neutral",
          validations: {
            in: [
              {
                value: "neutral",
                displayName: "Neutral",
              },
              {
                value: "info",
                displayName: "Info",
              },
              {
                value: "success",
                displayName: "Success",
              },
              {
                value: "error",
                displayName: "Error",
              },
              {
                value: "muted",
                displayName: "Muted",
              },
              {
                value: "outlined",
                displayName: "Outlined",
              },
              {
                value: "dark",
                displayName: "Dark",
              },
            ],
          },
        },
        leftIcon: {
          type: "Text",
          displayName: "Left Icon",
          validations: {
            in: mappedIcons,
          },
          defaultValue: undefined,
        },
      },
    },
  },
  {
    component: Badge,
    definition: {
      id: "amber-lulu-fe-badge-number",
      name: "Badge: number variant",
      category: "Amber Lulu-fe",
      variables: {
        number: {
          type: "Number",
          displayName: "Number",
          defaultValue: undefined,
        },
        bookBadge: {
          type: "Boolean",
          displayName: "Book badge",
          defaultValue: false,
        },
      },
    },
  },
  // {
  //   component: SearchInput,
  //   definition: {
  //     id: "website-component-search-input",
  //     name: "Search Input",
  //     category: "Custom Website Components",
  //     variables: {
  //       dataTestId: {
  //         displayName: "Data Test Id",
  //         type: "Text",
  //         defaultValue: undefined,
  //       },
  //       placeholder: {
  //         displayName: "Placeholder",
  //         type: "Text",
  //         defaultValue: undefined,
  //       },
  //       value: {
  //         displayName: "Value",
  //         type: "Text",
  //         defaultValue: undefined,
  //       },
  //       alwaysOpen: {
  //         displayName: "Always Open",
  //         type: "Boolean",
  //         defaultValue: false,
  //       },
  //       autoFocus: {
  //         displayName: "Auto Focus",
  //         type: "Boolean",
  //         defaultValue: false,
  //         description: "Input will be focused the moment it renders",
  //       },
  //       // onChange, onKeyUp and reset props are missing for purpose to check if it will render with missing props
  //     },
  //   },
  // },
  {
    component: WrappedMainBanner,
    definition: MainBannerDefinition,
    options: {
      wrapComponent: false,
    },
  },
  // {
  //   component: QuickLinkCollection,
  //   definition: {
  //     id: "contentful-quick-link-collection",
  //     name: "Quick Link Collection",
  //     category: "Contentful Components",
  //     variables: {
  //       separator: {
  //         displayName: "Separator",
  //         type: "Text",
  //         defaultValue: " ",
  //       },
  //       headingCopy: {
  //         displayName: "Heading Copy",
  //         type: "Text",
  //         defaultValue: "Heading Copy",
  //       },
  //       // TODO: how to pass structured object to this array?
  //       linksCollection: {
  //         displayName: "Links Collection",
  //         // not sure if it's a good way to od it
  //         type: "Link",
  //         defaultValue: undefined,
  //       },
  //     },
  //   },
  // },
  // contentful provided example components
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
  {
    component: Button,
    definition: ButtonDefinition,
  },
  {
    component: Link,
    definition: LinkDefinition,
  },
  {
    component: Carousel,
    definition: CarouselDefinition,
  },
]);

// could be reused
const luluFeBreakpoints = Object.entries(MEDIA_BREAKPOINTS).map(
  ([label, value]) => {
    return {
      id: label,
      query: `<${value}px`,
      displayName: `${label} screen`,
      previewSize: `${value}px`,
    };
  },
);

defineBreakpoints([
  {
    id: "desktop",
    query: "*",
    displayName: "All Sizes",
    previewSize: "100%",
  },
  ...luluFeBreakpoints,
]);

defineDesignTokens({
  color: Colors,
  textColor: Colors,
});
