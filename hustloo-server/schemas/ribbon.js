export default {
  name: "ribbon",
  title: "Ribbon",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Product",
      name: "product",
      type: "string",
    },

    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
    {
      name: "midText",
      title: "MidText",
      type: "string",
    },
    {
      name: "largeText",
      title: "LargeText",
      type: "string",
    },
  ],
};
