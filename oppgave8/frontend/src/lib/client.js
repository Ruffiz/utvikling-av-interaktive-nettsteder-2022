import sanityClient from '@sanity/client';

// const options = {
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET_NAME,
// };

const options = {
  projectId: 'a34ywvhh',
  dataset: 'production',
  apiVersion: '2021-10-21',
}

// const client = sanityClient({ ...options, useCdn: process.env.NODE_ENV === 'production'});
const client = sanityClient({ ...options, useCdn: false,});

export default client;