import data from './placeholder-images.json';

export type PlaceholderImage = {
    id: string;
    description: string;
    imageURL: string;
    imageHint: string;
};

export const PlaceholderImages: PlaceholderImage[] = data.placeholderImages;