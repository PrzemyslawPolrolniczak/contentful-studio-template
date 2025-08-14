import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import { BLOCKS } from "@contentful/rich-text-types";
import { Colors, MainBanner, MainBannerProps } from "../@lulu-press/lulu-fe";

const mappedColors = Object.entries(Colors).map(([name, value]) => {
  return {
    value,
    displayName: name,
  };
});

type AdaptedMainBannerProps = Omit<MainBannerProps, "backgroundVideo"> & {
  backgroundVideoUrl?: string;
};

// fallback
const richTextContainerRef = {
  standaloneEntry: false,
  richTextFieldsCollection: {
    items: [
      {
        textAlignment: "center",
        richTextContent: {
          json: {
            nodeType: BLOCKS.DOCUMENT,
            data: {},
            content: [
              {
                nodeType: BLOCKS.HEADING_1,
                content: [
                  {
                    nodeType: "text",
                    value: "This is the text that goes in the heading",
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
        headingTextColor: "#FFFFFF",
        headingClasses: "large top white-text",
      },
      {
        textAlignment: "center",
        richTextContent: {
          json: {
            nodeType: BLOCKS.DOCUMENT,
            data: {},
            content: [
              {
                nodeType: BLOCKS.HEADING_2,
                content: [
                  {
                    nodeType: "text",
                    value: "This is the text that goes in the subheading",
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
        headingTextColor: "#FFFFFF",
        headingClasses: "large subhead white-text",
      },
    ],
  },
};

export const WrappedMainBanner = (props: AdaptedMainBannerProps) => {
  const {
    backgroundVideoUrl,
    richTextContainerRef: _richTextContainterRef,
    backgroundImageRef: _backgroundImageRef,
    ...rest
  } = props;

  const backgroundImageRef = _backgroundImageRef
    ? {
        image: {
          url: (_backgroundImageRef as any).fields.file.url,
        },
        imageForMobile: {
          url: (_backgroundImageRef as any).fields.file.url,
        },
        newTab: false,
      }
    : {
        image: {
          url: "https://assets.lulu.com/media/placeholders/images/main-banner-placeholder-desktop.jpeg",
        },
        imageForMobile: {
          url: "https://assets.lulu.com/media/placeholders/images/main-banner-placeholder-mobile.jpeg",
        },
        newTab: false,
      };

  const richTextBullshitWrapper = {
    standaloneEntry: false,
    richTextFieldsCollection: {
      items: [
        {
          textAlignment: "center",
          richTextContent: {
            json: _richTextContainterRef,
          },
          headingTextColor: "#FFFFFF",
          headingClasses: "large top white-text",
        },
      ],
    },
    richTextContainerClassNames: "large top white-text",
  };

  return (
    <MainBanner
      backgroundVideo={
        backgroundVideoUrl ? { url: backgroundVideoUrl } : undefined
      }
      richTextContainerRef={
        _richTextContainterRef
          ? richTextBullshitWrapper
          : (richTextContainerRef as any)
      }
      backgroundImageRef={backgroundImageRef}
      {...rest}
    />
  );
};

export const MainBannerDefinition: ComponentDefinition = {
  id: "main-banner",
  name: "Main Banner",
  category: "Contentful Components",
  builtInStyles: ["cfMargin"],
  variables: {
    backgroundColor: {
      type: "Text",
      displayName: "Background Color",
      defaultValue: "#00004f",
      group: "style",
      validations: {
        in: mappedColors,
      },
    },
    fullWidthImage: {
      type: "Boolean",
      displayName: "Full Width Image",
      defaultValue: false,
      group: "style",
    },
    isVerticallyCentered: {
      type: "Boolean",
      displayName: "Vertically Centered",
      defaultValue: false,
      group: "style",
    },
    unsetTopPadding: {
      type: "Boolean",
      displayName: "Unset Top Padding",
      defaultValue: false,
      group: "style",
    },
    highPriority: {
      type: "Boolean",
      displayName: "High Priority",
      defaultValue: false,
      group: "style",
    },
    containerHeight: {
      type: "Text",
      displayName: "Container Height",
      defaultValue: "medium",
      group: "style",
      validations: {
        in: [
          {
            value: "short",
            displayName: "Short",
          },
          {
            value: "medium",
            displayName: "Medium",
          },
          {
            value: "tall",
            displayName: "Tall",
          },
        ],
      },
    },
    containerHeightForMobile: {
      type: "Text",
      displayName: "Mobile Container Height",
      defaultValue: "medium",
      group: "style",
      validations: {
        in: [
          {
            value: "short",
            displayName: "Short",
          },
          {
            value: "medium",
            displayName: "Medium",
          },
          {
            value: "tall",
            displayName: "Tall",
          },
        ],
      },
    },
    backgroundVideoUrl: {
      type: "Hyperlink",
      displayName: "Background Video Url",
      defaultValue: undefined,
    },
    idForQuickLink: {
      type: "Text",
      displayName: "ID for Quick Link (? idk what that means)",
      defaultValue: undefined,
    },
    externalVideoUrl: {
      type: "Hyperlink",
      displayName: "External Video Url",
      defaultValue: undefined,
    },
    richTextContainerRef: {
      type: "RichText",
      displayName: "Rich Text (?)",
      defaultValue: undefined,
    },
    backgroundImageRef: {
      type: "Link",
      displayName: "Background Image (? add image with metadata)",
      defaultValue: undefined,
    },
  },
};
