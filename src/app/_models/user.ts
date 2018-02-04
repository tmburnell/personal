export class Link {
  url: string;
  img: string;
  prefix: string;
  qrDisplay: boolean;
  uiDisplay: boolean;
}
export class Links {
  email?: Link;
  website?: Link;
  linkedIn?: Link;
  twitter?: Link;
  github?: Link;
  facebook?: Link;
}
export class User {
  name: string;
  title?: string;
  avatar?: string;
  dob?: string;
  address?: string;
  phone?: string;
  links?: Links;
  blurb?: string;
}
