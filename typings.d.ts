export interface Map {
  coordinates: number;
  places: string;
}

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  mainImage: {
    asset: { url: string };
  };
  comments: [Comment];
  slug: { current: string };
  description: string;
  body: [object];
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

declare namespace NodeJS {
  //formspree api: string;
}

declare module "google-map-react" {}
