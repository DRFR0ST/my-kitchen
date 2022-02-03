import Unsplash from "utils/Unsplash";

export interface IPostData {
    id: string;
    title: string;
    author_id: string;
    created_at: string;
    languages: string[];
    topics: string[];
    thumbnail_url: string;
    short: string;
}

export default
    [
        {
            id: "hello-world",
            title: "Hello World Technology",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "javascript", "offtopic" ],
            thumbnail_url: new Unsplash("NDhYQPglGoA", {width: window.innerWidth, height: 300}).url ,
            short: "Qui ea nostrud laborum sint laborum commodo et. Adipisicing consectetur duis ex non enim est cillum minim exercitation sit ullamco. Occaecat aliqua occaecat et elit duis elit sunt ea minim laboris officia tempor et."
        },
        {
            id: "welcome-to-jamrock",
            title: "Welcome to Jamrock",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "offtopic" ],
            thumbnail_url: new Unsplash("x_WFRyxTtVA", {width: window.innerWidth, height: 300}).url,
            short: "Enim cupidatat aute duis pariatur elit tempor aliquip ad. Reprehenderit eu dolore ut magna adipisicing eiusmod consectetur quis id fugiat. Cupidatat enim labore culpa reprehenderit eiusmod. Ipsum aliquip non deserunt fugiat incididunt labore deserunt laborum ea adipisicing ea. Consectetur excepteur culpa sunt dolor cillum anim est ut pariatur enim. Eiusmod esse in eu occaecat. Irure voluptate et aliqua excepteur consectetur ipsum ipsum officia aliqua."
        },
        {
            id: "rudy",
            title: "Rudy Tytuł",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "linux" ],
            thumbnail_url: new Unsplash("random", {width: window.innerWidth, height: 300}).url,
            short: "Nisi sit laboris quis Lorem Lorem elit deserunt eu elit. Non consequat sint sunt ipsum enim do officia fugiat anim sit non laboris. Laborum ea ullamco aliquip ad."
        },
        {
            id: "rudypedal",
            title: "Rudy Pedał",
            author_id: "100-000",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US" ],
            topics: [ "linux" ],
            thumbnail_url: new Unsplash("random", {width: window.innerWidth, height: 300}).url,
            short: "Eu magna pariatur anim Lorem pariatur ad laboris deserunt exercitation nisi laboris incididunt mollit sit. Nulla dolore id aliqua voluptate eiusmod cillum. Proident excepteur consequat cillum labore incididunt ex aliqua incididunt cillum ea dolor ea Lorem."
        },
{
id: "reset-wordpress-password",
title: "Reset WordPress password with FTP",
author_id: "000-420",
created_at: "Wed Jun 10 2020 13:00:00 GTM+0200 (Central European Summer Time)",
languages: ["en_US"],
topics: ["wordpress"],
thumbnail_url: new Unsplash("random", {width: window.innerWidth, height: 300}).url,
short: "..."
}
    ] as IPostData[];
