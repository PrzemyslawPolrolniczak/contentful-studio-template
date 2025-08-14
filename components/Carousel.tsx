import { ComponentDefinition } from "@contentful/experiences-sdk-react";
import { ContentfulPageComponents } from "../@lulu-press/lulu-fe";

import { luluColors } from "../.contentful/constants";
import React from "react";

const linkItems = ["imageLinkUrl", "url"];
const componentsMap = new Map(Object.entries(ContentfulPageComponents));
// componentsMap.set("TealiumConsentManager", TealiumConsentManager as React.FC);

const getLocaleUrlPrefix = (locale: any) =>
  !locale || locale === "en" ? "" : `/${locale}`;

const ensureValidLink = (
  value: string,
  locale?: any,
  localizeLinks?: boolean,
) => {
  if (!value || value.startsWith("http")) return value;

  if (value.startsWith("/")) {
    value = value.substring(1);
  }

  if (localizeLinks) {
    return `${getLocaleUrlPrefix(locale)}/${value}`;
  }

  return value;
};

const mapToReactComponent = (
  item: any,
  index: number,
  locale?: any,
  localizeLinks?: boolean,
) => {
  if (!item.__typename) {
    return null;
  }

  let { __typename, ...itemProps } = item;

  // component without props should not be displayed because Type Error will be displayed and the page will not work
  if (!itemProps || JSON.stringify(itemProps) === "{}") {
    return;
  }

  if (locale !== "en") {
    const itemInJSON = JSON.stringify(itemProps);

    itemProps = JSON.parse(itemInJSON, (key, value) =>
      linkItems.includes(key)
        ? ensureValidLink(value, locale, localizeLinks)
        : value,
    );
  }

  if (__typename === "Carousel") {
    const { products: oldProducts, ...props } = itemProps as any;

    const products: any[] = oldProducts.map((product: any) => ({
      author: product.contributors[0].name,
      name: product.name,
      thumbnailUrl: product.thumbnailUrl,
      productUrl: product.canonicalUrlSlug,
      type: product.type,
    }));

    // @ts-ignore: Props are passed from contentful, which already has validation of required fields or it's type, so additional type checking here doesn't add any value, only forces hacky way of passing props
    return (
      <ContentfulPageComponents.Carousel
        key={index}
        products={products}
        {...props}
      />
    );
  }

  const Component = componentsMap.get(__typename);

  return Component
    ? /* @ts-ignore: Props are passed from contentful, which already has validation of required fields or it's type, so additional type checking here doesn't add any value, only forces hacky way of passing props */
      React.createElement(Component, { ...itemProps, key: index })
    : null;
};

// The linkedButtonRef and headerTextBlockRef can be added separately (as separate components).
// It's almost impossible to add them in the component definition without changing the Carousel component

export const Carousel = ({ ...props }: any) =>
  mapToReactComponent(
    {
      ...props,
      __typename: "Carousel",
      products: props.products || [],
      headerTextBlockRef: undefined,
      linkedButtonRef: undefined,
    } as any,
    0,
  );

export const CarouselDefinition: ComponentDefinition = {
  id: "carousel",
  name: "Carousel",
  category: "Classic Lulu-fe",
  variables: {
    backgroundColor: {
      type: "Text",
      displayName: "Background Color",
      group: "style",
      defaultValue: "White",
      validations: {
        in: luluColors.map((color) => {
          return {
            value: color,
            displayName: color,
          };
        }),
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
    elementsAligned: {
      type: "Boolean",
      displayName: "Elements Aligned?",
      group: "style",
      defaultValue: false,
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    galleryBookTeaserClassNames: {
      type: "Text",
      displayName: "Gallery Book Teaser class names",
      group: "style",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    isCarousel: {
      type: "Boolean",
      displayName: "Is Carousel?",
      group: "style",
      defaultValue: true,
      validations: {
        bindingSourceType: ["manual"],
      },
    },
    products: {
      type: "Object",
      displayName: "Products",
      validations: {
        bindingSourceType: ["entry"],
      },
    },
    spacingClassNames: {
      type: "Text",
      displayName: "Spacing class names",
      group: "style",
      validations: {
        bindingSourceType: ["manual"],
      },
    },
  },
};
