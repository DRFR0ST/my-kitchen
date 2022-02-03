import { IPost, getParsedPosts } from "./Post";
import authors from "config/authors";

export interface IAuthor {
    name: string;
    surname: string;
    id: string;
    posts: IPost[];
    exists: boolean;
    avatar_url: string;
}

export class Author implements IAuthor {
    name: string;
    surname: string;
    id: string;
    avatar_url: string;

    constructor(author_id: string) {
        const author = authors.find(a => a.id === author_id);

        //if(!author) throw new Error(`Author with id ${author_id} cound not be found.`)

        this.name = author?.name ?? "";
        this.surname = author?.surname ?? "";
        this.avatar_url = author?.avatar_url ?? `https://eu.ui-avatars.com/api/?name=${this.name}+${this.surname}`;
        this.id = author_id;
    }

    get exists() {
        return !!this.name;
    }

    get posts() {
        return getParsedPosts().filter(p => p.author?.id === this.id);
    }
}