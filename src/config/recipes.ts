import Unsplash from "utils/Unsplash";

export interface IRecipeData {
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
            id: "the-perfect-pizza",
            title: "The Perfect Pizza",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "pizza", "baked" ],
            thumbnail_url: new Unsplash("MQUqbmszGGM").url ,
            short: "Qui ea nostrud laborum sint laborum commodo et. Adipisicing consectetur duis ex non enim est cillum minim exercitation sit ullamco. Occaecat aliqua occaecat et elit duis elit sunt ea minim laboris officia tempor et."
        },
        {
            id: "british-pancakes",
            title: "British Pancakes",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "breakfast", "sweets", "fried" ],
            thumbnail_url: new Unsplash("QgJ2KMW27Fc").url,
            short: "Enim cupidatat aute duis pariatur elit tempor aliquip ad. Reprehenderit eu dolore ut magna adipisicing eiusmod consectetur quis id fugiat. Cupidatat enim labore culpa reprehenderit eiusmod. Ipsum aliquip non deserunt fugiat incididunt labore deserunt laborum ea adipisicing ea. Consectetur excepteur culpa sunt dolor cillum anim est ut pariatur enim. Eiusmod esse in eu occaecat. Irure voluptate et aliqua excepteur consectetur ipsum ipsum officia aliqua."
        },
        {
            id: "cheese-omlette",
            title: "Cheese Omlette",
            author_id: "000-420",
            created_at: "Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",
            languages: [ "en_US", "pl_PL" ],
            topics: [ "breakfast", "fried" ],
            thumbnail_url: new Unsplash("LAXY7_O1YSA").url,
            short: "Enim cupidatat aute duis pariatur elit tempor aliquip ad. Reprehenderit eu dolore ut magna adipisicing eiusmod consectetur quis id fugiat. Cupidatat enim labore culpa reprehenderit eiusmod. Ipsum aliquip non deserunt fugiat incididunt labore deserunt laborum ea adipisicing ea. Consectetur excepteur culpa sunt dolor cillum anim est ut pariatur enim. Eiusmod esse in eu occaecat. Irure voluptate et aliqua excepteur consectetur ipsum ipsum officia aliqua."
        },
    ] as IRecipeData[];
