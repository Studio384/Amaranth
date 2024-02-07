import { IAmaranthIcon } from '@studio384/amaranth';

export interface IIcon {
  title: string;
  categories: string[];
  tags: string[];
  created: string;
  updated: string;
}

export interface ILibraryIcon {
  component: string;
  categories: string[];
  tags: string[];
  slug: string;
  icon: IAmaranthIcon;
}

export interface IIconCategory {
  slug: string;
  title: string;
  icon: IAmaranthIcon;
}
