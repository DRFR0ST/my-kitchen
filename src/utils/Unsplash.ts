import { useRef } from "react";

export interface IUnsplash {
    url: string;
    id: string;
    width: number;
    height: number;
    dimensions: (width: number, height: number) => void;
} 

export default class Unsplash implements IUnsplash {
    id: string;
    width: number;
    height: number;
    constructor(image_id: string, dimensions?: { width: number, height: number }) {
        this.id = image_id;
        this.width = dimensions?.width ?? 1920;
        this.height = dimensions?.height ?? 1080;
    }

    get url() {
        return `https://source.unsplash.com/${this.id}/${this.width}x${this.height}`;
    }

    dimensions(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

export const useUnsplash = (image_id: string, dimensions?: { width: number, height: number }) => {
    const ref = useRef(new Unsplash(image_id, dimensions));

    return ref.current;
}