import topics from "config/topics";
import { useRef } from "react";
import { getParsedPosts, IPost } from "./Post";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ITopic {
    label: string;
    id: string;
    icon?: IconProp;
    thumbnail_url: string;
    color: string;
    exists: boolean;
    childPosts: IPost[];
}

export class Topic implements ITopic {
    id: string;
    label: string;
    icon?: IconProp;
    thumbnail_url: string;
    color: string;

    constructor(topic_id: string) {
        const topic = topics.find(a => a.id === topic_id);

        this.id             = topic_id;
        this.label          = topic?.label ?? "Unknown";
        this.thumbnail_url  = topic?.thumbnail_url ?? "";
        this.color          = topic?.color ?? "#000";
        // @ts-ignore
        this.icon           = topic?.icon ?? undefined;
    }

    get exists() {
        return !!this.label;
    }

    get childPosts() {
        return getParsedPosts().filter(post => post.topics.find(topic => topic.id === this.id));
    }
}

export const getParsedTopics = () => topics.map(topic => new Topic(topic.id) );

export const useTopics = () => {
    const ref = useRef(getParsedTopics());

    return ref.current as ITopic[];
}

export const useTopic = (topic_id: string) => {
    const ref = useRef(new Topic(topic_id));

    return ref.current as ITopic;
}