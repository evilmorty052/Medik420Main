import sanityClient from '@sanity/client';
import { useParams } from "react-router-dom";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'noj3nhym',
  dataset: 'production',
  apiVersion: '1',
  useCdn: false,
  create: true,
  token: 'sk8IvTQ8MFOmigOO4sJ7EpOhJGOUio9CHoKCY9sIjYRpIJ0OzYaox5LmRKNN8Ro9FFoR78a7CGbmy3xgdjsdFJ0wTbPwsgd8Jc8yrZ1yk16P3uLmWAaWGoBJPLLnt82X4cFuipHQ3rbvLknsEso2CWIE9Vdh62a0phdDTuMfRbgn0qrgwjgo'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);