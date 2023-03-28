// schema.js


export default {
  name: 'pricing',
  type: 'document',
  title: 'Pricing',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'availableFeatures',
      type: 'array',
      title: 'Available Features',
      of: [{ type: 'string' }],
    },
    {
      name: 'unavailableFeatures',
      type: 'array',
      title: 'Unavailable Features',
      of: [{ type: 'string' }],
    },
    {
      name: 'ctaText',
      type: 'string',
      title: 'CTA Text',
    },
    {
      name: 'ctaLink',
      type: 'string',
      title: 'CTA Link',
    },
  ],
};
