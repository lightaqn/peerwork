export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Image",
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },

    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};

// {
//   title: 'Tags',
//   name: 'tags',
//   type: 'array',
//   of: [
//     {
//       type: 'string',
//     },
//   ],
//   options: {
//     layout: 'tags',
//   },
// },

// {
//   name: 'vendor',
//   title: 'Vendor',
//   type: 'reference',
//   to: {type: 'vendor'},
// },

// preview: {
//   select: {
//     title: 'title',
//     manufactor: 'manufactor.title',
//     media: 'defaultProductVariant.images[0]',
//   },
// },
