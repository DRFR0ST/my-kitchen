import posts from "config/posts";
import { useRef, useEffect, useState } from "react";
import { IAuthor, Author } from "./Author";
import { Topic, ITopic } from "./Topic";
import {useLittera} from "react-littera";

export interface IPost {
    id: string;
    title: string;
    author: IAuthor | null;
    created_at: Date | null;
    languages: string[];
    topics: ITopic[];
    thumbnail_url: string;
    content?: string;
    exists: boolean;
    fetchContent: () => Promise<string | void | undefined>;
    setLanguage: (language: string) => void;
    short: string;
}

export class Post implements IPost {
    id: string;
    title: string;
    author: IAuthor;
    created_at: Date | null;
    languages: string[];
    thumbnail_url: string;
    topics: ITopic[];
    content: string;
    activeLanguage: string;
    short: string;

    constructor(id: string, initialLanguage?: string) {
        const meta = posts.find(p => p.id === id);

        //if(!meta) throw new Error(`Post with id ${id} could not be found.`);

        this.id = id;
        this.title = meta?.title ?? "";
        this.author = new Author(meta?.author_id ?? "") as IAuthor;
        this.created_at = new Date(meta?.created_at ?? "");
        this.languages = meta?.languages ?? [];
        this.topics = meta?.topics.map((topic_id: string) => new Topic(topic_id)) ?? [];
        this.thumbnail_url = meta?.thumbnail_url || "";
        this.content = "";
        this.activeLanguage = initialLanguage ?? "en_US";
        this.short = meta?.short || "";
    }

    get exists() {
        return !!this.title;
    }

    setLanguage(language: string) {
        if(this.languages.includes(language))
            this.activeLanguage = language;
    }

    // TODO: Implement language detection.
    // TODO: Refactor response texts.
    fetchContent() {
        
        return new Promise<string>((resolve) => {
            let url;
    
            try {
                url = require(`../posts/${this.id}/${this.id}--${this.activeLanguage}.md`)
            } catch(err) {
                console.error(err);
            }

            if(!url) {
                resolve("# Post not found.");
                return;
            }

            fetch(url)
                .then(async (response) => {
                    if(response.ok) {
                        const md = await response.clone().text();

                        resolve(md);
                    } else {
                        resolve("# Error while fetching post.");
                    }
                })
                .catch((err) => {
                    resolve("# Unknown error occurred.");
                    console.error(err);
                });
        })
    }
}

export const getParsedPosts = () => posts.map(post => new Post(post.id));

export const usePosts = (volume?: number) => {
    const ref = useRef(getParsedPosts());

    if(typeof volume === "number") ref.current.length = volume;
    
    return ref.current as IPost[];
}

export const usePost = (id: string) => {
    const [, language] = useLittera();
    const ref = useRef<IPost>(new Post(id, language));

    const signal = useSignal();

    useEffect(() => {
         ref.current.fetchContent()
            .then((md: string | void | undefined) => {
                console.log(md);
                if(typeof md === "string")
                    ref.current.content = md;
                signal();
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ref.current as IPost;
}

export const useSignal = () => {
    const doSignal = useState(false)[1];

    return () => doSignal(s => !s);
}